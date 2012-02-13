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

The mixInto method takes one optional argument:

mixable.mixInto(targetObject, overrideProperties );

 - overrideProperties (false by default) makes the properties in the source override the properties in the target

Objects and arrays are cloned
--------------------

If the mixin object has arrays or objects they will be cloned instead of passed by reference. This is true of nested arrays and objects too.

Tests
----------

Install mocha

	$ npm install mocha
	$ npm install should

Run the tests

	$ mocha