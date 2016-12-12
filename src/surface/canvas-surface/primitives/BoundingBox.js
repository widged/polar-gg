/* jshint esnext: true */

class Rect {

    constructor(x1, y1, x2, y2) {
      if(x1 === undefined) { x1 = Number.NaN; }
      if(y1 === undefined) { y1 = Number.NaN; }
      if(x2 === undefined) { x2 = Number.NaN; }
      if(y2 === undefined) { y2 = Number.NaN; }
      this.state = {x1, y1, x2, y2};
    }

    x() { return this.state.x1; }
    y() { return this.state.y1; }

    width()  {
        var {x1, x2} = this.state;
        return x2 - x1;
    }

    height() {
        var {y1, y2} = this.state;
        return y2 - y1;
    }

    isPointInBox(x, y) {
        var {x1, y1, x2, y2} = this.state;
      return (x1 <= x && x <= x2 && y1 <= y && y <= y2);
    }

    rect() {
        return this.state;
    }
}

class BoundingBox extends Rect {

    constructor(x1, y1, x2, y2)  { // pass in initial points if you want
        super(x1, y1, x2, y2);
    }

    addPoint(x, y) {
      if (x != null) {
        var {x1, x2} = this.state;
        if (isNaN(x1) || isNaN(x2)) {
            x1 = x;
            x2 = x;
        }
        if (x < x1) x1 = x;
        if (x > x2) x2 = x;
        this.state.x1 = x1;
        this.state.x2 = x2;
      }

      if (y != null) {
        var {y1, y2} = this.state;
        if (isNaN(y1) || isNaN(y2)) {
            y1 = y;
            y2 = y;
        }
        if (y < y1) y1 = y;
        if (y > y2) y2 = y;
        this.state.y1 = y1;
        this.state.y2 = y2;
      }
    }

    addRect({x1, y1, x2, y2}) {
      this.addPoint(x1, y1);
      this.addPoint(x2, y2);
    }

    addX(x) { this.addPoint(x, null); }

    addY(y) { this.addPoint(null, y); }

    addQuadraticCurve([p0x, p0y], [p1x, p1y], [p2x, p2y]) {
      var cp1x = p0x + 2/3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)
      var cp1y = p0y + 2/3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)
      var cp2x = cp1x + 1/3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)
      var cp2y = cp1y + 1/3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)
      this.addBezierCurve([p0x, p0y], [cp1x, cp2x], [cp1y, cp2y], [p2x, p2y]);
    }

    addBezierCurve([p0x, p0y], [p1x, p1y], [p2x, p2y], [p3x, p3y]) {
      // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
      var p0 = [p0x, p0y], p1 = [p1x, p1y], p2 = [p2x, p2y], p3 = [p3x, p3y];

      this.addPoint(p0[0], p0[1]);
      this.addPoint(p3[0], p3[1]);

      var f = function(t, p0, p1, p2, p3) {
        const v0 = Math.pow(1-t, 3) * p0,
              v1 = 3 * Math.pow(1-t, 2) * t * p1,
              v2 = 3 * (1-t) * Math.pow(t, 2) * p2,
              v3 = Math.pow(t, 3) * p3;
        return v0 + v1 + v2 + v3;
      };


      for (var i=0; i<=1; i++) {

        var b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
        var a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
        var c = 3 * p1[i] - 3 * p0[i];

        if (a == 0) {
        if (b == 0) continue;
        var t = -c / b;
        if (0 < t && t < 1) {
          if (i == 0) this.addX(f(t, p0[i], p1[i], p2[i], p3[i]));
          if (i == 1) this.addY(f(t, p0[i], p1[i], p2[i], p3[i]));
        }
        continue;
        }

        var b2ac = Math.pow(b, 2) - 4 * c * a;
        if (b2ac < 0) continue;
        var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
        if (0 < t1 && t1 < 1) {
            if (i == 0) this.addX(f(t1));
            if (i == 1) this.addY(f(t1));
        }
        var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
        if (0 < t2 && t2 < 1) {
            if (i == 0) this.addX(f(t2));
            if (i == 1) this.addY(f(t2));
        }
      }
    }


}

module.exports = BoundingBox;
