// Add code below to query your database
const dbConnection = require("../database/db_connection.js");

const getData = (cb) => {
  dbConnection.query(`SELECT * FROM spaces LEFT JOIN reviews ON spaces.id = reviews.spacesid`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getData;
