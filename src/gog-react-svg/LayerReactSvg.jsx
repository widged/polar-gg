/* jshint esnext: true */

import React from 'react';
const {Component} = React;
import RendererSvg from '../primitives-svg/PrimitivesSvg.jsx';

export default class Layer extends Component {

  static augmentProps(props, i, style, options) {
    props.key = 'geom_' + i;
    props.className = 'geom g-' + i;
    props.style = style;
    // props.idx = i;
    // props.options = options;
    return props;
  }

  render() {
    var {data, geom, options} = this.props;

    var renderItem = function(item, i) {
      var {type, props} = RendererSvg.render(geom, item);
      props = Layer.augmentProps(props, i, item.style, options);
      return React.createElement(type, props);
    };

    return React.createElement('g', {}, data.map(renderItem));
  }
}
