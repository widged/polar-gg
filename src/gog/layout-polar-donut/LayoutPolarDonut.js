/* jshint esnext: true */

import Polar from '../coord-polar/Polar';


export default class LayoutPolarPetal {

    static reduce(aesthetics, space, options) {

        var radial        = aesthetics.x;
        var angular       = aesthetics.y;

        var sum = 0;
        return function(data) {
            data.forEach(function(d, i) {
                sum += radial.dataFn(d);
            });
            data = data.map(function(d, i) {
                return [angular.dataFn(d), radial.dataFn(d) / sum];
            });
            return data;
        }
    }

    static layout(aesthetics, space, options) {

        var radial        = aesthetics.x;
        var angular       = aesthetics.y;

        var originTheta    = space.originTheta || 0;
        var halfRadius     = (space.radius || 125) / 2;
        var innerRadius    = options.innerRadius || radial.scale(0.5);
        var outerRadius    = radial.scale(1);

        var currentAngle = 0;
        return function(d, idx) {
            var startAngle = currentAngle,
                endAngle = currentAngle + (angular.dataFn(d) * 360);

            currentAngle =  endAngle;
            var startRad = Polar.radiansFromDegrees(startAngle);
            var endRad = Polar.radiansFromDegrees(endAngle);

            var rotate = originTheta - 90;
            // renders to an arc primitive
            return {
              shape: {startAngle: startRad, endAngle: endRad, innerRadius: innerRadius, outerRadius: outerRadius},
              transform: {rotate: rotate}
            };

        };
    }

}

/*
 var angular = aesthetics.angular;
*/
