var firstname = 'Jane';

(function(lastname) {

    var firstname = 'John';
    console.log(firstname);
    console.log(lastname);

}('Doe'));

console.log(firstname);

//The variables inside the invoked functions are completely seperate and 
//do not affect anything which is outside.

// This is a n imiditaely invoked function expression and that is why we use it.