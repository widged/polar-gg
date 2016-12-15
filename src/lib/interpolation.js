/* jshint esnext: true */

import color, {Rgb}    from './color';

export function linearInterpolation ([leftMin, leftMax], [rightMin, rightMax]) {

  const lerp = ([leftMin, leftMax], [rightMin, rightMax]) => {
    var leftSpan = leftMax - leftMin;
    var rightSpan = rightMax - rightMin;

    return  (value) => {
      // Convert the left range into a 0-1 range (float)
      var valueScaled = (value - leftMin) / (leftSpan);
      // Convert the 0-1 range into a value in the right range.
      return rightMin + (valueScaled * rightSpan);
    };
  };
  if(typeof rightMin === 'string') {
    var colMin = color(rightMin), colMax = color(rightMax);
    if(colMin && colMax) {
      rightMin = colMin;
      rightMax = colMax;
    }
  }
  if(typeof rightMin === 'object') {
    return (value) => {
      var res = new Rgb(
        lerp([leftMin, leftMax], [rightMin.r, rightMax.r])(value),
        lerp([leftMin, leftMax], [rightMin.g, rightMax.g])(value),
        lerp([leftMin, leftMax], [rightMin.b, rightMax.b])(value),
        lerp([leftMin, leftMax], [rightMin.opacity, rightMax.opacity])(value)
      );
      return res;
    };
  } else {
    return lerp([leftMin, leftMax], [rightMin, rightMax]);
  }
}


function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}
function raiseSqrt(x) { return raise(x, 0.5); }
function dropSqrt(x) { return raise(x, 1 / 0.5); }

export function sqrtInterpolation ([x1, x2], [y1, y2]) {
  return (x) => {
    var z = (dropSqrt(y1) * (x2 - x) - dropSqrt(y2) * (x1 - x));
    return raiseSqrt(z / (x2 - x1));
  };
}
