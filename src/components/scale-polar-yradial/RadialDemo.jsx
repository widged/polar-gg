/* jshint esnext: true */

import React from 'react';
import RadialAxis from './RadialAxis';
import listTicks from '../scale/Ticks';

import '../../stylesheets/demo.css';
import '../scale-polar-xangular/axis.css';


export default class RadialDemo extends React.Component {
	
	render() {
		var tickConfig   = {"showCircle":true,"axisTheta":0, majorSuffix: '', majorQty: 4};
		var space        = {"height":250,"width":250,"margin":0,"radius":115,"originTheta":0};
		var coord        = {domain : [0, 5], range: [0, space.radius], scale: 'linear'};
		var scale        = d3.scale.linear().domain(coord.domain).range(coord.range);
		var axisTheta    = tickConfig.axisTheta;

		var ticks = scale.ticks(tickConfig.majorQty).map(function(d, i) {
			return {text: d, value: d}
		});

		return <svg width="250" height="250">
			<g class="chart-group" transform="translate(125,125)">
				<RadialAxis ticks={ticks} scaleFn={scale} axisTheta={axisTheta} />
            </g>
	  	</svg>;

  }
}

/*
            if(ticks.showCircle) {
                renderMarks(axisNode, scale, majorQty);
                renderLabels(axisNode, scale, axisTheta, majorQty, majorSuffix);
            }
	 */