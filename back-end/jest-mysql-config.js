// So that credentials can be hidden inside environment file
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  databaseOptions: {
    host: process.env.REACT_APP_HOST,
    port: process.env.REACT_APP_PORT,
    user: process.env.REACT_APP_USER,
    password: process.env.REACT_APP_PASSWORD,
    database: process.env.REACT_APP_DATABASE
  }
};
