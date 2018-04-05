const test = require('tape');
const supertest = require('supertest');
const { 
  staticHandler,
  spaceHandler,
  locationHandler,
  addReviewHandler,
} = require('../handler');

test('Testing static file handler', (t) => {
  t.plan(1)
  supertest(staticHandler)
    .get('/')
    .expect(200)
    .expect('content-type', /html/)
    .end((err, res) => {
      t.error(err, 'GET to \'/\' will respond with a html file');
    })
});