const fs = require('fs');
const { log } = console;
const staticHandler = (req, res) => {
  log(req);
}

module.exports = {
  staticHandler,
};
