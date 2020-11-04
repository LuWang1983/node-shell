const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')

function done(output) {
  // Show the output
  process.stdout.write(output)
  // show the prompt
  process.stdout.write('\nprompt > ')
}

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const input = data.toString().trim(); //removes the newline
  const cmd = input.split(" ")[0]
  const arg = input.split(" ")[1]

  if (cmd === 'pwd') pwd(done);
  if (cmd === 'ls') ls(done)
  if (cmd === `cat`) cat(arg, done)
  if (cmd === `curl`) curl(arg, done)

})
