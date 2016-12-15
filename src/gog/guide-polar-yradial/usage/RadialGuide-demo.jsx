/* jshint esnext: true */

import React from 'react';

import Scale      from '../../scale/Scale';
import listTicks  from '../../guide-axis/Ticks';
import RadialAxis from '../RadialAxis.jsx';

export default class RadialDemo extends React.Component {

	render() {
		var space        = { height:250, width:250, margin:0, radius:115, originTheta:0};
		var coord        = { domain : [0, 5], range: [0, space.radius], scale: 'linear'};
		var scale = Scale.fromCoord(coord);

		var ticks = listTicks({"showCircle":true, majorSuffix: '', majorQty: 6});

		return <svg width="250" height="250">
			<g className="chart" transform="translate(125,125)">
				<RadialAxis ticks={ticks} scale={scale} space={space} />
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
