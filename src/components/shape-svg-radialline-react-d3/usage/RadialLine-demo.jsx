/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';
import LayerView  from '../../layer/LayerView-react';
import Shape      from '../SvgRadialLine';

export default class RadialLineDemo extends React.Component {

    render() {

    var radialLines = [
      {data: [
        {"radius": 47,"angle":2.0},
        {"radius": 57,"angle":2.1},
        {"radius": 68,"angle":2.2},
        {"radius": 77,"angle":2.3},
        {"radius": 85,"angle":2.4},
        {"radius": 93,"angle":2.5},
        {"radius":100,"angle":2.6},
        {"radius":105,"angle":2.7},
        {"radius":109,"angle":2.8},
        {"radius":112,"angle":2.9}
      ],"style":{stroke: "blue", fill: "transparent"}}
    ];

    return <div>
      <h2>Radial Line</h2>
      <svg>
        <LayerView data={radialLines} geom={Shape}/>
      </svg>
    </div>

    }
}
