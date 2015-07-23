/* jshint esnext: true */

import VanillaSvg    from '../RendererVanillaSvg';
import HtmlTransform from '../HtmlTransform';
const Group = VanillaSvg.Group;

export default class RadialLineDemo {

  render() {

    var radialLines = [
      {radiallines: [
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

    var areas = [
      { radiallines: [
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
      { radiallines: [
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

    var group1 = VanillaSvg.createElement(Group, {data: areas, shape: 'polylineradial'});
    var group2 = VanillaSvg.createElement(Group, {data: radialLines, shape: 'polylineradial'});
    return HtmlTransform.exec(`<div>
      <h2>Polyline</h2>
      <svg width="250" height="250">
        ${group1.outerHTML}
        ${group2.outerHTML}
      </svg>
    </div>`);
  }
}
