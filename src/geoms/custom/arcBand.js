/* jshint esnext: true */

import path from '../path/PathAnchors';

const EPSILON = 1e-12;
const PI      = Math.PI;
const HALF_PI = PI / 2;
const TAU     = 2 * PI;

const constant = (x) => { return () => { return x; }; };

const asin = (x) => { return x >= 1 ? HALF_PI : x <= -1 ? -HALF_PI : Math.asin(x); };

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) {
    cx0 = cx1;
    cy0 = cy1;
  }

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}


const arcCentroid = (data, {innerRadius, outerRadius, startAngle, endAngle}) => {

  var r = ((+innerRadius(data)) + (+outerRadius(data))) / 2,
      a = ((+startAngle(data))  + (+endAngle(data))) / 2 - PI / 2;
  return [Math.cos(a) * r, Math.sin(a) * r];
};

const arcPath = (data, { innerRadius, outerRadius, startAngle, endAngle, padAngle, padRadius, cornerRadius }) => {

  var r,
      r0 = +innerRadius(data),
      r1 = +outerRadius(data),
      a0 = +startAngle(data) - HALF_PI,
      a1 = +endAngle(data) - HALF_PI,
      da = Math.abs(a1 - a0),
      cw = a1 > a0;

  let buffer = path();

  // Ensure that the outer radius is always larger than the inner radius.
  if (r1 < r0) {
    r = r1; r1 = r0; r0 = r;
  }

  if (r1 <= EPSILON) {
    // Is it a point?
    buffer.moveTo(0, 0);
  } else if (da > TAU - EPSILON) {
    // Or is it a circle or annulus?
    buffer.moveTo(r1 * Math.cos(a0), r1 * Math.sin(a0));
    buffer.arc(0, 0, r1, a0, a1, !cw);
    if (r0 > EPSILON) {
      buffer.moveTo(r0 * Math.cos(a1), r0 * Math.sin(a1));
      buffer.arc(0, 0, r0, a1, a0, cw);
    }
  } else {
    // Or is it a circular or annular sector?
    var a01 = a0,
        a11 = a1,
        a00 = a0,
        a10 = a1,
        da0 = da,
        da1 = da,
        ap = padAngle.apply(this, arguments) / 2,
        padRad = padRadius(data),
        rp = (ap > EPSILON) && (padRad ? +padRad : Math.sqrt(r0 * r0 + r1 * r1)),
        rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius(data)),
        rc0 = rc,
        rc1 = rc,
        t0,
        t1;

    // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
    if (rp > EPSILON) {
      var p0 = asin(rp / r0 * Math.sin(ap)),
          p1 = asin(rp / r1 * Math.sin(ap));
      if ((da0 -= p0 * 2) > EPSILON) {
        p0 *= (cw ? 1 : -1);
        a00 += p0;
        a10 -= p0;
      } else {
        da0 = 0;
        a00 = a10 = (a0 + a1) / 2;
      }
      if ((da1 -= p1 * 2) > EPSILON) {
        p1 *= (cw ? 1 : -1);
        a01 += p1;
        a11 -= p1;
      } else {
        da1 = 0;
        a01 = a11 = (a0 + a1) / 2;
      }
    }

    var x01 = r1 * Math.cos(a01),
        y01 = r1 * Math.sin(a01),
        x10 = r0 * Math.cos(a10),
        y10 = r0 * Math.sin(a10);

    // Apply rounded corners?
    if (rc > EPSILON) {
      var x11 = r1 * Math.cos(a11),
          y11 = r1 * Math.sin(a11),
          x00 = r0 * Math.cos(a00),
          y00 = r0 * Math.sin(a00);

      // Restrict the corner radius according to the sector angle.
      if (da < PI) {
        var oc = da0 > EPSILON ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
            ax = x01 - oc[0],
            ay = y01 - oc[1],
            bx = x11 - oc[0],
            by = y11 - oc[1],
            kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
            lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
        rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
        rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
      }
    }

    if (da1 <= EPSILON) {
      // Is the sector collapsed to a line?
      buffer.moveTo(x01, y01);
    } else if (rc1 > EPSILON) {
      // Does the sector’s outer ring have rounded corners?
      t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
      t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

      buffer.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

      if (rc1 < rc) {
        // Have the corners merged?
        buffer.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);
      } else {
        // Otherwise, draw the two corners and the ring.
        buffer.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
        buffer.arc(0, 0, r1, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
        buffer.arc(t1.cx, t1.cy, rc1, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
      }
    } else {
      // Or is the outer ring just a circular arc?
      buffer.moveTo(x01, y01);
      buffer.arc(0, 0, r1, a01, a11, !cw);
    }

    // Is there no inner ring, and it’s a circular sector?
    // Or perhaps it’s an annular sector collapsed due to padding?
    if (r0 <= EPSILON || da0 <= EPSILON) {
      buffer.lineTo(x10, y10);
    } else if (rc0 > EPSILON) {
      // Does the sector’s inner ring (or point) have rounded corners?
      t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
      t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

      buffer.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

      if (rc0 < rc) {
        // Have the corners merged?
        buffer.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);
      } else {
        // Otherwise, draw the two corners and the ring.
        buffer.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
        buffer.arc(0, 0, r0, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
        buffer.arc(t1.cx, t1.cy, rc0, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
      }
    }

    // Or is the inner ring just a circular arc?
    else buffer.arc(0, 0, r0, a10, a00, cw);
  }

  buffer.closePath();
  return buffer.listAnchors();
};

const arcConfig = (fns) => {
  if(fns === undefined || typeof fns !== 'object') { fns = {}; }
  Object.assign(fns, {
    innerRadius : (d) => { return d.innerRadius || 0; },
    outerRadius : (d) => { return d.outerRadius || 0; },
    startAngle  : (d) => { return d.startAngle || 0;  },
    endAngle    : (d) => { return d.endAngle || 0; },
    padAngle    : (d) => { return d.padAngle || 0; },
    padRadius   : (d) => { return 0; },
    cornerRadius: (d) => { return 0; },
  });
  return fns;
};


export default (props) => {
  var fns = arcConfig();
  return arcPath(props, fns);
};
