// __tests__/sum-test.js

var assert = require('assert');
require('mocha-jsdom')();

describe('sum', function() {
 it('adds 1 + 2 to equal 3', function() {
   var sum = function(a, b) { return a + b; };
   assert.equal(sum(1, 2), 3);
 });
});

describe('dom', function() {
	it('create an element', function(done) {
		// global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
		// global.window = document.parentWindow;
		// console.log(document)

		// var div = document.createElement('div');
		// assert.equal(sum(1, 2), 3);
		done();
	});
});
