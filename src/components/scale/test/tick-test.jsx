// __tests__/sum-test.js

var assert = require('assert');

var listTicks = require('../Ticks.js');

describe('list', function() {
	it('gets it right', function(done) {
        var ticks = listTicks({"perimeter":14,"minorQty":1,"majorQty":7});
        var expected = [{"text":"0","value":0,"isMajor":true},{"text":"","value":1},{"text":"2","value":2,"isMajor":true},{"text":"","value":3},{"text":"4","value":4,"isMajor":true},{"text":"","value":5},{"text":"6","value":6,"isMajor":true},{"text":"","value":7},{"text":"8","value":8,"isMajor":true},{"text":"","value":9},{"text":"10","value":10,"isMajor":true},{"text":"","value":11},{"text":"12","value":12,"isMajor":true},{"text":"","value":13}]
        assert.equal(ticks, 'geom g-0');
		done();
	});

});
