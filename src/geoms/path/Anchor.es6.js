/* jshint esnext: true */

const round3 = (d) => {
  return Math.round(d * 1000) / 1000;
};

class Anchor {
    constructor(cmd, x, y, ...extras) {
      this.state = { cmd, x, y, extras };
    }

    svgString() {
      var { cmd, x, y, extras } = this.state;
      var more = [];
      if(x      !== undefined) { more = more.concat([x,y]); }
      if(extras !== undefined) { more = more.concat(extras); }
      return '' + cmd + (more.length ? more.map((d) => { return round3(d); }).join(' ') : '');
    }

    valueOf() {
      var { cmd, x, y, extras } = this.state;
      return [cmd, x, y, ...extras];
    }
}


export default Anchor;


/*
"https://github.com/MaxArt2501/d-path-parser.git
[{
    code: "M",
    relative: false,
    end: { x: 0, y: 0 }
}, {
    code: "l",
    relative: true,
    end: { x: 10, y: 10 }
}, {
    code: "A",
    relative: false,
    radii: { x: 14.142, y: 14.142 },
    rotation: 0,
    large: true,
    clockwise: true,
    end: { x: 10, y: -10 }
}, {
    code: "Z"
}]
*/


/*
"git://github.com/hughsk/svg-path-parser.git"
[
  { code:'M', command:'moveto', x:3, y:7 },
  { code:'L', command:'lineto', x:5, y:-6 },
  { code:'L', command:'lineto', x:1, y:7 },
  { code:'L', command:'lineto', x:100, y:-0.4 },
  { code:'m', command:'moveto', relative:true, x:-10, y:10 },
  { code:'l', command:'lineto', relative:true, x:10, y:0 },
  { code:'V', command:'vertical lineto', y:27 },
  { code:'V', command:'vertical lineto', y:89 },
  { code:'H', command:'horizontal lineto', x:23 },
  { code:'v', command:'vertical lineto', relative:true, y:10 },
  { code:'h', command:'horizontal lineto', relative:true, x:10 },
  { code:'C', command:'curveto', x1:33, y1:43, x2:38, y2:47, x:43, y:47 },
  { code:'c', command:'curveto', relative:true, x1:0, y1:5, x2:5, y2:10, x:10, y:10 },
  { code:'S', command:'smooth curveto', x2:63, y2:67, x:63, y:67 },
  { code:'s', command:'smooth curveto', relative:true, x2:-10, y2:10, x:10, y:10 },
  { code:'Q', command:'quadratic curveto', x1:50, y1:50, x:73, y:57 },
  { code:'q', command:'quadratic curveto', relative:true, x1:20, y1:-5, x:0, y:-10 },
  { code:'T', command:'smooth quadratic curveto', x:70, y:40 },
  { code:'t', command:'smooth quadratic curveto', relative:true, x:0, y:-15 },
  { code:'A', command:'elliptical arc', rx:5, ry:5, xAxisRotation:45, largeArc:true, sweep:false, x:40, y:20 },
  { code:'a', command:'elliptical arc', relative:true, rx:5, ry:5, xAxisRotation:20, largeArc:false, sweep:true, x:-10, y:-10 },
  { code:'Z', command:'closepath' }
]
*/


/*
https://github.com/nfroidure/SVGPathData
// {"commands":[{
//    "type": SVGPathData.MOVE_TO,
//    "relative": false,
//    "x": 10, "y": 10
//  },{
//    "type": SVGPathData.HORIZ_LINE_TO,
//    "relative": false,
//    "x": 60
//  },{
//    "type": SVGPathData.VERT_LINE_TO,
//    "relative":false,
//    "y": 60
//  },{
//    "type": SVGPathData.LINE_TO,
//    "relative": false,
//    "x": 10,
//    "y": 60
//  },{
//    "type": SVGPathData.CLOSE_PATH
//  }
// ]}
*/

/*
SuperCanvas
const PATH_LENGTHS = {
    'L': 2,
    'M': 2,
    'C': 6,
    'S': 4,
    'Q': 4,
    'T': 2,
    'A': 7,
    'V': 1,
    'H': 1,
};
*/
