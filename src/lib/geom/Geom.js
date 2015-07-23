/* jshint esnext: true */

import Scale      from '../../lib/Scale';

export default class Geom {

  static isStyle(key) {
    const styles = "fill,stroke,fillOpacity".split(',');
    return (styles.indexOf(key) !== -1);
  }

  static getStyles(styleVariants) {
    return function(d, idx) {
        return Object.keys(styleVariants).reduce(function(acc, key) {
            var fn = styleVariants[key].scaleFn;
            if(Geom.isStyle(key) && typeof fn === 'function') { 
              if(!acc) { acc = {}; }
              acc[key] = fn(d, idx); 
            }
            return acc;
        }, null);
    };
  }

  static addAestheticsScale(aes) {
    Object.keys(aes).forEach(function(key) {
      var dim     = aes[key];
      dim.scale   = Scale.fromCoord(dim.coord);
      dim.scaleFn = Scale.getScaleFn(dim);
    });

  }

  static layoutFn(Layout, aes, space, options) {
    Geom.addAestheticsScale(aes);
    // layout can depend on x, y, z, and size
    var reduceFn = Layout.reduce ? Layout.reduce(aes, space, options) : null;
    var layoutFn = Layout.layout(aes, space, options);
    var styleFn  = Geom.getStyles(aes);

    return function(data) {
      if(typeof reduceFn === 'function') { data = reduceFn(data); }
      return data.map(function(d, i) {
        var obj    = layoutFn(d, i);
        obj.style  = styleFn(d, i);
        return obj;
      });
    };
  }

}
