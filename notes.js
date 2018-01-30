console.log('it works');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var dublicateNotes = notes.filter(note => note.title === title);

  if (dublicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    
    return note;
  }
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title === title);

  return filteredNotes[0];
};

var getAll = () => {
  console.log('Getting all notes');
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length !== filteredNotes.length;
};

var logNote = (note) => {

  debugger;

  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote,
  logNote
};
