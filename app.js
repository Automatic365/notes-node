const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')
const titleOptions = {
  describe:'Title of new note',
  demand: true,
  alias: 't'
}

const argv = yargs
.command('add', 'Add new note', {
  title: titleOptions,
  body: {
    describe: 'Body of new note',
    demand: true,
    alias: 'b'
  }
})
.command('list', 'List all stored notes')
.command('remove', 'Remove a specific note', {
  title: titleOptions
})
.command('read', 'Read a specific note', {
  title: titleOptions
})
.help()
.argv
var command = argv._[0]


if(command === "list"){
  allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s)`)
  allNotes.forEach((note) => notes.logNote(note))
} else if (command === "add"){
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log("Note saved")
    notes.logNote(note)
  } else {
    console.log("Note not saved. Duplicate title")
  }
} else if(command === "read") {
  note = notes.readNote(argv.title)
  if (note) {
    console.log("Note Found")
    notes.logNote(note)
  } else {
    console.log("Note not found")
  }
} else if(command === "remove"){
  note = notes.removeNote(argv.title)
  if(!note){
    console.log("Note not found")
  } else {
    console.log("Note removed successfully")
  }
} else {
  console.log("Command Not Recognized")
}
