//Module
//CommonJs, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')  //expoets an object
const sayHi = require('./5-utils')  //exports a function
const data = require('./6-alternative-exports')

console.log(names)
console.log(data)

sayHi("Susan")
sayHi(names.john)
sayHi(names.peter)