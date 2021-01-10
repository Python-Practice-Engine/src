const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
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

app.get('/', (req, res) => {
  const sqlSearch = "SELECT * FROM questions;";
  db.query(sqlSearch, (err, result)=> {
    res.send(result);
  });
});

app.get('/questions/:id', (req, res) => {
  // Retrieve the tag from our URL path
  var id = req.params.id;

  const sqlRetrieve = `SELECT * FROM questions WHERE id = ${id};`;
  db.query(sqlRetrieve, (err, result)=> {
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});