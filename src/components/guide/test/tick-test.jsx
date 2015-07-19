// __tests__/sum-test.js

var assert = require('assert');

var listTicks = require('../Ticks.js');

describe('list', function() {
	it('gets it right', function(done) {
        var actual = listTicks({"perimeter":14,"minorQty":1,"majorQty":7});
        var expected = [
        	{ "text":  "0" ,"value":  0 , "addClassName":"major"},
        	{ "text":  "1" ,"value":  1 },
        	{ "text":  "2" ,"value":  2 , "addClassName":"major"},
        	{ "text":  "3" ,"value":  3 },
        	{ "text":  "4" ,"value":  4 , "addClassName":"major"},
        	{ "text":  "5" ,"value":  5 },
        	{ "text":  "6" ,"value":  6 , "addClassName":"major"},
        	{ "text":  "7" ,"value":  7 },
        	{ "text":  "8" ,"value":  8 , "addClassName":"major"},
        	{ "text":  "9" ,"value":  9 },
        	{ "text": "10" ,"value": 10 , "addClassName":"major"},
        	{ "text": "11" ,"value": 11 },
        	{ "text": "12" ,"value": 12 , "addClassName":"major"},
        	{ "text": "13" ,"value": 13 }];
        assert.deepEqual(actual, expected);
		done();
	});

});
