console.log("Starting notes.js")

const fs = require('fs')
var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = function(title, body){
  var notes = fetchNotes()
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note => note.title === title));

  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
  }
};


module.exports = {
  addNote
  // getAll,
  // removeNote,
  // readNote
}
