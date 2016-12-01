/* jshint esnext: true */

import Layout     from '../../layout/Layout';
import Monthly    from '../../plot-monthly/Monthly';
import GeomLayout from '../LayoutPolarBar';
import MockScenarios from '../../../usage/MockScenarios';

import range from "../../../lib/range";

export default class PolarBarMock extends MockScenarios {

  static scenario_default() {
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
    var data = range(0, 15).map(function(deg, index){
      var obj = [deg * 50 + 50, ~~(Math.random() * index * 5 - 15)];
      return obj;
    });

    var layoutFn = Layout.geom(GeomLayout, aes, space, options);
    var geomData = layoutFn(data);
    return {data: geomData, geom: 'rect'};
  }

}
