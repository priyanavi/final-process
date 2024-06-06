const logEvents=require('./logs')
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('log', (message) => {
  logEvents(message);
});
myEmitter.emit('log','log created');
