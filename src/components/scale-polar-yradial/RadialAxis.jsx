/* jshint esnext: true */

import React from 'react';
import listTicks from '../scale-polar-xangular/Ticks';
import RadialMark from './RadialMark';
import d3 from 'd3';

export default class AngularAxis extends React.Component {


    constructor(props) {
        super();
        var ticks = listTicks({"perimeter":14,"minorQty":1,"majorQty":7});
        /* expected ticks 
        {
            [{"text":"0","value":0,"isMajor":true},{"text":"","value":1},{"text":"2","value":2,"isMajor":true},{"text":"","value":3},{"text":"4","value":4,"isMajor":true},{"text":"","value":5},{"text":"6","value":6,"isMajor":true},{"text":"","value":7},{"text":"8","value":8,"isMajor":true},{"text":"","value":9},{"text":"10","value":10,"isMajor":true},{"text":"","value":11},{"text":"12","value":12,"isMajor":true},{"text":"","value":13}]
        }
        */

    }

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
