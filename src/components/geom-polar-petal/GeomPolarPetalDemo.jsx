/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';

import LayerView  from '../layer/LayerView-react';
import Petal      from '../shape-svg-petal-react-d3/SvgPetal';
import GeomMapper from './GeomPolarPetal';
import Geom       from '../geom/Geom';

import '../../stylesheets/demo.css';
import './monthly.css';


class Monthly {
  static mapToData(obj) {
      return Object.keys(obj).map(function(key, i) { return [i, obj[key]]; });
  }
}

export default class GeomMapperPolarPetalDemo extends React.Component {

  render() {
    var space = {"height":250,"width":250,"margin":0,"radius":115,"originTheta":0};
    var aes = {
      "y":{
        "type"   : "angular",
        coord: {domain: [0, 12], range: [0, 360]},
        dataFn: function(d) { return d[0]; }      },
      "x":{
        "type"   : "radial",
        coord: { domain : [0, 14], range: [0, 1] },
        dataFn: function(d) { return d[1]; }
      }
    };
    var options  = {};
    var data     = Monthly.mapToData({ "jan": 6, "feb": 10, "mar": 12, "apr": 11, "may": 8, "jun": 4, "jul": 4, "aug": 7, "sep": 12, "oct": 13, "nov": 12, "dec": 8 });
    var geomData = Geom.prepare(data, GeomMapper, space, aes, options);

  	return <svg width="250" height="250">
      <g className="chart months" transform="translate(125,125)">
        <LayerView data={geomData} geom={Petal}/>
      </g>
    </svg>;
  }
}


