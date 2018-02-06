var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

//this is an empty object
var john = Object.create(person);
//Can overwrite them or block the ones on the prototype by simply adding properties
//and methonds with same name - dirctly to the object.

//So whe the javascript looks for firstname it will find it on the john object and not bother
//Going down the chain to find it on person.

john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

//So both of these objects have access down the prototype chain to that method.
//Object.create is a very simple fast and clean way to setup in-heritance
//That is objects being able to use methods and properties of other objects



console.log(john.greet());
console.log(jane.greet());