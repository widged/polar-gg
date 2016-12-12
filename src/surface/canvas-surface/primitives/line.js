/* jshint esnext: true */

const drawLine = ({x1, y1, x2, y2}) => {

  var bb = new BoundingBox(x1, y1, x2, y2);

  var cmds = [
    ['beginPath'],
    ['moveTo', [x1, y1]],
    ['lineTo', [x2, y2]],
    ['closePath']
  ];

  return {bb, cmds};

    /*
    this.getMarkers = function() {
        var a = angleTo({x:x1, y:y1}, {x:x2, y:y2});
        return [
            [{x:x1, y:y1}, a],
            [{x:x2, y:y2}, a]
        ];
    }
     */
}
