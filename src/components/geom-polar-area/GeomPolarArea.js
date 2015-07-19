/* jshint esnext: true */

import Polar from '../../lib/Polar';

export default class GeomPolarLine {

    static layout(aesthetics, space, options) {

        var radial         = aesthetics.x;
        var angular        = aesthetics.y;

        var originTheta    = space.originTheta || 0;

        return function(d, idx) {
            var radius = radial.scaleFn(d);
            var angle  = Polar.radiansFromDegrees(angular.scaleFn(d));
            var rotate = originTheta + 90;
            return {radius: radius, angle: angle, rotate: rotate };
        };
    }
    
}
