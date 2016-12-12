/* jshint esnext: true */

var convertTransform = (function() {
  const trim = (s) => { return s.replace(/^\s+|\s+$/g, ''); };
  const compressSpaces = (s) => { return s.replace(/[\s\r\t\n]+/gm,' '); };
  const toRadians = (angle) => {
    if(angle === undefined) { return 0; }
    var s = angle.toString();
    var n = parseFloat(angle);
    if (s.match(/grad$/)) return n * (Math.PI / 200.0);
    if (s.match(/rad$/)) return n;
    return n * (Math.PI / 180.0);
  };
  const toNumberArray = (s) => {
    s = (s.toString() || '').replace(/,/g, ' ');
    var a = trim(compressSpaces(s)).split(' ');
    for (var i=0; i<a.length; i++) {
      a[i] = parseFloat(a[i]);
    }
    return a;
  };

  const createPoint = function(s) {
    var a = toNumberArray(s);
    return {x: a[0], y: a[1]};
  };

  var FN = {};
  // getData
  FN.rotate = function(s) {
    var a   = toNumberArray(s);
    var radians = toRadians(a[0]);
    var cx = a[1] || 0;
    var cy = a[2] || 0;
    return {radians, cx, cy};
  };
  FN.translate = FN.scale = function(s) {
    var [x,y] = s;
    return {x, y};
  };
  FN.matrix = function(s) {
    return {m: toNumberArray(s)};
  };
  FN.skewX = function(angle) {
    return {m: [1, 0, Math.tan(toRadians(angle)), 1, 0, 0]};
  };
  FN.skewY = function(angle) {
    return {m: [1, Math.tan(toRadians(angle)), 0, 1, 0, 0]};
  };

  // apply
  var apply = {};
  apply.rotate = function(d) {
    var {cx, cy, radians} = d;
    return [
      ['translate', [cx, cy]],
      ['rotate'   , [radians]],
      ['translate', [-cx, -cy]]
    ];
  };
  apply.translate = function(d) {
    return [
      ['translate', [d.x || 0.0, d.y || 0.0]]
    ];
  };
  apply.scale = function(d) {
    return [['scale', [d.x || 1.0, d.y || d.x || 1.0]]];
  };
  apply.matrix = apply.skewX = apply.skewY = function(d) {
    var {m} = d;
    return [['transform', [m[0], m[1], m[2], m[3], m[4], m[5]]]];
  };

  const objectEntries = (o) => {
    return Object.keys(o).reduce((acc, d) => {
      acc.push([d, o[d]]);
      return acc;
    }, []);
  };

  return (transform) => {

    var transforms = objectEntries(transform).reduce((acc,d) => {
      var [type, value] = d;
      if(FN.hasOwnProperty(type)) {
        var obj = new FN[type](value);
        var cmds = apply[type](obj);
        acc.push(cmds);
      }
      return acc;
    }, []);

    var revert = {};
    return transforms;
  };


} ());

module.exports = {convertTransform};
