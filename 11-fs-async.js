const { readFile, writeFile } = require('fs')

// without 'utf8', the return is: <Buffer 48 65 6c 6c 6f 2c 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 2e>
readFile('./content/first.txt','utf8',(err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt','utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile('./content/result-async.txt', 
  `Here is the result: ${first}, ${second}`, (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(result)
  })
  })
})