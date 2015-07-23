/* jshint esnext: true */

import VanillaSvg    from '../RendererVanillaSvg';
import HtmlTransform from '../HtmlTransform';
const Group = VanillaSvg.Group;

export default class RectDemo {

    render() {

      var bars = [
          {"x":20.83,"y":72.14,"width":19,"height":177.86,"style":{fill: "green"}},
          {"x":41.67,"y":36.57,"width":19,"height":213.43,"style":{fill: "red"}},
          {"x":62.50,"y":54.36,"width":19,"height":195.64,"style":{fill: "orange"}},
          {"x":83.33,"y":107.71,"width":19,"height":142.29,"style":{fill: "blue"}}
      ];

      var group = VanillaSvg.createElement(Group, {data: bars, shape: 'rect'});
      return HtmlTransform.exec(`<div>
        <h2>Bar</h2>
        <svg width="250" height="250">
          ${group.outerHTML}
        </svg>
      </div>`);

    }
}
