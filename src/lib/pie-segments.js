/* jshint esnext: true */

const descending = (a, b) =>  { return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN; };
const TAU = 2 * Math.PI;
const constant = (x) => { return () => { return x; }; };

export default function(fns) {
  if(fns === undefined || typeof fns !== 'object') { fns = {}; }
  const defaults = {
    value      : (d) => { return d; },
    startAngle : () => { return 0; },
    endAngle   : () => { return TAU; },
    padAngle   : () => { return 0; },
    sortValues : descending,
    sort       : null
  };
  fns = Object.assign(defaults, fns);

  return (data) => {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +fns.startAngle(data),
        da = Math.min(TAU, Math.max(-TAU, fns.endAngle(data) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, fns.padAngle(data)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +fns.value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally fns.sort the arcs by previously-computed values or by data.
    if (fns.sortValues != null) {
      index.sort(function(i, j) { return fns.sortValues(arcs[i], arcs[j]); });
    } else if (fns.sort != null) {
      index.sort(function(i, j) { return fns.sort(data[i], data[j]); });
    }

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i];
      v = arcs[j];
      a1 = a0 + (v > 0 ? v * k : 0) + pa;
      arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  };

}
