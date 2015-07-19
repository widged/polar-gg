/* jshint esnext: true */

export default class Scale {

    static fromCoord(coord) {
        const type = coord.scale;
        var out;
        if(type === undefined || type === 'linear') {
        	if(!coord.range) { coord.range = coord.domain; }
            out = d3.scale.linear().domain(coord.domain).range(coord.range);
        }
        return out;
    }

  	static getScaleFn(obj) {
	    var {coord, dataFn} = obj;
	    var scale      = Scale.fromCoord(coord);
	    return function(d, i) { return scale(dataFn(d, i)); };
  }

}