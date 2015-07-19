/* jshint esnext: true */

import Polar from '../../lib/Polar';

export default class GeomPolarHat {

    static layout(aesthetics, space, options) {

        var radial         = aesthetics.x;
        var angular        = aesthetics.y;

        var originTheta    = space.originTheta || 0;
        var barWidth       = options.barWidth || 12;

        return function(d, idx) {
            var rotate = originTheta + angular.scaleFn(d) - 90;
            var x      = -barWidth/2;
            var y      = radial.scale(0);
            var width  = barWidth;
            var height = radial.scaleFn(d);
            var transform = 'rotate('+ (rotate || 0) +')';
            // renders to a rectangle
            return {transform: transform, x: x, y: y, width: width, height: height, d: d }; 
        };
    }
    
}
