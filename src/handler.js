const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const googleLocations = require('google-locations');
require('env2')('./config.env')
const { log } = console;


const resResourceError = (res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Sorry Page Not Found');
};

const res200 = (res, file, contentType) => {
  res.writeHead(200, { 'Content-Type': `${contentType}` });
  res.end(file);
};

const staticHandler = (req, res) => {
  const { url } = req;

  let basePath = path.resolve('./'); // path to start with root of project
  let resource = url.replace(/^(\.+[/\\])+/, ''); // removes all ./ and ../

  if (url === '/' || url === '/index.html') {
    basePath = path.resolve('./public');
    resource = '/index.html';
  }

  const ext = resource.split('.')[1];
  const contentType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon'
  }[ext];

  const filePath = path.join(basePath, resource);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      resResourceError(res);
    } else {
      res200(res, file, contentType);
    }
  });
};

const spaceHandler = (req, res) => {
  log(req);
}

const locationHandler = (req, res) => {
  log(req);
  const { url } = req;
  const { keyword } = qs.parse(url);
  const options = { 
    input: keyword,
    location: '51.515419,-0.141099',
    types: 'establishment',
    radius: '100',
  };
  const locations = new googleLocations(process.env.GOOGLE_API_KEY);
  locations.autocomplete(options, function (err, response) {
    if (err) {
      res.writeHead(500, {'content-type': 'text/plain'})
      res.end(err)
    } else {
      const { predictions } = response;
      const result = predictions.map((place) => {
        const { description, place_id } = place;
        return { description, place_id };
      });
      log(result);
      res200(res, JSON.stringify(result), 'application/json');
    }
  });
};

const chooseLocationHandler = (req, res) => {
  const { url } = req;
  const locations = new googleLocations(process.env.GOOGLE_API_KEY);
  // const { placeid } = qs.parse(url);
  const placeid = "ChIJnX2njGIPdkgRJSUCk-BqQsk";
  const options = { placeid: placeid };
  locations.details(options, function (err, response) {
    if (err) {
      log(err)
    } else {
      const { result: { geometry: { location: latlong }}} = response;
      console.log(latlong);

    }

    });
};

const addReviewHandler = (req, res) => {
  log(req);
}

module.exports = {
  staticHandler,
  spaceHandler,
  locationHandler,
  chooseLocationHandler,
  addReviewHandler,
};
