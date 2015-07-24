/* jshint esnext: true */

import MockScenarios from '../../../components/demo/MockScenarios';
import Layout     from '../../layout/Layout';
import Monthly    from '../../plot-monthly/Monthly';
import GeomLayout from '../LayoutPolarLine';

export default class PolarBandMock extends MockScenarios {

  static scenario_default() {
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

    var data = d3.range(0, 721, 1).map(function(deg, index){ return [deg, index/720]; });

    var layoutFn = Layout.geom(GeomLayout, aes, space, options);
    var geomData = layoutFn(data);

    var gpData = [{radiallines: geomData, style: {fill: 'none', stroke: 'blue'}}];
    
    return {data: gpData, geom: 'polylineradial'};
  }

}
