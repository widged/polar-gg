/* jshint esnext: true */

import React from 'react';
const {Component} = React;
import svgSurface from '../../surface/svg-surface/svgSurface.jsx';

var {renderGeom} = svgSurface;

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
    var renderFn = renderGeom(geom);

    var renderItem = function(item, i) {
      var {type, props} = renderFn(item);
      props = Layer.augmentProps(props, i, item.style, options);
      return React.createElement(type, props);
    };


    return React.createElement('g', {}, data.map(renderItem));
  }
}
