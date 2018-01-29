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

var getAll = () => {
  console.log('Getting all notes');
};

var removeNote = (title) => {
  console.log('removing note', title)
};

var readNote = (title) => {
  console.log('reading note', title)
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  readNote
};
