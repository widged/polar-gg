/* jshint esnext: true */

import Polar from '../coord-polar/Polar';

export default class LayoutPolarArea {

    static layout(aesthetics, options) {

        var radial         = aesthetics.x;
        var angular        = aesthetics.y;

        var {originTheta} = options;
        if(originTheta === undefined) { originTheta = 0; }
        var rotate = originTheta + 90;

        return function(d, idx) {
            var radius = radial.scaleFn(d);
            var angle  = Polar.radiansFromDegrees(angular.scaleFn(d));
            // renders to a polylineradial primitive
            return {
              shape: {radius, angle},
              transform: {rotate}
            };
        };
    }

}
