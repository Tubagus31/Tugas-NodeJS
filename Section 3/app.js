const fs = require('fs')
fs.writeFileSync('notes.txt', 'I live in Philadelphia')

const checkUtils = require('./utils.js')
checkUtils()

const validator = require('validator')
console.log(validator.isURL('https://mead.io')) // Print: true