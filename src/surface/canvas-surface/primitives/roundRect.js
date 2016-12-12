/* jshint esnext: true */

const drawRoundedRect = (props) => {
  var {x,y,width,height,rx,ry} = props;
  if (rx !== undefined && ry === undefined)  { ry = rx; }
  if (ry !== undefined && rx === undefined)  { rx = ry; }
  if (rx === undefined)  { rx = 0; }
  if (ry === undefined)  { ry = 0; }

  var bb = new BoundingBox(x, y, x + width, y + height);

  var cmds = [
    ['beginPath'],
    ['moveTo', [x + rx, y]],
    ['lineTo', [x + width - rx, y]],
    ['quadraticCurveTo', [x + width, y, x + width, y + ry]],
    ['lineTo', [x + width, y + height - ry]],
    ['quadraticCurveTo', [x + width, y + height, x + width - rx, y + height]],
    ['lineTo', [x + rx, y + height]],
    ['quadraticCurveTo', [x, y + height, x, y + height - ry]],
    ['lineTo', [x, y + ry]],
    ['quadraticCurveTo', [x, y, x + rx, y]],
    ['closePath']
  ];

  return {bb, cmds};
};
