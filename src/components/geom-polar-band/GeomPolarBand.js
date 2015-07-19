/* jshint esnext: true */

import Polar from '../../lib/Polar';

export default class GeomPolarBand {

  static layout(aesthetics, space, options) {

        var radial         = aesthetics.x;
        var angular        = aesthetics.y;

        var originTheta    = space.originTheta || 0;
        var bandW          = options.bandWidth || radial.scale(0.9);

        return function(d, idx) {
            var endAngle    = Polar.radiansFromDegrees(angular.scaleFn(d));
            var innerRadius = radial.scaleFn(d);
            var outerRadius = innerRadius + bandW;

            var rotate = originTheta  + 90;
            // renders to an arc
            return {endAngle: endAngle, innerRadius: innerRadius, outerRadius: outerRadius, rotate: rotate };
        };
    }

}