/* jshint esnext: true */

import Polar from '../coord-polar/Polar';
import Layout from '../layout/PolarLayout';

class LayoutPolarPie extends Layout {

  series(data, {customClass}) {
    var { radial, angular, originTheta, options} = this.state;

    data = (data || []).map((d, idx) => {
      var h = radial.scaleFn(d);
      var triangleAngle = Polar.radiansFromDegrees(angular.scale(1)) / 2;
      var baseW = Math.tan(triangleAngle) * h;
      var rotate = originTheta + (angular.scale(idx)) + 90;
      var lines = [[0, 0], [h, baseW], [h, -baseW]];
      // renders to a polyline primitive
      return {
        shape: {lines: lines},
        transform: {rotate: rotate}
      };
    });
    return { data, geom: 'polyline', customClass };
  }


}

export default LayoutPolarPie;
