const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const { nanoid } = require('nanoid');

// So that credentials can be hidden inside environment file
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createPool({
  host: process.env.REACT_APP_HOST,
  port: process.env.REACT_APP_PORT,
  user: process.env.REACT_APP_USER,
  password: process.env.REACT_APP_PASSWORD,
  database: process.env.REACT_APP_DATABASE
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/insert_user', (req, res) => {
  const user_id = req.body.user_id;
  // Insert user id into user table
  const sqlInsertUserId = 'INSERT INTO user (id) VALUES (UUID_TO_BIN(?));'
  db.query(sqlInsertUserId, user_id, (err, result) => {
    // res.send(result); 
    // Insert concepts in user_concept table for user
    const sqlInsertUserConcepts = `INSERT INTO user_concept (user_id, concept_id, completed)
      SELECT UUID_TO_BIN(?), concept.id, False
      FROM concept;`
    db.query(sqlInsertUserConcepts, user_id, (err, result) => {
      // res.send(result);
      // Set 'start' concept to completed so first question can be shown
      const sqlUpdateStartConcept = `UPDATE user_concept
        SET completed = True
        WHERE concept_id = 0
        AND user_id = UUID_TO_BIN(?);`;
      db.query(sqlUpdateStartConcept, user_id, (err, result) => {
        console.log('inserted!');
      })
    });

    // Insert questions into user_question table for user
    const sqlInsertUserQuestions = `INSERT INTO user_question (user_id, question_id, completed)
    SELECT UUID_TO_BIN(?), id, False
    FROM question;`
    db.query(sqlInsertUserQuestions, user_id, (err, result) => {
      // res.send(result); 
    });

    // Insert test cases into user_test_case table for user
    const sqlInsertUserTestCases = `INSERT INTO user_test_case (user_id, test_case_id, passed)
    SELECT UUID_TO_BIN(?), test_case.id, null
    FROM test_case;`
    db.query(sqlInsertUserTestCases, user_id, (err, result) => {
      // res.send(result); 
    });
  });  
})

app.post('/mark_complete/:user_id/:concept_id/:question_id', (req, res) => {
  const user_id = req.params.user_id;
  const question_id = req.params.question_id;
  const concept_id = req.params.concept_id;
  const sqlQuestionComplete = `
  UPDATE user_question
  SET completed = True
  WHERE question_id = ?
  AND user_id = UUID_TO_BIN(?);`;
  db.query(sqlQuestionComplete, [question_id, user_id], (err, result) => {
    const sqlCountQuestionsOfConcept = `
    SELECT COUNT(uq.question_id) AS count
    FROM user_question AS uq 
    WHERE uq.user_id = UUID_TO_BIN(?)
    AND uq.completed = False
    AND uq.question_id IN(
    SELECT qc.question_id 
    FROM question_concept AS qc
    WHERE concept_id = ?);`;
    db.query(sqlCountQuestionsOfConcept, [user_id, concept_id], (err, result) => {
      const count = JSON.parse(JSON.stringify(result))[0].count;
      if (count == 0) {
        const sqlConceptComplete = `UPDATE user_concept
        SET completed = True
        WHERE concept_id = ?
        AND user_id = UUID_TO_BIN(?);`
        console.log(concept_id, user_id)
        db.query(sqlConceptComplete, [concept_id, user_id], (err, result) => {
          console.log(result);
          res.send(result);
        })
      }
    });
  });
})

app.post('/mark_test_case/:user_id/:test_case_id/:did_pass', (req, res) => {
  const user_id = req.params.user_id;
  const test_case_id = req.params.test_case_id;
  const did_pass = req.params.did_pass;
  const sqlMarkTestCase = `UPDATE user_test_case
  SET passed = ?
  WHERE user_id = UUID_TO_BIN(?)
  AND test_case_id = ?;`;
  db.query(sqlMarkTestCase, [did_pass, user_id, test_case_id], (err, result) => {
    res.send(result);
    console.log("test case marked!")
  })
})

