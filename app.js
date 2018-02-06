var obj = {
    name: 'John Doe',
    greet: function(param) {
        console.log(`Hello ${ this.name }`);
    }
}

obj.greet();
//Passing an object to this function via .call and what that really means is
//this object would become the this keyword.
//So this function would run as normal, where-ever i see the the this keyword
//Pointing to the parent object

//It will instill point to th eobject that i passed in via call.
//Some essentially borrowing this function and giving it my own object to service this
//keyword.


obj.greet.call({ name: 'Jane Doe' });

obj.greet.apply({ name: 'Jane Doe' });
