/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';

import Scale     from '../../lib/Scale';
import LayerView from '../layer/LayerView-react';
import Arc       from '../shape-svg-arc-react-d3/SvgArc';
import GeomMapper from './GeomPolarBand';
import Geom       from '../geom/Geom';

import '../../stylesheets/demo.css';


export default class GeomPolarBandDemo extends React.Component {

  

  render() {
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

    var geomData = Geom.prepare(data, GeomMapper, space, aes, options);

    return <svg width="250" height="250">
      <g class="chart-group" transform="translate(125,125)">
        <LayerView data={geomData} geom={Arc}/>
      </g>
    </svg>;
  }
}


