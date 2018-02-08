'use strict';

var Greetr = require('./greetr');

var greeter = new Greetr();

greeter.on('greet', function(data){
    console.log('Someone greeted!: ' + data);
})

greeter.greet('Karmandeep');


//Ok this node and can i use this in a Module.