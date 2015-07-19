/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';

import Scale      from '../../lib/Scale';
import LayerView  from '../layer/LayerView-react';
import Hat         from '../shape-svg-polyline-react/SvgPolyline';
import GeomMapper from './GeomPolarHat';
import Geom       from '../geom/Geom';

import '../../stylesheets/demo.css';
import '../geom-polar-petal/monthly.css';

class Monthly {
  static mapToData(obj) {
      return Object.keys(obj).map(function(key, i) { return [i, obj[key]]; });
  }
}

export default class GeomPolarHatDemo extends React.Component {

  render() {
    var space = {"height":250,"width":250,"margin":0,"radius":115,"originTheta":0};
    var aes = {
      "x":{
        type   : "radial",
        coord  : { domain : [0, 14], range: [0, 95] },
        dataFn : function(d) { return d[1]; }
      },
      "y":{
        type   : "angular",
        coord  : {domain: [0, 12], range: [0, 360]},
        dataFn : function(d) { return d[0]; }
      }
    };
    var options = {offset: 20};

    var data     = Monthly.mapToData({ "jan": 6, "feb": 10, "mar": 12, "apr": 11, "may": 8, "jun": 4, "jul": 4, "aug": 7, "sep": 12, "oct": 13, "nov": 12, "dec": 8 });
    var geomData = Geom.prepare(data, GeomMapper, space, aes, options);

  	return <svg width="250" height="250">
      <g className="chart months" transform="translate(125,125)">
        <LayerView data={geomData} geom={Hat}/>
      </g>
    </svg>;
  }
}


