// const fs= require("node:fs");
// const chalk = require('chalk');
// const chalk = require('chalk');
// const validator = require("validator");
// console.log(chalk.bgGreen(validator.isEmail('muzammilishtiaq@gmail.com')))
// console.log(chalk.bgBlue('Hello world!'));


// fs.writeFileSync("read.txt","muzammil welcome to my channel");
// fs.appendFileSync("read.txt","ishtiaq welcome to my channel");

// const read = fs.readFileSync("read.txt");
// const org = read.toString();
// console.log(org);

// fs.renameSync('read.txt','readjs.txt')

// fs.writeFileSync('bio.txt','i am front end developer');
// fs.appendFileSync('bio.txt','i am full stack developer');
// const read = fs.readFileSync('bio.txt','utf8');
// console.log(read)
// fs.renameSync('bio.txt','biojs.txt')
// //fs.mkdirSync("project")

// fs.unlinkSync('biojs.txt')
// fs.rmdirSync('project')

// const {add,sub,mul} = require('./cusmodule')
// console.log(add(2,4))
// console.log(sub(2,4))
// console.log(mul(2,4))

// const http= require('node:http')
// const fs = require('node:fs')

// const server = http.createServer((req,res)=>{
//   const data=  fs.readFileSync(`${__dirname}/userapi/userdata.json`,'utf-8');
//     if (req.url == '/user') {
//         res.writeHead(200,{'content-type':"application/json"})
// res.end(data)
//     }
// })

// server.listen(8000,'127.0.0.1',()=>{
//     console.log('listening port 8000')
// })