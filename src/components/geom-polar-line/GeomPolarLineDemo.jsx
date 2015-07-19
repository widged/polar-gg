/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';

import Scale from '../../lib/Scale';
import LayerView from '../layer/LayerView-react';
import Shape      from '../shape-svg-polylineradial-react-d3/SvgPolylineRadial';
import GeomMapper from './GeomPolarLine';
import Geom       from '../geom/Geom';

import '../../stylesheets/demo.css';


export default class GeomPolarLineDemo extends React.Component {

  render() {
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
    var geomData = Geom.prepare(data, GeomMapper, space, aes, options);
    var gpData = [{data: geomData, style: {fill: 'none', stroke: 'blue'}}];

  	return <svg width="250" height="250">
      <g class="chart-group" transform="translate(125,125)">
        <LayerView data={gpData} geom={Shape}/>
      </g>
    </svg>;
  }
}


