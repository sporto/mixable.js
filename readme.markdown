Mixable.js
===========
A simple utility for mixins

Usage
--------

	var superhero = {
		superhero:true,
		fly:function(){
			return 'Flying';
		},
		powers:['Super speed', 'Flight'],
		flightPower:{speed:100, distane:200}
	}

	mixable.mixInto(superhero);

	var james = {
		age:13,
		name:'James'
	}

	superhero.mixInto(james);

	james.superhero;
	// true
	james.fly();
	// Flying
	james.powers[1];
	//Flight
	james.flightPower.speed
	//100

Arguments
----------

The mixInto method takes one optional argument:

mixable.mixInto(targetObject, overrideProperties );

 - overrideProperties (false by default) makes the properties in the source override the properties in the target

Objects and arrays are cloned
--------------------

If the mixin object has arrays or objects they will be cloned instead of passed by reference. This is true of nested arrays and objects too.

Caveats
---------

If the target object already has a property the mixin will stop there (unless override is true). So for example if you have:

	 var mixin = {
	 	props:{a:1, b:2}
	 }

	 var obj = {
	 	props:{a:1}
	 }

 	mixin.mixInto(obj);

 	//obj.props.b will not be copied because obj.props was already present

 	obj.props.b //undefined

Tests
----------

Install mocha

	$ npm install mocha
	$ npm install should

Run the tests

	$ mocha