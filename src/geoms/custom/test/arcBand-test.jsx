// __tests__/sum-test.js

var assert = require('assert');
var React  = require('react');

require('../../../../test/jsdom-setup');

var Svg = require('../RendererSvg');

// React.renderToString(Arc({data}));
// '<path transform="rotate(0)" d="M111.69841812686794,8.213609922280407A112,112 0 0,1 84.25121331044213,73.79521024916441L42.12560665522106,36.897605124582206A56,56 0 0,0 55.84920906343397,4.106804961140203Z" data-reactid=".16sexxqdyww"></path>'
describe('arc', function() {
	it('create a path object', function(done) {
		var data = {"startAngle":1.6441980243086765,"endAngle":2.2901329624299422,"innerRadius":56,"outerRadius":112,"rotate":0};
		var {type, props} = 	Svg.arc(data);
		assert.equal(type, 'path');
		done();
	});
	it('set the transform attribute', function(done) {
		var data = {"startAngle":1.6441980243086765,"endAngle":2.2901329624299422,"innerRadius":56,"outerRadius":112,"rotate":0};
		var {type, props} = 	Svg.arc(data);
		assert.equal(props.transform, 'rotate(0)');
		done();
	});	

	it('set the d attribute', function(done) {

		var data = {"startAngle":1.6441980243086765,"endAngle":2.2901329624299422,"innerRadius":56,"outerRadius":112,"rotate":0};
		var {type, props} = 	Svg.arc(data);
		assert.equal(props.d, 'M111.69841812686794,8.213609922280407A112,112 0 0,1 84.25121331044213,73.79521024916441L42.12560665522106,36.897605124582206A56,56 0 0,0 55.84920906343397,4.106804961140203Z');
		done();
	});	
});
