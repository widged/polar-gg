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

  static prepare(data, GeomMapper, space, aes, options) {
    Object.keys(aes).forEach(function(key) {
        var dim = aes[key];
        dim.scale = Scale.fromCoord(dim.coord);
        dim.scaleFn = Scale.getScaleFn(dim);
    });

    var reduceFn = GeomMapper.reduce;
    if(typeof reduceFn === 'function') { data = reduceFn(aes, space, options)(data); }

    var layoutFn = GeomMapper.layout(aes, space, options);
    var styleFn = Geom.getStyles(aes);
    var geomData = data.map(function(d, i) {
      var obj    = layoutFn(d, i);
      obj.style  = styleFn(d, i);
      return obj;
    });

    return geomData;
  }

}
