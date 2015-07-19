/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';

import Scale from '../../lib/Scale';
import LayerView from '../layer/LayerView-react';
import Dot        from '../shape-svg-dot-react/SvgDot';
import GeomMapper from './GeomPolarDot';
import Geom       from '../geom/Geom';

import '../../stylesheets/demo.css';
import '../geom-polar-petal/monthly.css';


class Monthly {
  static mapToData(obj) {
      return Object.keys(obj).map(function(key, i) { return [i, obj[key]]; });
  }
}

export default class GeomPolarDotDemo extends React.Component {

  render() {
    var space = {"height":250,"width":250,"margin":0,"radius":115,"originTheta":0};
    var aes = {
      "y":{
        "type"   : "angular",
        coord: {"domain":[0,12],"range":[0,360],"scale":"linear"},
        dataFn: function(d) { return d[0]; }      },
      "x":{
        "type"   : "radial",
        coord: {"domain":[0,115],"range":[0,115],"scale":"linear"},
        dataFn: function(d) { return 100; }
      },
      "size":{
        "type"   : "radial",
        coord: { domain : [0, 14], range: [0, 1] },
        dataFn: function(d) { return d[1]; }
      }      
    };
    var options  = {dotsize: 40, maxSize: 50, shape: 'circle'};
    var data     = Monthly.mapToData({ "jan": 6, "feb": 10, "mar": 12, "apr": 11, "may": 8, "jun": 4, "jul": 4, "aug": 7, "sep": 12, "oct": 13, "nov": 12, "dec": 8 });

    var geomData = Geom.prepare(data, GeomMapper, space, aes, options);

  	return <svg width="250" height="250">
      <g className="chart months" transform="translate(125,125)">
        <LayerView data={geomData} geom={Dot}/>
      </g>
    </svg>;
  }
}


