//------------Events in Node JS

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
  setTimeout(()=>{
    console.log("Event is emitted after 2 seconds")
  },5000)
});

myEmitter.emit('event');


//Settimout() is a add delay like sleep() other language.