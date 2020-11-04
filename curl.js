const request = require('request');

function curl(url) {
  request.get(url)
    .on('response', function (response) {
      console.log(response.body)
      process.stdout.write('promt > ');
    })
}



module.exports = curl
