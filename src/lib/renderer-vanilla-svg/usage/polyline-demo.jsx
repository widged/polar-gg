/* jshint esnext: true */

import VanillaSvg    from '../RendererVanillaSvg';
import HtmlTransform from '../HtmlTransform';
const Group = VanillaSvg.Group;

export default class PolylineDemo {

  render() {

    var paths = [
      {"rotate":30,"translate":"74.28571428571428, 0","lines":[[0,0],[-54.285714285714285,10],[-54.285714285714285,-10]],"style":{fill: "red"}},
      {"rotate":0,"translate":"94.64285714285714, 0","lines":[[0,0],[-74.64285714285714,10],[-74.64285714285714,-10]],"style":{fill: "blue"}},
      {"rotate":60,"translate":"47.14285714285714, 0","lines":[[0,0],[-27.142857142857142,10],[-27.142857142857142,-10]],"style":{fill: "orange"}},
      {"rotate":90,"translate":"47.14285714285714, 0","lines":[[0,0],[-27.142857142857142,10],[-27.142857142857142,-10]],"style":{fill: "green"}}
    ];

    var group = VanillaSvg.createElement(Group, {data: paths, shape: 'polyline'});
    return HtmlTransform.exec(`<div>
      <h2>Polyline</h2>
      <svg>
        ${group.outerHTML}
      </svg>
    </div>`);

  }
}
