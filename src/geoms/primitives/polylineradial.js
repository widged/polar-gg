/* jshint esnext: true */

import path from '../path/PathAnchors';

class CurveCartesian {

  constructor(context) {
    this._path = context;
  }
  areaStart() { this._line = 0;   }
  areaEnd()   { this._line = NaN; }
  lineStart() { this._point = 0;  }
  lineEnd() {
    if (this._line || (this._line !== 0 && this._point === 1)) {
      this._path.closePath();
    }
    this._line = 1 - this._line;
  }

  point(x, y) {
    x = +x; y = +y;
    switch (this._point) {
      case 0: {
        this._point = 1;
        if(this._line) {
          this._path.lineTo(x, y);
        } else {
          this._path.moveTo(x, y);
        }
        break;
      }
      case 1: {
        this._point = 2;
        this._path.lineTo(x, y);
        break;
      }
      default: {
        this._path.lineTo(x, y);
        break;
      }
    }
  }
  anchors() {
    if (this._path) {
      return this._path.listAnchors();
    }
  }
}

class CurvePolar extends CurveCartesian {
  point(a, r) {
    super.point(r * Math.sin(a), r * -Math.cos(a));
  }
}

const radialLinePath = (data, {angle,radius,defined}) => {
  let output = new CurvePolar(path());
  var open = false;
  for (let i = 0, ni = data.length, di = null; i <= ni; ++i) {
    di = data[i];
    var isLast = !(i < ni && defined(di, i, data));
    if (isLast === open) {
      if (!open) {
        output.lineStart();
      } else {
        output.lineEnd();
      }
      open = !open;
    }

    if (open) {
      output.point(angle(di, i, data), radius(di, i, data));
    }
  }
  return output.anchors();
};

const radialLinePathConfig = (fns) => {
  if(fns === undefined || typeof fns !== 'object') { fns = {}; }
  fns = Object.assign({
    angle: function(d)   { return d.angle; },
    radius: function(d)  { return d.radius; },
    defined: function(d) { return true; }
  }, fns);
  return fns;
};

export default (props) => {
    var {radiallines} = props;
    var fns = radialLinePathConfig();
    return radialLinePath(radiallines, fns);
};
