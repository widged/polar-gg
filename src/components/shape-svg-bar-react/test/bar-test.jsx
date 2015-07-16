// __tests__/sum-test.js

var assert = require('assert');
var React = require('react');

require('../../../../test/jsdom-setup');

var Bar = require('../Bar.jsx');

// <rect class="geom g-0" x="20.833333333333332" y="72.14285714285714" width="19" height="177.85714285714286" data-reactid=".26pcl1tumtc"></rect
describe('arc', function() {
	it('create a rect object', function(done) {

		var svg = document.createElement('svg');
		var data = {"idx": "0", "x":20.833333333333332,"y":72.14285714285714,"width":19,"height":177.85714285714286,"style":{}};
		var el = 	React.createElement(Bar, data);

		var $el = React.render(el, svg);
		console.log('SVG', svg.innerHTML)
		assert.equal(svg.querySelectorAll('rect').length, 1);
		done();
	});
	it('set the classname attribute', function(done) {

		var svg = document.createElement('svg');
		var data = {"idx": "0", "x":20.833333333333332,"y":72.14285714285714,"width":19,"height":177.85714285714286,"style":{}};
		var el = 	React.createElement(Bar, data);

		var $el = React.render(el, svg);
		assert.equal(svg.querySelector('rect').className, 'geom g-0');
		done();
	});
	it('set the x attribute', function(done) {

		var svg = document.createElement('svg');
		var data = {"idx": "0", "x":20.833333333333332,"y":72.14285714285714,"width":19,"height":177.85714285714286,"style":{}};
		var el = 	React.createElement(Bar, data);

		var $el = React.render(el, svg);
		assert.equal(svg.querySelector('rect').getAttribute('x'), '20.833333333333332');
		done();
	});	

	it('set the y attribute', function(done) {

		var svg = document.createElement('svg');
		var data = {"idx": "0", "x":20.833333333333332,"y":72.14285714285714,"width":19,"height":177.85714285714286,"style":{}};
		var el = 	React.createElement(Bar, data);

		var $el = React.render(el, svg);
		assert.equal(svg.querySelector('rect').getAttribute('y'), '72.14285714285714');
		done();
	});	

	it('set the width attribute', function(done) {

		var svg = document.createElement('svg');
		var data = {"idx": "0", "x":20.833333333333332,"y":72.14285714285714,"width":19,"height":177.85714285714286,"style":{}};
		var el = 	React.createElement(Bar, data);

		var $el = React.render(el, svg);
		assert.equal(svg.querySelector('rect').getAttribute('width'), '19');
		done();
	});	

	it('set the height attribute', function(done) {

		var svg = document.createElement('svg');
		var data = {"idx": "0", "x":20.833333333333332,"y":72.14285714285714,"width":19,"height":177.85714285714286,"style":{}};
		var el = 	React.createElement(Bar, data);

		var $el = React.render(el, svg);
		assert.equal(svg.querySelector('rect').getAttribute('height'), '177.85714285714286');
		done();
	});	

});
