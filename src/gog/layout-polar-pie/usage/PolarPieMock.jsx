/* jshint esnext: true */

import Monthly    from '../../plot-monthly/Monthly';
import GeomLayout from '../LayoutPolarPie';

var FN = {};
FN.getLayout = () => {

  var space = {"height":250,"width":250,"margin":0,"radius":115,"originTheta":0};
  var aes = {
    "x":{
      type   : "radial",
      coord: { domain : [0, 14], range: [0, 115] },
      dataFn : function(d, i) { return d[1]; }
    },
    "y":{
      type   : "angular",
      coord: {domain: [0, 12], range: [0, 360]},
      dataFn : function(d, i) { return d[0]; }
    }
  };
  var options = {};
  return (new GeomLayout(aes, space, options));
};

FN.getSeries = () => {
  return Monthly.xyFrom({ "jan": 6, "feb": 10, "mar": 12, "apr": 11, "may": 8, "jun": 4, "jul": 4, "aug": 7, "sep": 12, "oct": 13, "nov": 12, "dec": 8 });

};

export default FN;
