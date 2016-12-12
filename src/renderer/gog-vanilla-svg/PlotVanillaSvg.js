/* jshint esnext: true */

import Vanilla     from './Vanilla';
import renderGeom from '../../surface/svg-surface/svgSurface.jsx';
import Layer from './LayerVanillaSvg';

export default class Plot {
  render() {
    var {width, height, layers, customClass} = this.props;
    if(!width) { width = 250; }
    if(!height) { height = 250; }
    const transform = 'translate(' + (width/2) + ',' + (height/2) + ')';
    const classes = 'layers' + (customClass ? ' ' + customClass : '');

    var el = Vanilla.htmlize(`<svg width=${width} height=${height}>
      <g class="${classes}" transform="${transform}"></g>
    </svg>`);

    var elLayers = el.querySelector('g.layers');
    layers.forEach(function(data) {
      var node = Vanilla.createElement(Layer, data);
      elLayers.appendChild(node);
    });

    return el;
  }
}
