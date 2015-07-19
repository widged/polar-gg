/* jshint esnext: true */

import Polar from '../../lib/Polar';

export default class GeomPolarDot {

    static layout(aesthetics, space, options) {

        var radial         = aesthetics.x;
        var angular        = aesthetics.y;

        var originTheta = space.originTheta || 0;
        var maxSize     = options.maxSize || 3;
        var maxRadius   = Math.round(maxSize / 2);
        var size        = aesthetics.size || {scaleValue: function(d) { return 1; }};

        return function(d, i) {
            var rotate = (originTheta - 90 + angular.scaleFn(d));
            var r = maxRadius * size.scaleFn(d);
            var cy = radial.scaleFn(d);
            return {rotate: rotate, r: r, cy: cy, options: options };
        };

    }
    
}
