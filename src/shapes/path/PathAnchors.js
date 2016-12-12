/* jshint esnext: true */

import Anchor from './Anchor.es6';
import Commands from './CommandTypes';

const {CLOSEPATH, CURVETO, MOVETO, LINETO, ARCTO, QUADCURVE, rHLINETO, rVLINETO} = Commands;

var PI = Math.PI,
    tau = 2 * PI,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

const roughlyEqual = (a,b) => {
  if(b === undefined) { b = 0;}
  return Math.abs(a - b) <= epsilon;
};



class PathAnchors {

  constructor() {
    this.startPoint = null; // start of current subpath
    this.endPoint = null; // end of current subpath
    this.anchors = [];
  }

  closePath() {
    if (this.endPoint[0] !== null) {
      this.endPoint = this.startPoint.slice();
      this.anchors.push(new Anchor(CLOSEPATH));
    }
  }

  moveTo(x, y) {
    this.anchors.push(new Anchor(MOVETO, +x, +y));
    this.startPoint = [+x, +y];
    this.endPoint   = [+x, +y];
  }

  lineTo(x, y) {
    this.anchors.push(new Anchor(LINETO, +x, +y));
    this.endPoint   = [+x, +y];
  }

  quadraticCurveTo(x1, y1, x, y) {
    this.anchors.push(new Anchor(QUADCURVE, +x1, +y1, +x, +y));
    this.endPoint   = [+x, +y];
  }

  bezierCurveTo(x1, y1, x2, y2, x, y) {
    this.anchors.push(new Anchor(CURVETO, +x1, +y1, +x2, +y2, +x, +y));
    this.endPoint   = [+x, +y];
  }

  arcTo(x1, y1, x2, y2, r) {

    // read state
    var x0 = this.endPoint[0],
        y0 = this.endPoint[1],
        endPoint = this.endPoint.slice();

    // cast to number
    x1 = +x1;
    y1 = +y1;
    x2 = +x2;
    y2 = +y2;
    r = +r;

    // cast to number
    var anchors = [],
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    if (x0 === null) {
      // Is this path empty? Move to (x1,y1).
      anchors.push(new Anchor(MOVETO, x1, y1));
      endPoint = [x1, y1];
    } else if (roughlyEqual(l01_2, 0)) {
      // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    } else if (roughlyEqual(y01 * x21,y21 * x01) || !r) {
      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      anchors.push(new Anchor(LINETO, x1, y1));
      endPoint = [x1, y1];
    } else {
      // Otherwise, draw an arc!
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((PI - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (!roughlyEqual(t01,1)) {
        anchors.push(new Anchor(LINETO, (x1 + t01 * x01), (y1 + t01 * y01)));
      }
      let rX1 = x1 + t21 * x21;
      let rY1 = y1 + t21 * y21;
      anchors.push(new Anchor(ARCTO,  r, r, 0, 0, (+(y01 * x20 > x01 * y20)),rX1, rY1));
      endPoint = [rX1, rY1];
    }

    // write state
    if(endPoint.length) {
      this.endPoint = endPoint.slice();
    }
    this.anchors = this.anchors.concat(anchors);
  }

  arc(x, y, r, a0, a1, ccw) {

    var endPoint = this.endPoint.slice();

    // cast to numbers
    x = +x; y = +y; r = +r;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // main
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy;

    // Is this path empty? Move to (x0,y0).
    if (!endPoint.length) {
      this.anchors.push(new Anchor(MOVETO, x0, y0));
    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    } else if (!roughlyEqual(endPoint[0], x0) || !roughlyEqual(endPoint[1], y0)) {
      this.anchors.push(new Anchor(LINETO, x0, y0));
    }

    // If the arc is not empty, let's draw the arc proper
    if (r) {

        var cw = 1 ^ ccw,
            da = ccw ? a0 - a1 : a1 - a0,
            anchors = [];

        // Is it a complete circle? Draw two arcs to complete the circle.
        if (da > tauEpsilon) {
          anchors.push(new Anchor(ARCTO,  r, r, 0, 1, cw, (x - dx), (y - dy)));
          anchors.push(new Anchor(ARCTO,  r, r, 0, 1, cw, x0, y0));
        } else {
          // Otherwise, draw an arc!
          if (da < 0) da = da % tau + tau;
          let daB = (da >= PI) ? 1 : 0;
          let rX1 = x + r * Math.cos(a1);
          let rY1 = y + r * Math.sin(a1);
          anchors.push(new Anchor(ARCTO,  r, r, 0, daB, cw, rX1, rY1));
          endPoint = [rX1, rY1];
        }

      // update state
      if(endPoint.length) { this.endPoint = endPoint.slice(); }
      this.anchors = this.anchors.concat(anchors);
      return;
    }

  }

  rect(x, y, w, h) {
    let {anchors, endPoint} = rect({x, y, w, h});
    this.startPoint = endPoint.slice();
    this.endPoint = endPoint.slice();
    this.anchors = this.anchors.concat(anchors);
  }

  list() {
    return this.anchors.map((d) => { return d.valueOf(); });
  }


}

function path() {
  return new PathAnchors();
}

export default path;
