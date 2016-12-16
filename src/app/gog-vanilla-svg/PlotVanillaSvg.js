/* jshint esnext: true */

import Vanilla     from './Vanilla';
import Layer from './LayerVanillaSvg';

export default class PlotVanillaSvg {
  render() {
    var {width, height, layers, guides} = this.props;
    if(width  === undefined)  { width = 250;  }
    if(height === undefined) { height = 250; }
    const transform = 'translate(' + (width/2) + ',' + (height/2) + ')';

    var el = Vanilla.htmlize(`<svg width=${width} height=${height} class="chart">

      <g class="layers" transform="${transform}">
        <g class="guides"></g>
      </g>
    </svg>`);

    var elGuides = el.querySelector('g.guides');
    (guides || []).forEach((guide) => {
      elGuides.appendChild(guide);
    });
    var elLayers = el.querySelector('g.layers');
    layers.forEach(function(data) {
      var node = Vanilla.createElement(Layer, data);
      elLayers.appendChild(node);
    });

    return el;
  }
}
