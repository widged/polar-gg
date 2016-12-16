/* jshint esnext: true */

import React from 'react';
const {Component} = React;
import Layer from './LayerReactSvg.jsx';

export default class PlotReactSvg extends Component {
  render() {
    const {width, height, children, layers, guides} = this.props;
    const center = 'translate(' + (width/2) + ',' + (height/2) + ')';

   return (
     <svg width={width} height={height} className='chart'>
      <g transform={center} className='layers'>
        <g className='guides'> {guides} </g>
        {layers.map(({data, geom, customClass}, i) => {
          const classes = 'layer' + (customClass ? ' ' + customClass : '');
          return (<Layer key={"k"+i} data={data} geom={geom} className={classes} />);
        })}
      </g>
    </svg>
    );
  }

}
