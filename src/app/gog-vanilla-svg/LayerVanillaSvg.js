/* jshint esnext: true */

import Vanilla     from './Vanilla';
import svgSurface from '../../surface/svg-surface/svgSurface.jsx';

var {renderGeom} = svgSurface;

export default class Layer {

  static augmentProps(props, i, style, options) {
    props.key   = 'geom_' + i;
    props.class = 'geom g-' + i;
    props.style = style;
    // props.idx   = i;
    // props.options = options;
    return props;
  }

  render() {
    var {data, geom, options} = this.props;
    var renderFn = renderGeom(geom);

    var renderItem = function(item, i) {
      var {type, props} = renderFn(item);
      props = Layer.augmentProps(props, i, item.style, options);
      return Vanilla.createElement(type, props);
    };

    return Vanilla.createElement('g', {}, data.map(renderItem));
  }
}
