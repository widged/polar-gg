/* jshint esnext: true */

import React from 'react';
const {Component} = React;
import Layer from './LayerReactSvg.jsx';

export default class Plot extends Component {
  render() {
    const {width, height, children, customClass, layers} = this.props;
    const transform = 'translate(' + (width/2) + ',' + (height/2) + ')';
    const classes = 'chart' + (customClass ? ' ' + customClass : '');

            //


   return (
     <svg width={width} height={height}>
        <g className={classes} transform={transform}>
          {layers.map(({data, geom}, i) => {
            return (<Layer key={"k"+i} data={data} geom={geom} />);
          })}
        </g>
    </svg>
    );
  }

}
