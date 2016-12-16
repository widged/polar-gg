/* jshint esnext: true */

import Monthly    from '../../plot-monthly/Monthly';
import GeomLayout from '../LayoutPolarLine';

import range from "../../../lib/range";

var FN = {};
FN.getLayout = () => {

  var space = {"height":250,"width":250,"margin":0,"radius":115,"originTheta":0};
  var aes = {
    "x":{
      type    : "radial",
      coord   : { domain :  [0, 1], range: [0, 115] },
      dataFn  : function(d) { return d[1]; }
    },
    "y":{
      type    : "angular",
      coord: {domain: [0, 360], range: [360, 0]},
      dataFn  : function(d) { return d[0]; }
    },
  };
  var options = {};
  return (new GeomLayout(aes, space, options));
};

FN.getSeries = () => {
  return range(0, 721, 1).map(function(deg, index){ return [deg, index/720]; });

};

export default FN;
