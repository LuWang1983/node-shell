const fs = require('fs')

function cat(fileName, done) {
  fs.readFile(`./${fileName}`, 'utf-8', (err, data) => {
    if (err) done(err);
    else done(data);
  });
}

module.exports = cat;
