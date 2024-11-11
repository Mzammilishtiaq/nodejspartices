const fs = require("node:fs");
const biodata={
    name:'muzammil',
    age:22,
    channel:'muzammil ishtiaq'
}
const json = JSON.stringify(biodata);
fs.writeFile('datastore.json',json,(err)=>{
    console.log('done data show')
})
fs.readFile('datastore.json','utf-8',(err,data)=>{
    console.log('data is read',data)
    const org= JSON.parse(data)
    console.log(org)
})