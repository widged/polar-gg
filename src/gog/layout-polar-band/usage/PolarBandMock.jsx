/* jshint esnext: true */

import Monthly    from '../../plot-monthly/Monthly';
import GeomLayout from '../LayoutPolarBand';

var FN = {};
FN.getLayout = () => {
  var space = {"height":250,"width":250,"margin":0,"radius":115,"originTheta":0};
  var aes = {
    "y":{
      "type"   : "angular",
      "guides" : [{"type":"axis"}],
      "coord"  : {domain : [0,14], range: [0, 360], scale: 'linear'},
      "dataFn" : function(d) { return d[1]; }
    },
    "x":{
      "type"   : "radial",
      "guides" : [{"type":"axis"}],
      "coord"  : { domain : [0, 5], range: [0, space.radius], scale: 'linear'},
      "dataFn" : function(d) { return d[0]; }
    },
    "fill"   : {
      "coord" : { domain : [0, 3], range: ['red', 'blue'] },
      "dataFn": function(d, i) { return i; }
    },
    "stroke" : {
      "coord": { domain : [0, 3], range: ['red', 'blue'] },
      "dataFn": function(d, i) { return i; }
    }
  };
  var options = {barWidth: 0.9};
  return (new GeomLayout(aes, space, options));
};

FN.getSeries = () => {
  return [[1,4],[2,8],[3,7],[0,3]];
};

export default FN;
