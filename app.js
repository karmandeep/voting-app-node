function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;
};

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};


var john = new Person('John' , 'Doe');
john.greet();

var jane = new Person('Jane' , 'Doe');
jane.greet();

//To see How the Prototype looks like
console.log(john.__proto__);
console.log(jane.__proto__);

console.log(john.__proto__ === jane.__proto__);