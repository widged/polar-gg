// __tests__/sum-test.js

var assert = require('assert');
var React = require('react');
var Note = require('../../src/components/Note.jsx');

require('../jsdom-setup');

describe('dom', function() {
	it('create an element', function(done) {

		var div = document.createElement('div');

		var el = React.createElement(Note, {});
		var $el = React.render(el, div);
		assert.equal(div.querySelector('div').innerHTML, 'Learn Webpack, now!');
		done();
	});
});
