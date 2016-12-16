/* jshint esnext: true */

import GeomLayout from '../LayoutPolarBar';

import range from "../../../lib/range";
var FN = {};
FN.getLayout = () => {
  var space = {"height":250,"width":250,"margin":0,"radius":115,"originTheta":0};
   var aes = {
     "y":{
       type   : "angular",
       guides : [{"type":"axis"}],
       coord: {domain: [0, 750], range: [0, 360]},
       dataFn: function(d) { return d[0]; }
     },
     "x":{
       type   : "radial",
       guides : [{"type":"axis"}],
       coord: { domain :  [-40, 100], range: [0, 115] },
       dataFn: function(d) { return d[1]; }
     },
     "fill"   : {
       "coord" : { domain : [0, 15], range: ['orange', 'yellow'] },
       "dataFn": function(d, i) { return i; }
     }

   };
   var options = {};
   return (new GeomLayout(aes, space, options));
};

FN.getSeries = () => {
  return range(0, 15).map((deg, index) => {
    var obj = [deg * 50 + 50, ~~(Math.random() * index * 5 - 15)];
    return obj;
  });
};

export default FN;
