/* jshint esnext: true */

import React from 'react';
import AngularTick from './AngularTick';
import d3 from 'd3';

export default class AngularAxis extends React.Component {

  constructor(props) {
      super();
  }

  static renderTick(space, scale) {
      var radius       = space.radius;
      var originTheta  = space.originTheta;
      return function(d, i) {
        var angle = (scale(d.value) + originTheta) % 360;
        return <AngularTick key={'k_'+ d.value} text={d.text} addClassName={d.addClassName} angle={angle} radius={radius} />;
      };
  }

  render() {
    const {ticks, space, scale} = this.props; 

	  return <g className="axis xaxis angular">
        <g className="ticks">{ ticks.map(AngularAxis.renderTick(space, scale)) }</g>
      </g>;
  }
}

/*
  } else if(orient == 'radial') {
      t= (angle < 270 && angle > 90) ? 'rotate(180 ' + rad + ' 0)' : null;
  } else if(orient == 'horizontal') {
      t= 'rotate(' + (-angle) + ' ' + rad + ' 0)';
  } 
*/