const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];

console.log('Command: ', command);
console.log('Yards:', argv);

if (command === 'list') {
  notes.getAll();
} else if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  
  // test
  if (typeof note === 'undefined') {
    console.log('Note title already exists');
  } else {
    console.log('Note created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);    
  };

} else if (command === 'read') {
  notes.readNote(argv.title)
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('unknown command')
}
