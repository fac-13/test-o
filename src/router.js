const { staticHandler, spaceHandler, locationHandler, addReviewHandler } = require('./handler');
const { log } = console;

const router = (request, response) => { 
  const { url } = request;
  if (request.method === 'GET') {
    if (url.includes('search-space')) {
      spaceHandler(request, response);
    } else if (url.includes('search-location')) {
      locationHandler(request, response);
    } else {
      staticHandler(request, response);
    }
  } else if (request.method === 'POST') {
    addReviewHandler(request, response);
  }
}

module.exports = router;