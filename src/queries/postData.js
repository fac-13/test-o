const dbConnection = require("../database/db_connection.js");

const postSpace = (id, name, latitude, longitude, cb) => {
  dbConnection.query(`INSERT INTO spaces (id, name, latitude, longitude) VALUES ($1,$2,$3,$4)`, [id, name, latitude, longitude], (err, res) =>{
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  })
}

const postReview = (id, rating, spacesid, cb) => {
  dbConnection.query(`INSERT INTO reviews (id, rating, spacesid) VALUES ($1,$2,$3)`, [id, rating, spacesid], (err, res) =>{
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  })
}

module.exports = { postSpace,
                   postReview
                 };
