/* jshint esnext: true */

import Polar from '../coord-polar/Polar';

export default class LayoutPolarLine {

    static layout(aesthetics, space, options) {

        var radial         = aesthetics.x;
        var angular        = aesthetics.y;

        var originTheta    = space.originTheta || 0;

        return function(d, idx) {
            var radius = radial.scaleFn(d);
            var angle = Polar.radiansFromDegrees(angular.scaleFn(d));
            var rotate = originTheta + 90;
            // renders to a polylineradial primitive
            return {
              shape: {radius: radius, angle: angle},
              transform: {rotate: rotate} 
            };
        };
    }

}
