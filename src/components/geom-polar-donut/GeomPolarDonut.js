/* jshint esnext: true */

import Polar from '../../lib/Polar';

import './monthly.css';

export default class GeomPolarPetal {

    static reduce(aesthetics, space, options) {
        var scaleFn = aesthetics.x.scaleFn;
        return d3.layout.pie()
            .sort(null)
            .value(function(d) { return scaleFn(d); });
    }

    static layout(aesthetics, space, options) {

        var originTheta    = space.originTheta || 0;
        var halfRadius     = (space.radius || 125) / 2;

        var size = d3.scale.sqrt()
            .domain([0, 1])
            .range([0, halfRadius]);

        return function(d, idx) {
            var angle = (d.endAngle - d.startAngle) / 2,
                s = Polar.polarToCartesian(-angle, halfRadius),
                e = Polar.polarToCartesian(angle, halfRadius),
                r = size(d.value),
                m = {x: halfRadius + r, y: 0},
                c1 = {x: halfRadius + (r / 2), y: s.y},
                c2 = {x: halfRadius + (r / 2), y: e.y};
            var angle2 = (d.startAngle + d.endAngle) / 2;
            var rotate = Polar.degreesFromRadians(angle2) + (originTheta);
            return {rotate: rotate, startAngle: s,innerRadius: c1, outerRadius: c2, endAngle: e };

        };
    }
    
}

/*
 var angular = aesthetics.angular;
*/        