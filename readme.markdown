Mixable.js
===========
A simple utility for mixins

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

Arguments
----------

The mixInto method take two optional arguments:

mixable.mixInto(targetObject, overrideProperties, deepCopy );

overrideProperties and deepCopy are false by default

Tests
----------

Install mocha

	$ npm install mocha
	$ npm install should

Run the tests

	$ mocha