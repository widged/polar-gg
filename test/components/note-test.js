// __tests__/sum-test.js

var React = require('react');
var Note = require('../../app/components/Note.jsx');
var assert = require('assert');

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
