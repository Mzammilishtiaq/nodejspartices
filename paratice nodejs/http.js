// const http= require("node:http");
// const server = http.createServer((req,res)=>{
//     // console.log(req.url);
//     if (req.url == '/') {
//         res.end("hello i am here home");
//     }else if (req.url == '/about') {
//         res.end("hello i am here about");
//     }else{
//         res.writeHead(404,{ 'Content-Type': 'text/html'})
//         res.end('<h1>page not found</h1>')
//     }
// })
// server.listen(8000,'127.0.0.1',()=>{
//     console.log('Listening on 127.0.0.1:8000')
// })