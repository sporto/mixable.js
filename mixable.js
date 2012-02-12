/*******************************************************************************
Mixable.js
*******************************************************************************/

var mixable = (function(){
	
	var self = {};

	function mixInto(target, override, deep){
		for (var prop in this){
			if(this.hasOwnProperty(prop)){
				if(!target[prop] || override){
					target[prop] = this[prop];
				}
			}
		}
	}

	self.mixInto = mixInto;

	return self;

}());

//
// CommonJS:
// Export Functional & Function if an exports object is detected.
//
if (typeof exports === 'object') {
	exports.mixable = mixable;
}