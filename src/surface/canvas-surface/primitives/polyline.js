/* jshint esnext: true */

const drawPolyline = (xs, newCtx) => {

  var bb = new BoundingBox(x1, y1, x2, y2);

  var points = [];
  for (let i=0; i<xs.length; i+=2) {
      points.push({x: xs[i], y: xs[i+1]});
  }
  var cmds = [];
  if(newCtx) {
    cmds.push(['beginPath']);
    var {x,y} = points[0];
    cmds.push(['moveTo', [x,y]]);
    bb.addPoint(x,y);
  }
  for (let i=1, ni = points.length; i< ni; i++) {
      let {x,y} = points[i];
      bb.addPoint(x,y);
      cmds.push(['lineTo',[x,y]]);
  }

  return {bb, cmds, points};

};

  /*
  function getMarkers() {
      var markers = [];
      for (var i=0; i<this.points.length - 1; i++) {
        markers.push([this.points[i], this.points[i].angleTo(this.points[i+1])]);
      }
      markers.push([this.points[this.points.length-1], markers[markers.length-1][1]]);
      return markers;
  }
   */
