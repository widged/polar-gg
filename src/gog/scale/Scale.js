/* jshint esnext: true */

import {linearInterpolation}    from '../../lib/interpolation';

export default class Scale {

    static fromCoord(coord) {
        const type = coord.scale;
        var out, out2;
        if(type === undefined || type === 'linear') {
        	if(!coord.range) { coord.range = coord.domain; }
          out = linearInterpolation(coord.domain, coord.range);
        }

        return out;
    }

  	static getScaleFn(obj) {
	    var {coord, dataFn} = obj;
	    var scale      = Scale.fromCoord(coord);
	    return function(d, i) { return scale(dataFn(d, i)); };
  }

}
