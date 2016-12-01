/* jshint esnext: true */

import Scale      from '../scale/Scale';

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

export default class Layout {

  static geom(GeomLayout, aes, space, options) {
    FN.extrapolateScales(aes);
    // layout can depend on x, y, z, and size
    var reduceFn = GeomLayout.reduce ? GeomLayout.reduce(aes, space, options) : null;
    var layoutFn = GeomLayout.layout(aes, space, options);
    var styleFn  = FN.extrapolateStyles(aes);

    return function(data) {
      if(typeof reduceFn === 'function') { data = reduceFn(data); }
      return (data || []).map(function(d, i) {
        var obj    = layoutFn(d, i);
        obj.style  = styleFn(d, i);
        return obj;
      });
    };
  }

}
