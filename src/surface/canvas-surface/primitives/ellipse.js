/* jshint esnext: true */

var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);

const drawEllipse = (props) => {
  var {cx,cy,rx,ry} = props;

  var bb = new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);

  var cmds = [
    ['beginPath'],
    ['moveTo', [cx, cy - ry]],
    ['bezierCurveTo', [cx + (KAPPA * rx), cy - ry,  cx + rx, cy - (KAPPA * ry), cx + rx, cy]],
    ['bezierCurveTo', [cx + rx, cy + (KAPPA * ry), cx + (KAPPA * rx), cy + ry, cx, cy + ry]],
    ['bezierCurveTo', [cx - (KAPPA * rx), cy + ry, cx - rx, cy + (KAPPA * ry), cx - rx, cy]],
    ['bezierCurveTo', [cx - rx, cy - (KAPPA * ry), cx - (KAPPA * rx), cy - ry, cx, cy - ry]],
    ['closePath']
  ];
  return {bb, cmds};
};
