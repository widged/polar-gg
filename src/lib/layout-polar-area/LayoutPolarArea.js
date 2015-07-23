/* jshint esnext: true */

import Polar from '../../lib/Polar';

export default class LayoutPolarLine {

    static layout(aesthetics, {originTheta}) {

        var radial         = aesthetics.x;
        var angular        = aesthetics.y;

        if(originTheta === undefined) { originTheta = 0; }

        return function(d, idx) {
            var radius = radial.scaleFn(d);
            var angle  = Polar.radiansFromDegrees(angular.scaleFn(d));
            var rotate = originTheta + 90;
            return {radius: radius, angle: angle, rotate: rotate };
        };
    }
    
}
