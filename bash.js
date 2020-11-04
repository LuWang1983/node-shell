const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl')

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //removes the newline
  if (cmd === 'pwd') pwd();
  if (cmd === 'ls') ls()

  // process.stdout.write('\nprompt >')
})


// const done = (output) => {

// }
