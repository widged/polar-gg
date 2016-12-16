/* jshint esnext: true */

import Polar from '../coord-polar/Polar';
import Layout from '../layout/PolarLayout';

class LayoutPolarLine extends Layout {


  series(data, {customClass}) {
    var { radial, angular, originTheta, options} = this.state;
    var rotate = originTheta + 90;
    data = (data || []).map((d, idx) => {
      var radius = radial.scaleFn(d);
      var angle = Polar.radiansFromDegrees(angular.scaleFn(d));
      // renders to a polylineradial primitive
      return {radius: radius, angle: angle};
    });
    var gpData = [{
      shape: {radiallines: data},
      style: {fill: 'none', stroke: 'blue'}
    }];

    return { data: gpData, geom: 'polylineradial', customClass };



  }


}

export default  LayoutPolarLine;
