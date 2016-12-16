/* jshint esnext: true */

import Polar from '../coord-polar/Polar';
import Layout from '../layout/PolarLayout';

class LayoutPolarArea extends Layout {

  series(data, {customClass}) {
    var { radial, angular, originTheta, options } = this.state;
    var {barWidth} = options;
    var rotate = originTheta  + 90;
    var lines = (data || []).map((d, idx) => {
      var radius = radial.scaleFn(d);
      var angle  = Polar.radiansFromDegrees(angular.scaleFn(d));
      // renders to a polylineradial primitive
      return {radius, angle};
    });
    var gpData = [{ "shape": { "radiallines": lines, closed: true}, style: this.style()}];
    return { data: gpData, geom: 'polylineradial', customClass };
  }

}

export default LayoutPolarArea;
