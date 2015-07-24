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

/*
  constructor(props) {
    super();
    var plot = this.plot = new Plot();
        plot.use(props.type);
      props.children.map(function(layer, i) {
        plot.addLayer(layer.props);
      });
  }

    render() {
        var plotData = this.plot.finalize({
            data: [],
            width: 120,
            height: 30,
            margin: 2   
        });

    return <plot>
      <svg>
        <g className="chart">
          <circle className="background-circle"></circle>
          <g class="guides">
            <g class="angular axis"></g>
            <g class="radial axis"></g>
          </g>
          <g className="layers">
            <g class="geometry"></g>
          </g>
        </g>
      </svg>
    </plot>
*/    


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



export default class ReactSvg {


}

ReactSvg.Plot = Plot;
ReactSvg.Layer = Layer;
