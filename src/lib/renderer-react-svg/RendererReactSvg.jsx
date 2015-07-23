/* jshint esnext: true */

import React from 'react';
import RendererSvg from '../shapes-svg/RendererSvg';

class Plot extends React.Component {
  render() {
    const {width, height, children, customClass} = this.props;
    const transform = 'translate(' + (width/2) + ',' + (height/2) + ')';
    const classes = 'chart' + (customClass ? ' ' + customClass : '');

   return <svg width={width} height={height}>
      <g className={classes} transform={transform}>
        {children}
      </g>
    </svg>
  }

}


class Layer extends React.Component {

  static augmentProps(props, i, style, options) {
    props.idx = i; 
    props.key = 'geom_' + i; 
    props.className = 'geom g-' + i;
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
      return React.createElement(type, props);
    };

    return React.createElement('g', {}, data.map(renderItem));
  }
}


class Group extends React.Component {

  static augmentProps(props, i, style, options) {
    props.idx = i; 
    props.key = 'gi_' + i; 
    props.style = style;
    props.options = options; 
    return props;
  }

  render() {
    var {data, shape, options} = this.props;
    var renderer = RendererSvg[shape];

    var renderItem = function(item, i) {
      var {type, props} = renderer(item);
      props = Group.augmentProps(props, i, item.style, options);
      return React.createElement(type, props);
    };

    return React.createElement('g', {}, data.map(renderItem));
  }
}

export default class RendererReactSvg {


}

RendererReactSvg.Plot = Plot;
RendererReactSvg.Layer = Layer;
RendererReactSvg.Group = Group;