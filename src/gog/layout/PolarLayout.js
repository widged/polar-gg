/* jshint esnext: true */

import Scale      from '../scale/Scale';
import pie from "../../lib/pie-segments";

class FN {
  static isStyle(key) {
    const styles = "fill,stroke,fillOpacity".split(',');
    return (styles.indexOf(key) !== -1);
  }


  static extrapolateStyles(styleVariants) {
    return function(d, idx) {
        return Object.keys(styleVariants).reduce(function(acc, key) {
            var fn = styleVariants[key].scaleFn;
            if(FN.isStyle(key) && typeof fn === 'function') {
              if(!acc) { acc = {}; }
              acc[key] = fn(d, idx);
            }
            return acc;
        }, null);
    };
  }

  static extrapolateScales(aes) {
    Object.keys(aes).forEach(function(key) {
      var dim     = aes[key];
      dim.scale   = Scale.fromCoord(dim.coord);
      dim.scaleFn = Scale.getScaleFn(dim);
    });
  }


}

class PolarLayout {
  constructor(aes, space, options) {
    FN.extrapolateScales(aes);
    var styleFn  = FN.extrapolateStyles(aes);
    var {x: radial, y: angular} = aes;
    var {originTheta} = Object.assign({originTheta: 0}, space);
    this.state = {radial, angular, originTheta, aes, space, options, styleFn};
  }
  style(d, idx) {
    var {styleFn} = this.state;
    return styleFn(d, idx);
  }

}

PolarLayout.percentExtrapolated = (arr, fn) => {
  var sum = arr.reduce(function(acc, d) { return acc + fn(d); }, 0);
  return (d) => {
    return fn(d) / sum;
  };
};

PolarLayout.pieExtrapolated = (arr, fn) => {
    return pie({ value: fn } )(arr);
};



export default PolarLayout;
