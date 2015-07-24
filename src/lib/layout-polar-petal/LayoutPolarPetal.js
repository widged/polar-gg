/* jshint esnext: true */

import Polar from '../coord-polar/Polar';

export default class LayoutPolarPetal {

    static reduce(aesthetics, space, options) {

        var valueFn = aesthetics.x.dataFn;

        return d3.layout.pie()
            .sort(null)
            .value(function(d) { 
                return valueFn(d); });
    }

    static layout(aesthetics, space, options) {

        var radial  = aesthetics.x;
        var angular = aesthetics.y;

        var originTheta    = space.originTheta || 0;
        var halfRadius     = (space.radius || 125) / 2;

        var sqrtScale = d3.scale.sqrt()
            .domain([0, 1])
            .range([0, halfRadius]);

        return function(d, idx) {
            var angle = (d.endAngle - d.startAngle) / 2,
                s = Polar.polarToCartesian(-angle, halfRadius),
                e = Polar.polarToCartesian(angle, halfRadius),
                r = sqrtScale(radial.scale(d.value)),
                m = {x: halfRadius + r, y: 0},
                c1 = {x: halfRadius + (r / 2), y: s.y},
                c2 = {x: halfRadius + (r / 2), y: e.y};
            var angle2 = (d.startAngle + d.endAngle) / 2;
            var rotate = Polar.degreesFromRadians(angle2) + (originTheta + 90);
            // renders to a petal primitive
            return {rotate: rotate, s: s,c1: c1, m: m, c2: c2, e: e };
        };
    }
    
}

