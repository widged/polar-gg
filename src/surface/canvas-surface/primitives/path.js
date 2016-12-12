/* jshint esnext: true */


const drawPath = (anchors, newCtx) => {

  var BoundingBox = require('./BoundingBox');

  const PI = Math.PI, HALF_PI = PI / 2, RAD = PI / 180.0, TWO_PI = 2 * PI;

  class PathManager {
    constructor() {
      this.state = {
        bb : new BoundingBox(),
        markers : [],
        pointer: [0,0],
        lastCommand: [],
        instructions: [],
        lastControl: undefined
      };
    }
    addLineMarker(pTo, ptFrom) {
      if(ptFrom === undefined) { ptFrom = this.state.pointer }
      this.addAngleMarker(pTo, PathManager.angleTo(ptFrom, pTo));
    }
    addAngleMarker(pTo, angle) {
      this.state.markers.push({pTo, angle});
    }
    updateBounding(x,y) {
      this.state.bb.addPoint(x,y);
    }
    updateBoundingWithBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
      this.state.bb.addBezierCurve([p0x, p0y], [p1x, p1y], [p2x, p2y], [p3x, p3y]);
    }
    updateBoundingWithQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
     this.state.bb.addQuadraticCurve([p0x, p0y], [p1x, p1y], [p2x, p2y]);
    }
    updatePointer(x,y) {
      this.state.pointer = [x,y];
    }
    addInstruction(instruction) {
      this.state.instructions.push(instruction);
    }
    lastCommand(_) {
      if(!arguments.length) { return this.state.lastCommand; }
      this.state.lastControl = undefined;
      this.state.lastCommand = _;
    }
    lastControl(_) {
      if(!arguments.length) { return this.state.lastControl; }
      this.state.lastControl = _;
    }
    pointer() {
      return this.state.pointer;
    }
    makeAbsolute(x,y) {
      return [
        pointer[0] + x,
        pointer[1] + y
      ];
    }
    makePointsAbsolute(xs) {
      var pts = [];
      for (var i = 0, ni = xs.length; i < ni; i+= 2) {
        let [x,y] = [xs[i], xs[i+1]];
        pts = pts.concat(pth.makeAbsolute(x,y))
      }
      return pts;
    }

  }

  PathManager.angleTo = (ptFrom, ptTo) => {
    if(ptFrom == null) { return 0; }
    var [x,y]   = ptFrom;
    var [x2,y2] = ptTo;
    return Math.atan2(x2 - y, y2 - x);
  }



  let COMMAND = {};

  COMMAND.Z = COMMAND.z = (undefined, pth) => {
    pth.addInstruction(['closePath']);
  }

  COMMAND.M = ([x, y, ...lineTos], pth) => {
    // (x y)+
    pth.addLineMarker([x,y]);
    pth.updateBounding(x,y);
    pth.updatePointer(x,y)
    pth.addInstruction(['moveTo', [x,y]]);
    while(lineTos.length) {
      let [x,y] = lineTos.splice(0,2)
      pth.addLineMarker([x,y]);
      pth.updateBounding(x,y);
      pth.updatePointer(x,y)
      pth.addInstruction(['lineTo', [x,y]]);
    }
  }
  COMMAND.m = ([x, y, ...lines], pth) => {
    var lines = pth.makePointsAbsolute(lines);
    COMMAND.M([x,y, ...lines], pth);
  }

  COMMAND.L = ([x,y], pth) => {
    pth.addLineMarker([x,y]);
    pth.updateBounding(x,y);
    pth.updatePointer(x,y)
    pth.addInstruction(['lineTo', [x,y]]);
  }
  COMMAND.l = ([x,y], pth) => {
    var pt = pth.makeAbsolute(x,y);
    COMMAND.L([x,y], pth);
  }

  COMMAND.H = (x, pth) => {
    var [lastX, lastY] = pth.pointer();
    var pt = [x,  lastY];
    pth.addLineMarker(pt, [lastX, lastY]);
    pth.updateBounding(...pt);
    pth.addInstruction(['lineTo', pt]);
  }
  COMMAND.h = (x, pth) => {
    var pt = pth.makeAbsolute(x,0);
    return COMMAND.H(pt[0], pth);
  }

  COMMAND.V = (y, pth) => {
    var pt = [lastX,  y];
    pth.addLineMarker([x,y], [lastX, lastY]);
    pth.updateBounding(...pt);
    pth.addInstruction(['lineTo', pt]);
  }
  COMMAND.v = (y, pth) => {
    var pt = pth.makeAbsolute(0,y);
    return COMMAND.H(pt[1], pth);
  }

  // Beziers
  const getReflectedControlPoint = function(pth) {

    if (['C','S','c','s'].includes(pth.lastCommand())) {
      return pth.pointer();
    } else {
      var pointer  = pth.pointer();
      var lastControl = pth.lastControl();
      return [
        2 * current[0] - lastControl[0],
        2 * current[1] - lastControl[1]
      ];
    }
  }

  COMMAND.C = (xs, pth) => {
    // cubic bezier curveto
    // (x1 y1 x2 y2 x y)+
    // C100,100 400,100 400,25
    // startControl(100,100) endControl (400,100) ptTo (400,250).
    var pointer = pth.pointer();
    var p1    = xs.slice(0,2);
    var cntrl = xs.slice(2,4);
    var cp    = xs.slice(4,6);
    pth.lastControl(cntrl);
    pth.addPointer(cp[0], cp[1])
    pth.addLineMarker(cp, cntrl);
    pth.updateBoundingWithBezierCurve(
      pointer[0], pointer[1],
      p1[0], p1[1],
      cntrl[0], cntrl[1],
      cp[0], cp[1]
      );
    pth.addInstruction(['bezierCurveTo', [
      p1[0], p1[1],
      cntrl[0], cntrl[1],
      cp[0], cp[1]
    ]]);
  }
  COMMAND.c = (xs, pth) => {
    COMMAND.C(pth.makePointsAbsolute(xs), pth);
  }


  COMMAND.S = (xs, pth) => {
    // cubic bezier smooth curveto
    // S400,400 250,250
    // (x2 y2 x y)+
    var pointer = pth.pointer();
    var lastControl = pth.lastControl();
    var p1 = getReflectedControlPoint(pth);
    var cntrl = xs.slice(0,2);
    var cp    = xs.slice(2,4);
    pth.lastControl(cntrl);
    pth.addPointer(cp[0], cp[1]);
    pth.addLineMarker(cp, cntrl);
    pth.updateBoundingWithBezierCurve(
      pointer[0], pointer[1],
      p1[0], p1[1],
      cntrl[0], cntrl[1],
      cp[0], cp[1]
      );
    pth.addInstruction(['bezierCurveTo', [
      p1[0], p1[1],
      cntrl[0], cntrl[1],
      cp[0], cp[1]
    ]]);
  }
  COMMAND.s = (xs, pth) => {
    COMMAND.S(pth.makePointsAbsolute(xs), pth);
  }


  COMMAND.Q = (xs, pth) => {
    // quadratic Bézier curveto
    // (x1 y1 x y)+
    // Q 52.5 10, 95 80
    var pointer = pth.pointer();
    var cntrl = xs.slice(0,2);
    var cp = xs.slice(2,4);
    pth.lastControl(cntrl);
    pth.addLineMarker(cp, cntrl);
    pth.updateBoundingWithQuadraticCurve(
      pointer[0], pointer[1],
      cntrl[0], cntrl[1],
      cp[0], cp[1]
    );
    pth.addInstruction(['quadraticCurveTo', [
      cntrl[0], cntrl[1],
      cp[0], cp[1]
    ]]);
  }
  COMMAND.q = (xs, pth) => {
    COMMAND.Q(pth.makePointsAbsolute(xs), pth);
  }


   COMMAND.T = (xs, pth) => {
      // quadratic bezier smooth curveto
      // (x y)+
      // This only works if the previous command was a Q or a T command. If it is not, then the control
      // point is assumed to be the same as the previous point, and you'll only draw lines.
      var pointer = pth.pointer();
      var cntrl = getReflectedControlPoint(pth);
      var cp = xs.slice(0,2);
      pth.lastControl(cntrl);
      pth.addLineMarker(cp, cntrl);
      pth.updateBoundingWithQuadraticCurve(
        pointer[0], pointer[1],
        cntrl[0], cntrl[1],
        cp[0], cp[1]
      );
      pth.addInstruction(['quadraticCurveTo', [
        cntrl[0], cntrl[1],
        cp[0], cp[1]
      ]]);
    }
   COMMAND.t = (xs, pth) => {
      COMMAND.T(pth.makePointsAbsolute(xs), pth);
    }


    COMMAND.A = ([rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y], pth) => {
      // elliptical arc
      // (rx ry x-axis-rotation large-arc-flag sweep-flag x y)+
      // A 30 50 -45 0 1 215.1 109.9
      var pointer = pth.pointer();
      var cp = [x, y];
      // Conversion from endpoint to center parameterization
      // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
      // x1', y1'
      var currp = new svg.Point(
        Math.cos(xAxisRotation) * (pointer[0] - cp[0]) / 2.0 + Math.sin(xAxisRotation) * (pointer[1] - cp[1]) / 2.0,
        -Math.sin(xAxisRotation) * (pointer[0] - cp[0]) / 2.0 + Math.cos(xAxisRotation) * (pointer[1] - cp[1]) / 2.0
      );
      // adjust radii
      var l = Math.pow(currp.x,2)/Math.pow(rx,2)+Math.pow(currp.y,2)/Math.pow(ry,2);
      if (l > 1) {
        rx *= Math.sqrt(l);
        ry *= Math.sqrt(l);
      }
      // cx', cy'
      var s = (largeArcFlag == sweepFlag ? -1 : 1) * Math.sqrt(
        ((Math.pow(rx,2)*Math.pow(ry,2))-(Math.pow(rx,2)*Math.pow(currp.y,2))-(Math.pow(ry,2)*Math.pow(currp.x,2))) /
        (Math.pow(rx,2)*Math.pow(currp.y,2)+Math.pow(ry,2)*Math.pow(currp.x,2))
      );
      if (isNaN(s)) s = 0;
      var cpp = new svg.Point(s * rx * currp.y / ry, s * -ry * currp.x / rx);
      // cx, cy
      var centp = new svg.Point(
        (pointer[0] + cp[0]) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y,
        (pointer[1] + cp[0]) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y
      );
      // vector magnitude
      var m = function(v) { return Math.sqrt(Math.pow(v[0],2) + Math.pow(v[1],2)); }
      // ratio between two vectors
      var r = function(u, v) { return (u[0]*v[0]+u[1]*v[1]) / (m(u)*m(v)) }
      // angle between two vectors
      var a = function(u, v) { return (u[0]*v[1] < u[1]*v[0] ? -1 : 1) * Math.acos(r(u,v)); }
      // initial angle
      var a1 = a([1,0], [(currp.x-cpp.x)/rx,(currp.y-cpp.y)/ry]);
      // angle delta
      var u = [(currp.x-cpp.x)/rx,(currp.y-cpp.y)/ry];
      var v = [(-currp.x-cpp.x)/rx,(-currp.y-cpp.y)/ry];
      var ad = a(u, v);
      if (r(u,v) <= -1) ad = PI;
      if (r(u,v) >= 1) ad = 0;

      if (sweepFlag == 0 && ad > 0) ad = ad - TWO_PI;
      if (sweepFlag == 1 && ad < 0) ad = ad + TWO_PI;

      // for markers
      var halfWay = new svg.Point(
        centp.x - rx * Math.cos((a1 + ad) / 2),
        centp.y - ry * Math.sin((a1 + ad) / 2)
      );
      pth.addAngleMarker(halfWay, (a1 + ad) / 2 + (sweepFlag == 0 ? 1 : -1) * HALF_PI);
      pth.addAngleMarker(cp, ad + (sweepFlag == 0 ? 1 : -1) * HALF_PI);

      pth.updateBounding(cp[0], cp[1]); // TODO: this is too naive, make it better
      var r = rx > ry ? rx : ry;
      var sx = rx > ry ? 1 : rx / ry;
      var sy = rx > ry ? ry / rx : 1;

      pth.addInstruction(['translate', [centp.x, centp.y]]);
      pth.addInstruction(['rotate', [xAxisRotation]]);
      pth.addInstruction(['scale', [sx, sy]]);
      pth.addInstruction(['arc', [0, 0, r, a1, a1 + ad, 1 - sweepFlag]]);
      pth.addInstruction(['scale', [1/sx, 1/sy]]);
      pth.addInstruction(['rotate', -xAxisRotation]);
      pth.addInstruction(['translate', -centp.x, -centp.y]);
    }
   COMMAND.a = ([rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y], pth) => {
      var [x,y] = makeAbsolute(x,y);
      COMMAND.A([rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y], pth);
    }

    var pth = new PathManager();
    pth.addInstruction(['beginPath'])
    anchors.forEach((d) => {
      var [cmd, ...args] = d;
      if(COMMAND.hasOwnProperty(cmd)) {
        pth.lastCommand(cmd);
        COMMAND[cmd](args, pth);
      }
      pth.state;
    });
    pth.addInstruction(['closePath'])

    var {bb, instructions} = pth.state;
    return {bb: bb.rect(), cmds: instructions};
}

module.exports = drawPath;
