/* jshint esnext: true */

const drawPolygon = (xs, newCtx) => {

  var {bb, cmds, points} = drawPolyline(xs, newCtx);

  if (newCtx) {
  // back to origin
  var {x,y} = points[0];
    cmds.push(['lineTo',[x,y]]);
    cmds.push(['closePath'])
  }
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
};