app.get('/next_question/:user_id', (req, res) => {
  // Retrieve the tag from our URL path
  var user_id = req.params.user_id;
  const sqlGetQuestions = `SELECT question_prereq_concept.question_id
  FROM question_prereq_concept
  JOIN user_question ON user_question.question_id = question_prereq_concept.question_id
  JOIN user_concept ON user_concept.concept_id = question_prereq_concept.prereq_concept_id 
  AND user_concept.user_id = user_question.user_id
  WHERE user_concept.completed = True
  AND user_question.completed = False
  AND user_question.user_id = UUID_TO_BIN(?);`;
  db.query(sqlGetQuestions, user_id, (err, questions) => {
    const random = Math.floor(Math.random() * questions.length);
    const question_id = questions[random].question_id;
    const sqlGetQuestion = `SELECT * FROM question WHERE id = ?`
    db.query(sqlGetQuestion, question_id, (err, question) => {
      res.send(question);
    })
  });
});

app.get('/easier_question/:user_id/:question_id', (req, res) => {
  // Retrieve the tag from our URL path
  const user_id = req.params.user_id;
  const question_id = req.params.question_id;
  const sqlGetQuestions = `SELECT question_prereq_concept.question_id
  FROM question_prereq_concept
  JOIN user_question ON user_question.question_id = question_prereq_concept.question_id
  JOIN user_concept ON user_concept.concept_id = question_prereq_concept.prereq_concept_id 
  AND user_concept.user_id = user_question.user_id
  WHERE user_concept.completed = True
  AND user_question.completed = False
  AND user_question.user_id = UUID_TO_BIN(?)
  AND user_question.question_id != ?;`;
  db.query(sqlGetQuestions, [user_id, question_id], (err, questions) => {
    const random = Math.floor(Math.random() * questions.length);
    const question_id = questions[random].question_id;
    const sqlGetQuestion = `SELECT * FROM question WHERE id = ?`
    db.query(sqlGetQuestion, question_id, (err, question) => {
      res.send(question);
    })
  });
});

app.get('/get_user_question/:user_id/:question_id', (req, res) => {
  // Retrieve the tag from our URL path
  const user_id = req.params.user_id;
  const question_id = req.params.question_id;
  const sqlGetQuestions = `SELECT * 
  FROM question 
  WHERE id = ?;`;
  db.query(sqlGetQuestions, question_id, (err, question) => {
    res.send(question);
  });
});

app.get('/concept/:question_id', (req, res) => {
  // Retrieve the tag from our URL path
  var question_id = req.params.question_id;
  const sqlGetConcept = `SELECT *
  FROM concept
  WHERE id IN (
  SELECT concept_id
  FROM question_concept
  WHERE question_id = ?);`;
  db.query(sqlGetConcept, question_id, (err, concept) => {
    res.send(concept);
  });
});

app.get('/user/:user_id/test_cases/:question_id', (req, res) => {
  // Retrieve the tag from our URL path
  const question_id = req.params.question_id;
  const user_id = req.params.user_id;
  const sqlGetTestCases = `SELECT user_id, test_case_id, question_id, number, passed, test, code, expected 
  FROM user_test_case AS utc 
  JOIN test_case AS tc ON utc.test_case_id = tc.id
  WHERE question_id = ?
  AND user_id = UUID_TO_BIN(?);`;
  db.query(sqlGetTestCases, [question_id, user_id], (err, testCases) => {
    if(err) {
      console.log(err);
    }
    res.send(testCases);
  });
});

// For the Practice Engine page
// Route for retrieving question from database to populate question page
app.get('/questions/:Qid', (req, res) => {
  // Retrieve the tag from our URL path
  var Qid = req.params.Qid;
  const sqlRetrieve = `SELECT * FROM question WHERE id = ?;`;
  db.query(sqlRetrieve, [Qid], (err, result)=> {
    res.send(result);
  });
});

module.exports = app;