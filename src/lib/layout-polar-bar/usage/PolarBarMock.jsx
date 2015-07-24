/* jshint esnext: true */

import Geom    from '../../layout/Layout';
import Monthly from '../../plot-monthly/Monthly';
import Layout  from '../LayoutPolarBar';

export default class PolarBandMock {
  static scenario1() {
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
      }
    };
    var options = {};
    var data = d3.range(0, 15).map(function(deg, index){
      var obj = [deg * 50 + 50, ~~(Math.random() * index * 5 - 15)];
      return obj;
    });

    var layoutFn = Geom.layoutFn(Layout, aes, space, options);
    var geomData = layoutFn(data);
    return {data: geomData, geom: 'rect'};
  }
}


