const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

const baseNAme = path.basename(filePath)
console.log(baseNAme)

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)
