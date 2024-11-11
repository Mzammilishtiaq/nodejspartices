const { isUtf8 } = require('node:buffer');
const fs = require('node:fs');
// fs.writeFile('bio.txt','today i access day',
// (err)=>{
//     console.log(err)
// })

// fs.appendFile('bio.txt','data will be complate',(err)=>{
//     console.log(err)
//     console.log('task complate')
// })
const read =fs.readFile('bio.txt','utf-8',(err,data)=>{
    console.log(data)
})
console.log(read)