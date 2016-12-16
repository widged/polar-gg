/* jshint esnext: true */

import Polar from '../coord-polar/Polar';
import Layout from '../layout/PolarLayout';

import {sqrtInterpolation}    from '../../lib/interpolation';

class LayoutPolarPetal extends Layout {


  series(data, {customClass}) {
    var {radial, angular, originTheta, space, options} = this.state;
    var {radius} = space;
    var {maxSize} = options;
    if(maxSize === undefined) { maxSize = 3; }
    var halfRadius     = (radius || 125) / 2;
    var maxRadius   = Math.round(maxSize / 2);

    var sqrtScale = sqrtInterpolation([0, 1],[0, halfRadius]);
    data = Layout.pieExtrapolated(data, radial.dataFn).map((d, idx) => {
      var angle = (d.endAngle - d.startAngle) / 2,
          s = Polar.polarToCartesian(-angle, halfRadius),
          e = Polar.polarToCartesian(angle, halfRadius),
          r = sqrtScale(radial.scale(d.value)),
          m = {x: halfRadius + r, y: 0},
          c1 = {x: halfRadius + (r / 2), y: s.y},
          c2 = {x: halfRadius + (r / 2), y: e.y};
      var angle2 = (d.startAngle + d.endAngle) / 2;
      var rotate = Polar.degreesFromRadians(angle2) + (originTheta + 90);
      // renders to a petal primitive
      return {
        shape: { s: s,c1: c1, m: m, c2: c2, e: e},
        transform: {rotate: rotate}
       };
    });
    return { data, geom: 'petal', customClass };
  }

}

export default LayoutPolarPetal;
