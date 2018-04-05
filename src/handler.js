const fs = require('fs');
const { log } = console;

const staticHandler = (req, res) => {
  log(req);
}

const spaceHandler = (req, res) => {
  log(req);
}

const locationHandler = (req, res) => {
  log(req);
}

const addReviewHandler = (req, res) => {
  log(req);
}

module.exports = {
  staticHandler,
  spaceHandler,
  locationHandler,
  addReviewHandler,
};
