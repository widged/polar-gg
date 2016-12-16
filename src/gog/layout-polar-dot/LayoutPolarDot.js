/* jshint esnext: true */

import Polar from '../coord-polar/Polar';
import Layout from '../layout/PolarLayout';

class LayoutPolarDot extends Layout {

  constructor(aes, space, options) {
    super(aes, space, options);
    var {x: radial, y: angular, size} = aes;
    var {originTheta} = Object.assign({originTheta: 0}, space);
    var {maxSize}     = Object.assign({maxSize: 3}, options);

    var maxRadius   = Math.round(maxSize / 2);
    if(size === undefined) {
      size = {dataFn: function(d) { return 1; }};
    }
    this.state = Object.assign(this.state, { radial, angular, originTheta, maxSize, maxRadius, size});
  }

  series(data, {customClass}) {
    var { options, radial, angular, originTheta, maxSize, maxRadius, size} = this.state;
    data = (data || []).map((d, idx) => {
      var rotate = (originTheta + 0 + angular.scaleFn(d));
      var r = maxRadius * size.scaleFn(d);
      var cy = radial.scaleFn(d);
      return {
        shape: {r: r, cy: cy},
        transform: {rotate: rotate},
        options: options
     };
    });
    return { data, geom: 'dot', customClass };

  }

}

export default LayoutPolarDot;
