/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';

import RadialTick from './RadialTick';

export default class AngularAxis extends React.Component {

    static renderTick(space, scaleFn) {
     var axisTheta = space.originTheta;
      return function(d, i) {
          var r = scaleFn(d.value, i);
          return <RadialTick key={'k_'+ d.value} r={r} text={d.text} addClassName={d.addClassName} axisTheta={axisTheta} />;
      }
    }

    render() {
       const {ticks, scale, space} = this.props; 
       var lastTick  = ticks[ticks.length-1];
      return <g className="axis yaxis radial">
        <line className="mark" x={0} x2={scale(lastTick.value)}></line>
        <g className="ticks">{ ticks.map(AngularAxis.renderTick(space, scale)) }</g>
      </g>;

  }
}
