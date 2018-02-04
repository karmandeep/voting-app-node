//If its a Custom Module the use require('./util') -> Saying that it is LOCAL
var util = require('util');
//util is a NODE NATIVE MODULE

var name = 'Karmandeep';
var greeting = util.format('Hello, %s', name);

util.log(greeting);