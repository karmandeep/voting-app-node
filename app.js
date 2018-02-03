var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed Hello World!';

//It becomes the same object at greet even if we require that.

var greet3b = require('./greet3');
greet3b.greet();

//To answer that we need to look on into the require function one more time.
//It would be a reference to the object which was required in the initial call.
//The Results are cached, and any subsiquest require calls and that includes a cross difference javascript files.
//So I might use require multiple times, accross my node application,
//calling the same file or the same module, in different places where in need it.
//but only ever it will be called once.

//SO that's extremely effient, and also allows to create a single object that can then
//be referenced an used in different ways.

/*********************************************************** */
//What I don't want the same object from require all the time.

//Simple change what i attach to.
//Module .exports or by replace it with.
var Greet4 = require('./greet4');
var grtr = new Greet4();

//Becuae Greet 4 is now a constructor function.
grtr.greet();


//Won't have the Direct Access to the greeting variable outside the module.
//But Since module.exports is returned from this module, I won't have direct access
// to the greeting variable outside the module.

//So i have a number of other functions and variables and logics 
//That is not exposed outside the module, i simply reveal only the functions
// methods the properties , the values i want someone to actually be able to use
//Everything else remains hidden or private.

//This is called the revealing module pattern.

//Revealing Module: This where we only want ot expose the properties of the modules via a returned object.
//This is very common and a clean way to structure our code within a module.
//SO we might have various functions / logics variables but we only expose what we want.
//That keeps the usage of the module / outside the module from allowing any accidetal adjuestments.
//to the things module needs t work, but a way for us to make the module useful but at the same time protect its contents.

var greet5 = require('./greet5').greet;
greet5();
