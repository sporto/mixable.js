/*******************************************************************************
Mixable.js
*******************************************************************************/

var mixable = (function(){
	
	var self = {};

	function mixInto(target, override, deep){
		override = override || false;
		deep = deep || true;

		function toType(obj) {
			return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
		}

		function copy(source, target, override, deep){
			for (var prop in source){
				if(source.hasOwnProperty(prop)){
					if(!target[prop] || override){
						switch( toType(source[prop]) ){
							case 'object':
								target[prop] = {};
								copy(source[prop], target[prop], override, deep);
								break;
							case 'array':
								target[prop] = [];
								copy(source[prop], target[prop], override, deep);
								break;
							default:
								target[prop] = source[prop];
						}
					}
				}
			}
		}

		copy(this, target, override, deep);
		target.mixInto = mixInto;
	}

	self.mixInto = mixInto;

	return self;

}());

// CommonJS:
if (typeof exports === 'object') {
	exports.mixable = mixable;
}