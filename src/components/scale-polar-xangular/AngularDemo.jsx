/* jshint esnext: true */

import React from 'react';
import listTicks from '../scale/Ticks';
import AngularAxis from './AngularAxis';

import '../../stylesheets/demo.css';
import './axis.css';


export default class AngularDemo extends React.Component {
	static angleFn(scale, originTheta) {
	    return function(d, i){
	        return (scale(d) + originTheta) % 360;
	    };
	};

	render() {
		var ticks = listTicks({"perimeter":14,"minorQty":1,"majorQty":7});
		// var ticks        = [{"text":"0","value":0,"isMajor":true},{"text":"","value":1},{"text":"2","value":2,"isMajor":true},{"text":"","value":3},{"text":"4","value":4,"isMajor":true},{"text":"","value":5},{"text":"6","value":6,"isMajor":true},{"text":"","value":7},{"text":"8","value":8,"isMajor":true},{"text":"","value":9},{"text":"10","value":10,"isMajor":true},{"text":"","value":11},{"text":"12","value":12,"isMajor":true},{"text":"","value":13}];
		var space        = {height: 250, width: 250, margin: 0, radius: 115, originTheta: 0};
		var coord        = {domain : [0,14], range: [0, 360], scale: 'linear'};
		var radius       = space.radius;
		var originTheta  = space.originTheta;
		var scale = d3.scale.linear().domain(coord.domain).range(coord.range);
		var angleFn = AngularDemo.angleFn(scale, originTheta);

		return <svg width="250" height="250">
			<g class="chart-group" transform="translate(125,125)">
				<AngularAxis ticks={ticks} angleFn={angleFn} radius={radius} />
            </g>
	  	</svg>;

  }
}
