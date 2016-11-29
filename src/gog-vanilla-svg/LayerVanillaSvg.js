/* jshint esnext: true */

import Vanilla     from './Vanilla';
import RendererSvg from '../primitives-svg/PrimitivesSvg.jsx';

export default class Layer {

  static augmentProps(props, i, style, options) {
    props.idx   = i;
    props.key   = 'geom_' + i;
    props.class = 'geom g-' + i;
    props.style = style;
    props.options = options;
    return props;
  }

  render() {
    var {data, geom, options} = this.props;
    var renderer = RendererSvg[geom];

    var renderItem = function(item, i) {
      var {type, props} = renderer(item);
      props = Layer.augmentProps(props, i, item.style, options);
      return Vanilla.createElement(type, props);
    };


    return Vanilla.createElement('g', {}, data.map(renderItem));
  }
}
