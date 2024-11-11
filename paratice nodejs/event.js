const EventEmitter= require("node:events");
const event = new EventEmitter();
event.on('sayname',()=>{
    console.log('your name is vinod')
})
event.emit("sayname");
event.on('checkmessage',(state,mess)=>{
    console.log(state,mess)
})
event.emit("checkmessage",200,'ok')

