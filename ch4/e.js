const log = require('./logEmmiter')
const EventEmitter  = require('events');

const emmiter = new EventEmitter();



emmiter.on('log', (msg)=>{log(msg,'myFile.txt')});
setTimeout(() =>{
  
  emmiter.emit('log',"I am finish my task!!!!!!!");
},5000);