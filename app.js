//IN This Code we used the node event emitter.

var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
    console.log('Somewhere, someoen said hello');
});

emtr.on(eventConfig.GREET, function(){
    console.log('A greeting occured');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);