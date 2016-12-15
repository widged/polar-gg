// __tests__/sum-test.js

var assert = require('assert');
var React = require('react');

require('../../../../test/jsdom-setup');

var Svg = require('../RendererSvg');

// <rect class="geom g-0" x="20.833333333333332" y="72.14285714285714" width="19" height="177.85714285714286" data-reactid=".26pcl1tumtc"></rect
describe('rect', function() {
	it('create a rect object', function(done) {
		var data = {"startAngle":1.6441980243086765,"endAngle":2.2901329624299422,"innerRadius":56,"outerRadius":112,"rotate":0};
		var {type, props} = 	Svg.rect(data);
		assert.equal(type, 'rect');
		done();
	});
	it('set the x attribute', function(done) {
		var data = {"x":20.833333333333332,"y":72.14285714285714,"width":19,"height":177.85714285714286};
		var {type, props} = 	Svg.rect(data);
		assert.equal(props.x, data.x);
		done();
	});	

	it('set the y attribute', function(done) {
		var data = {"x":20.833333333333332,"y":72.14285714285714,"width":19,"height":177.85714285714286};
		var {type, props} = 	Svg.rect(data);
		assert.equal(props.y, data.y);
		done();
	});	

	it('set the width attribute', function(done) {
		var data = {"x":20.833333333333332,"y":72.14285714285714,"width":19,"height":177.85714285714286};
		var {type, props} = 	Svg.rect(data);
		assert.equal(props.width, data.width);
		done();
	});	

	it('set the height attribute', function(done) {
		var data = {"x":20.833333333333332,"y":72.14285714285714,"width":19,"height":177.85714285714286};
		var {type, props} = 	Svg.rect(data);
		assert.equal(props.height, data.height);
		done();
	});	

});
