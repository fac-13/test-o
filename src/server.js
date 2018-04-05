const http = require('http');
const router = require('./router.js');

const server = http.createServer(router);
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

server.listen(port, () => {
    console.log(`Magic happens at http://${host}:${port}`);
});
