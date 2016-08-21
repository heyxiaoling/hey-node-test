var util = require('util');

function Person(){
	this.name = 'hey';
	this.toString = function(){
		return this.name;
	}
}

var p = new Person();
console.log(util.inspect(p));
console.log(util.inspect(p,true,2,true));