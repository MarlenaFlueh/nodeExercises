var fs = require('fs');

var origNote = {
  title: 'some title',
  body: 'some body'
};

var origNoteString = JSON.stringify(origNote);

fs.writeFileSync('notes.json', origNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);