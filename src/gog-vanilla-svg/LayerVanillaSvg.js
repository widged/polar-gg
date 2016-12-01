/* jshint esnext: true */

import Vanilla     from './Vanilla';
import RendererSvg from '../primitives-svg/PrimitivesSvg.jsx';

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

    var renderItem = function(item, i) {
      var {type, props} = RendererSvg.render(geom, item);
      props = Layer.augmentProps(props, i, item.style, options);
      return Vanilla.createElement(type, props);
    };

    return Vanilla.createElement('g', {}, data.map(renderItem));
  }
}
