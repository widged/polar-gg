/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';
import LayerView  from '../../layer/LayerView-react';
import Shape      from '../SvgPolygon';

export default class PolygonDemo extends React.Component {

    render() {

    var areas = [
      { data: [
          {"radius": 80,"angle":0.52},
          {"radius":126,"angle":1.047},
          {"radius":188,"angle":1.57},
          {"radius":164,"angle":2.09},
          {"radius":132,"angle":2.62},
          {"radius":132,"angle":3.14},
          {"radius":156,"angle":3.67},
          {"radius":196,"angle":4.19},
          {"radius":104,"angle":4.71},
          {"radius": 96,"angle":5.26},
          {"radius": 64,"angle":5.76}
        ],
        "rotate":0,"style":{fill: "orange"}
      },
      { data: [
          {"radius": 80,"angle":0.52},
          {"radius": 96,"angle":1.08},
          {"radius": 88,"angle":1.57},
          {"radius": 64,"angle":2.09},
          {"radius": 32,"angle":2.62},
          {"radius": 32,"angle":3.14},
          {"radius": 56,"angle":3.67},
          {"radius": 96,"angle":4.19},
          {"radius":104,"angle":4.71},
          {"radius": 96,"angle":5.24},
          {"radius": 64,"angle":5.76}
        ],
        "rotate":0,"style":{fill: "green"}
      }
    ];

    return <div>
      <h2>Area</h2>
      <svg>
        <LayerView data={areas} geom={Shape}/>
      </svg>
    </div>

    }
}
