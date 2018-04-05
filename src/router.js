const { staticHandler } = require('./handler');
const { log } = console;

const router = (request, response) => { 
  if (request.method === 'GET') {
    staticHandler(request, response);

  } else if (request.method === 'POST') {

  }

}

module.exports = router;