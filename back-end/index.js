const express = require('express');
const app = express();
const mysql = require('mysql');
const db = mysql.createPool({
  host: process.env.REACT_APP_HOST,
  port: process.env.REACT_APP_PORT,
  user: process.env.REACT_APP_USER,
  password: process.env.REACT_APP_PASSWORD,
  database: process.env.REACT_APP_DATABASE
})

app.get('/', function (req, res) {
  const sqlSearch = "SELECT * FROM questions"
  db.query(sqlSearch, (err, result)=> {
    res.send(result)
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});



// const bodyParser = require('body-parser')
// const path = require('path');
// res.sendFile(path.join(__dirname, 'build', 'index.html'));

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });