/* jshint esnext: true */

const rect = (props) => {
  var {x,y,width,height} = props;
  var bb = new BoundingBox(x, y, x + width, y + height);
  var cmds = [
    ['beginPath'],
    ['moveTo', [x, y]],
    ['lineTo', [x + width, y]],
    ['lineTo', [x + width, y + height]],
    ['lineTo', [x, y + height]],
    ['lineTo', [x, y]],
    ['closePath']
  ];
  return {bb, cmds};
};
