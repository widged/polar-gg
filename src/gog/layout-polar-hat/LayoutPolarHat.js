/* jshint esnext: true */

import Polar from '../coord-polar/Polar';
import Layout from '../layout/PolarLayout';

class LayoutPolarHat extends Layout {


  series(data, {customClass}) {
    var { radial, angular, originTheta, options} = this.state;
    var {offset} = this.state.options;
    if(offset === undefined) { offset = 0; }
    data = (data || []).map((d, idx) => {
      var h = radial.scaleFn(d);
      var triangleAngle = Polar.radiansFromDegrees(angular.scale(1)) / 2;
      var baseW = 10;
      var rotate = originTheta + 90 + (angular.scale(idx));
      var lines = [[0, 0], [-h, baseW], [-h, -baseW]];
      // renders to a polyline primitive
      return {
        shape: {lines: lines},
        transform: {rotate: rotate, translate: [(h+offset), 0]}
       };
    });
    return { data, geom: 'polyline', customClass };
  }

}

export default LayoutPolarHat;
