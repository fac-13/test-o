const { staticHandler } = require('./handler');

const router = (request, response) => {
  staticHandler(request, response);
}

module.exports = router;