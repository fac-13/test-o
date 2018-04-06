// Add code below to query your database
const dbConnection = require("../database/db_connection.js");

const getData = cb => {
  dbConnection.query(
    `SELECT * FROM spaces LEFT JOIN reviews ON spaces.id = reviews.spacesid`,
    (err, res) => {
      if (err) {
        cb(err);
        console.log(err);
      } else {
        cb(null, res.rows);
        console.log(res.rows);
      }
    }
  );
};

const getSpaces = cb => {
  dbConnection.query(`SELECT * FROM spaces`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};
getSpaces((err, res) => {
  if (err) return console.log(err);
  console.log(res);
});

module.exports = { getData, getSpaces };
