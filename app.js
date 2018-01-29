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
  if (note) {
    console.log('Note created');
  } else {
    console.log('Note title already exists');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);    
  };

} else if (command === 'read') {
  notes.readNote(argv.title)
} else if (command === 'remove') {
  var removedNote = notes.removeNote(argv.title);

  // test

  var message = removedNote ? 'Note is removed' : 'Note not exists';
  console.log(message);
} else {
  console.log('unknown command')
};
