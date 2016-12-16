/* jshint esnext: true */

import Polar from '../coord-polar/Polar';
import Layout from '../layout/PolarLayout';


class LayoutPolarDonut extends Layout {

  series(data, {customClass}) {
    var { radial, angular, originTheta, options} = this.state;
    var {radius} = this.state.space;
    if (radius === undefined     ) { radius = 125; }
    var halfRadius     = radius / 2;
    var innerRadius    = options.innerRadius || radial.scale(0.5);
    var outerRadius    = radial.scale(1);
    var rotate = originTheta - 90;

    var currentAngle = 0;
    var radialPercent = Layout.percentExtrapolated(data, radial.dataFn);
    data = (data || []).map((d, idx) => {
        d = [angular.dataFn(d), radialPercent(d)];
        var startAngle = currentAngle,
            endAngle = currentAngle + (angular.dataFn(d) * 360);
        currentAngle =  endAngle;
        var startRad = Polar.radiansFromDegrees(startAngle);
        var endRad = Polar.radiansFromDegrees(endAngle);

        // renders to an arc primitive
        return {
          shape: {startAngle: startRad, endAngle: endRad, innerRadius: innerRadius, outerRadius: outerRadius},
          transform: {rotate: rotate}
        };
    });
    return { data, geom: 'arcband', customClass };
  }

}

export default LayoutPolarDonut;
