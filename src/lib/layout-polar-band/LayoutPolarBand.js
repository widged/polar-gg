/* jshint esnext: true */

import Polar from '../coord-polar/Polar';

export default class LayoutPolarBand {

  static layout(aesthetics, {originTheta}, {barWidth}) {

        var radial         = aesthetics.x;
        var angular        = aesthetics.y;

        if(originTheta === undefined) { originTheta = 0; }
        if(barWidth === undefined)    { barWidth = radial.scale(0.9); }

        return function(d, idx) {
            var endAngle    = Polar.radiansFromDegrees(angular.scaleFn(d));
            var innerRadius = radial.scaleFn(d);
            var outerRadius = innerRadius + barWidth;

            var rotate = originTheta  + 90;
            // renders to an arc primitive
            return {endAngle: endAngle, innerRadius: innerRadius, outerRadius: outerRadius, rotate: rotate };
        };
    }

}