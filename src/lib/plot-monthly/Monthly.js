/* jshint esnext: true */

import './monthly.css';

export default class Monthly {
  static xyFrom(obj) {
      return Object.keys(obj).map(function(key, i) { return [i, obj[key]]; });
  }
}
