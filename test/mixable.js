var should = require('should');
var mixable = require('../mixable').mixable;

describe('mixable', function(){

	it('should have a mixInto method', function(){
		mixable.should.have.property('mixInto');
	});

	describe("with a simple mixin object", function(){

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

		describe("with a simple object", function(){

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

	describe('with a complex mixin', function(){
		var mixin = {
			p1:'mp1',
			p2:'mp2',
			f1:function(){
				return 'mf1';
			},
			f2:function(){
				return 'mf2';
			},
			a1:['ma11','ma12','ma13'],
			a2:[{a:'ma21a'},{a:'ma22b'},['ma231','ma232','ma233']],
			o1:{
				a:'mo1a',
				b:'mo1b'
			},
			o2:{
				a:{a:'mo2aa',b:'mo2ab'},
				b:'mo2b'
			}
		}

		mixable.mixInto(mixin);

		describe('with a complex object', function(){
			var obj = {
				p1:'op1',
				p3:'op3',
				f1:function(){
					return 'of1';
				},
				f3:function(){
					return 'of3';
				},
				a1:['oa11','oa12','oa13'],
				a3:['oa31','oa32','oa33'],
				o1:{
					a:'oo1a',
					b:'oo1b'
				},
				o3:{
					a:'oo3a',
					b:'oo3b'
				}
			}

			mixin.mixInto(obj);

			it('should add missing properties', function(){
				obj.p2.should.eql('mp2');
			});

			it('should add arrays', function(){
				obj.a2.should.be.instanceof(Array);
			});

			it('should not override an array', function(){
				obj.a1.should.eql(['oa11','oa12','oa13']);
			})

			it('should create clones of arrays', function(){
				obj.a2.should.eql(mixin.a2);
				obj.a2.should.not.equal(mixin.a2);
			});

			it('should create clones of deep arrays', function(){
				obj.a2[2].should.eql(mixin.a2[2]);
				obj.a2[2].should.not.equal(mixin.a2[2]);
			});

			it('should add objects', function(){
				obj.o2.should.be.a('object');
			})

			it('should not override an object', function(){
				obj.o1.a.should.eql('oo1a');
			});

			it('should create clone of objects', function(){
				obj.o2.should.eql(mixin.o2);
				obj.o2.should.not.equal(mixin.o2);
			});

			it('should create clones of deep objects', function(){
				obj.o2.a.should.eql(mixin.o2.a);
				obj.o2.a.should.not.equal(mixin.o2.a);
			});





		});




	});
	
});