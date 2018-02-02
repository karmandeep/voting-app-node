// function statement

function greet() {
    console.log('Hi');
}

greet();

// Functions are first-class

function logGreeting(fn) {

    fn();
}

logGreeting(greet);

//function expression
var greetMe = function() {
    console.log('Hi Karmandeep');
}

greetMe();

// it's First Class

logGreeting(greetMe);


// Use Function Expression on the fly

logGreeting(function() {
    console.log('Hello Karmandeep!');
})

