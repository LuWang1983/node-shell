const request = require('request');

function curl(url, done) {
  request(`${url}`, (err, res, body) => {
    if (err) done(err);
    else {
      // done(res.statusCode)
      done(body)
    }
  })
}

module.exports = curl
