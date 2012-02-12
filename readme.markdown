Mixable.js
===========
A simple utily for mixins

Usage
--------

	var myMixin = {
		foo:1
	}

	mixable.mixInto(myMixin);

	var myObj = {
		bar:2
	}

	myMixin.mixInto(myObject);

	myObj.foo;
	// 1

Tests
----------

Install mocha

	$ npm install mocha
	$ npm install should

Run the tests

	$ mocha