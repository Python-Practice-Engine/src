const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

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

// For the questions page
// Route for retrieving questions based on concepts
app.get('/questionSet/:tags', (req, res) => {
  var tags = req.params.tags;
  const sqlSearch = `SELECT * FROM Questions WHERE tags = ?;`;
  db.query(sqlSearch, [tags], (err, result)=> {
    res.send(result);
  });
});

// For the Practice Engine page
// Route for retrieving question from database to populate question page
app.get('/questions/:Qid', (req, res) => {
  // Retrieve the tag from our URL path
  var Qid = req.params.Qid;
  const sqlRetrieve = `SELECT * FROM Questions WHERE Qid = ?;`;
  db.query(sqlRetrieve, [Qid], (err, result)=> {
    res.send(result);
  });
});

// For the Practice Engine page
// Route for retrieving testcases related to a question
app.get('/testcases/:Qid', (req, res) => {
  // Retrieve the question id from our URL path
  var Qid = req.params.Qid;
  const sqlRetrieve = `SELECT * FROM Testcases WHERE Qid = ?;`;
  db.query(sqlRetrieve, [Qid], (err, result)=> {
    res.send(result);
  });
});

// For the Practice Engine page
// Route for retrieving testcases related to a question
app.get('/tutorial/:Tid', (req,res) => {
  var Tid = req.params.Tid;
  const sqlRetrieve = `SELECT * FROM Tutorials WHERE Tid = ? OR Tid = -1 ORDER BY Tid DESC LIMIT 1;`;
  db.query(sqlRetrieve, [Tid], (err, result)=> {
    res.send(result);
  });
});

module.exports = app;