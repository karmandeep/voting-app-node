//This is to Follow Standard.
'use strict';
//Class is just a Suntactic Sugar .i.e its just a Function.
//Class Person
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        console.log('Hello ' + this.firstname + ' ' + this.lastname);        
    }
}
//Don't use Concepts and patterns from other programming languages into classes.


//Using Classes is Easier and Cleaner looking then to setup our objects.
var john = new Person('John' , 'Doe');
john.greet();

var jane = new Person('Jane' , 'Doe');
john.greet();

console.log(john.__proto__);
console.log(john.__proto__);
console.log(john.__proto__ === jane.__proto__ );

//This is New and Clean, if you know what you are doing or if you understand
//javascript objects, protoype chains and prototype objects.
// Inhertance work, this can be a ver nice way syntactically.