console.log('Starting app...')
const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv
var command = argv._[0]
console.log(command)

if(command === "list"){
  notes.getAll()
} else if (command === "add"){
  var note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log("Note saved")
  } else {
    console.log("Note not saved. Duplicate title")
  }
} else if(command === "read") {
  notes.readNote(argv.title)
} else if(command === "remove"){
  notes.removeNote(argv.title)
} else {
  console.log("Command Not Recognized")
}
