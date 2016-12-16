/* jshint esnext: true */

import React from 'react';
const {Component} = React;
import Layer from './LayerReactSvg.jsx';

export default class PlotReactSvg extends Component {
  render() {
    const {width, height, children, layers, guides} = this.props;
    const centered = 'translate(' + (width/2) + ',' + (height/2) + ')';

   return (
     <svg width={width} height={height} className='chart'>
       <g key="centered" transform={centered}>
        <g key="guides" className='guides'> {guides} </g>
        <g key="layers" className='layers'>
          {layers.map(({data, geom, customClass}, i) => {
            const classes = 'layer' + (customClass ? ' ' + customClass : '');
            return (<Layer key={"k"+i} data={data} geom={geom} className={classes} />);
          })}
        </g>
      </g>
    </svg>
    );
  }

}
