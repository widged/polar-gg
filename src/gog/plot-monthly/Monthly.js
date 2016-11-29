/* jshint esnext: true */

export default class Monthly {
  static xyFrom(obj) {
      return Object.keys(obj).map(function(key, i) { return [i, obj[key]]; });
  }
}
