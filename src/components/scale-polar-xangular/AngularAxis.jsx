/* jshint esnext: true */

import React from 'react';
import AngularMark from './AngularMark';
import d3 from 'd3';

export default class AngularAxis extends React.Component {


    constructor(props) {
        super();

    }

    static renderTick(angleFn, radius) {
        return function(d, i) {
            return <AngularMark key={'k_'+ d.value} idx={i} text={d.text} value={d.value} isMajor={d.isMajor} angleFn={angleFn} radius={radius} />;
        }
    }


    render() {

       const {ticks, angleFn, radius} = this.props; 
        
	  return <g className="axis xaxis angular">
        <g className="marks">{ ticks.map(AngularAxis.renderTick(angleFn, radius)) }</g>
      </g>;

  }
}
