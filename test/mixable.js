var should = require('should');
var mixable = require('../mixable').mixable;

describe('mixable', function(){

	it('should have a mixInto method', function(){
		mixable.should.have.property('mixInto');
	});

	describe("with a mixin object", function(){

		var mixin = {
			p1:101,
			p2:102,
			f1:function(){
				return 103;
			},
			f2:function(){
				return 104;
			}
		}
		mixable.mixInto(mixin);
		
		it('mixes into an object', function(){
				mixin.mixInto.should.be.a('function');
		});

		describe("with an object", function(){

			var obj = {
				p1:201,
				f1:function(){
					return 203;
				}
			}
			mixin.mixInto(obj);
			
			it('passes the mixInto method', function(){
				obj.mixInto.should.be.a('function');
			});

			it('adds the mixin properties', function(){
				obj.p2.should.eql(102);
				obj.f2().should.eql(104);
			});

			it('doesnt override properties', function(){
				obj.p1.should.eql(201);
				obj.f1().should.eql(203);
			});

		});

		describe('when override is true', function(){
			
			var obj = {
				p1:201,
				f1:function(){
					return 203;
				}
			};

			mixin.mixInto(obj, true);

			it('should override properties', function(){
				obj.p1.should.eql(101);
				obj.f1().should.eql(103);
			});

		});

	});

	describe("when deep is true", function(){
		
	});
	
});