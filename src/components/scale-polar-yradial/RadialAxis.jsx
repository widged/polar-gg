/* jshint esnext: true */

import React from 'react';
import RadialMark from './RadialMark';
import d3 from 'd3';

export default class AngularAxis extends React.Component {

    static renderTick(scaleFn, axisTheta) {
        return function(d, i) {
            return <RadialMark key={'k_'+ d.value} idx={i} text={d.text} value={d.value} scaleFn={scaleFn} axisTheta={axisTheta} />;
        }
    }

    render() {

       const {ticks, scaleFn, radius, axisTheta} = this.props; 
       var lastTick = ticks[ticks.length-1];
        
      return <g className="axis yaxis radial">
        <line x={0} x2={scaleFn(lastTick.value)}></line>
        <g className="marks">{ ticks.map(AngularAxis.renderTick(scaleFn, axisTheta)) }</g>
      </g>;

  }
}
