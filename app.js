const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);

  // test
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title already exists');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(element => notes.logNote(element));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);

  // test
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var removedNote = notes.removeNote(argv.title);

  // test
  var message = removedNote ? 'Note is removed' : 'Note not exists';
  console.log(message);
} else {
  console.log('unknown command')
};
