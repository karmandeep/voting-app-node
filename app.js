var EventEmitter = require('events');

var util = require('util');


//Create own function constructor

function Greetr() {
    this.greeting = 'Hello world!';
}

//Any objects created from Greetr shoudl also have to the Methods and properties.
//On the prototype, property of Event Emitter, So esentially any new objects
//created from Greetr would also look at the event Emitter Methods and Proerties.

util.inherits(Greetr, EventEmitter);

//Add my own EXTRA Methods and properties.

Greetr.prototype.greet = function(data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}

//Ojects that are being created will have access to both the greetr 
//Methods and properties and the Event Emitter Methods and properties.

//Create New Object
var greeter1 = new Greetr();

//Because this has both access to the peroperties of both greeter.

greeter1.on('greet', function(data){
    console.log('Someone greeted!' + data);
});

greeter1.greet('Karmandeep');



