const fs = require('fs')

module.exports = function () {
  //'files' will be an array of filenames, list ['bash.js', 'pwd.js']
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) throw err;
    process.stdout.write(files.join('\n'))
    process.stdout.write('\nprompt >')
  })

}

// There exists a simpler, synchronous version of the fs.readdir method, fs.readdirSync. Throughout this workshop, however, you will be required to use async methods. This is an artificial imposition since our node shell UI does not significantly benefit from asynchronicity; however, we want you to practice using Node.js-style callbacks for control flow.


