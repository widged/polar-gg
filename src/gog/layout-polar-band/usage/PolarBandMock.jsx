/* jshint esnext: true */

import MockScenarios from '../../../usage/MockScenarios';
import Layout     from '../../layout/Layout';
import Monthly    from '../../plot-monthly/Monthly';
import GeomLayout from '../LayoutPolarBand';

export default class PolarBandMock extends MockScenarios {

  static scenario_default() {
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
    
    var options = {};
    var data = [[1,4],[2,8],[3,7]];

    var layoutFn = Layout.geom(GeomLayout, aes, space, options);
    var geomData = layoutFn(data); 
    return {data: geomData, geom: 'arc'};
  }

}
