/* jshint esnext: true */

import Polar from '../coord-polar/Polar';
import Layout from '../layout/PolarLayout';

class LayoutPolarBand extends Layout {

  series(data) {
    // var {reduceFn} = this.state; if(typeof reduceFn === 'function') { data = reduceFn(data); }
    var { radial, angular, originTheta, options } = this.state;
    var {barWidth} = options;
    // var {radial, angular, barWidth, rotate} = this.state;
    if(barWidth === undefined)    { barWidth = 0.9;  }
    barWidth = radial.scale(barWidth);
    var rotate = originTheta  + 90;

    data = (data || []).map((d, idx) => {
      var endAngle    = Polar.radiansFromDegrees(angular.scaleFn(d));
      var innerRadius = radial.scaleFn(d);
      var outerRadius = innerRadius + barWidth;
      return {
          shape: {endAngle: endAngle, innerRadius: innerRadius, outerRadius: outerRadius},
          style: this.style(d,idx),
          transform: {rotate: rotate}
        };
    });
    return { data, geom: 'arcband' };
  }

}

export default LayoutPolarBand;
