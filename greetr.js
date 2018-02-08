'use strict';
var EventEmitter = require('events');

//Class Does the same thing its just that we have to type the
//extends EventEmitter
module.exports = class Greetr extends EventEmitter {
    //Constructor
    constructor(){
        //Instead of calling the parent::__construct in other languages
        super(); //<- This actually does the same thing.
        //ANy Object would get this property
        this.greeting = 'Hello world!';

        //How can i make sure, the event emitter constructor is also called.
    }

    greet(data) {
        //Could convert this to Template Literals,
        //If i Wanted to
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet' , data);            
    }
}
