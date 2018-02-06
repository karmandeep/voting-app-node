var name = "John Doe";

var greet = 'Hello ' + name;

//With ES6 there is something called template literals.

//Template Literals make it easier to build string, to concatinate strings together

//Template Literal
//It let me insert javascript code without having to stop the string and use
//Pluses to concatinate and everything else.


//This is a Lot faster and easier and less prone to mistakes.

var greet2 = `Hello ${ name }`; 
//We can't do this in any browser, if we want to do this in any browser
//Because it may not be supported.

//But if we want to do this in the browser, use something like Babel.

console.log(greet);
console.log(greet2);
