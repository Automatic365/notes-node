console.log("Starting notes.js")

const fs = require('fs')

var addNote = function(title, body){
  var notes = []
  var note = {
    title,
    body
  }

  try {
    var noteString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(noteString)
  } catch (e){

  }

  var duplicateNotes = notes.filter((note => note.title === title))
  

  if (duplicateNotes.length === 0){
    notes.push(note)
    stringNotes = JSON.stringify(notes)
    fs.writeFileSync("notes-data.json", stringNotes)
  }

}


module.exports = {
  addNote
  // getAll,
  // removeNote,
  // readNote
}
