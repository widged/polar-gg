/* jshint esnext: true */

import Polar from '../coord-polar/Polar';
import Layout from '../layout/PolarLayout';

class LayoutPolarBar  extends Layout {

  series(data) {
    var { radial, angular, originTheta, options} = this.state;
    var {barWidth} = options;
    if(barWidth === undefined)    { barWidth = 12; }

    data = (data || []).map((d, idx) => {
      var rotate = originTheta + angular.scaleFn(d) - 90;
      var x      = -barWidth/2;
      var y      = radial.scale(0);
      var width  = barWidth;
      var height = radial.scaleFn(d);
      // renders to a rectangle primitive
      return {
        shape: { x: x, y: y, width: width, height: height, d: d },
        style: this.style(d, idx),
        transform: {rotate: rotate}
      };
    });
    return { data, geom: 'rect' };
  }


}


export default LayoutPolarBar;
