// const fs = require('node:fs');
// const http = require('node:http');
// const server = http.createServer();

// fs.writeFile('word.txt','welcome word page',(err)=>{console.log('word page console')})
// server.on('request', (req, res) => {
//     // fs.readFile("word.txt", (err, data) => {
//     //     if (err) return console.log(err);
//     //     console.log(data.toString());
//     //     res.end(data.toString())
//     // })




//     const rstream = fs.createReadStream('word.txt');
//     // rstream.on('data',(chunkdata)=>{
//     //     res.write(chunkdata)
//     // })
//     // rstream.on('end',()=>{
//     //     res.end()
//     // })
//     // rstream.on('error',(err)=>{
//     //     console.log(err)
//     //     res.end('file is not found');
//     // })



//     rstream.pipe(res)
// })

// server.listen(8000,'127.0.0.1')