/* jshint esnext: true */

import React from 'react';

import Scale       from '../../scale/Scale';
import listTicks   from '../../guide-axis/Ticks';
import AngularAxis from '../AngularAxis.jsx';

export default class AngularDemo extends React.Component {

	render() {
		var space  = {height: 250, width: 250, margin: 0, radius: 115, originTheta: 0};
		var coord  = {domain : [0,14], range: [0, 360], scale: 'linear'};

		var scale  = Scale.fromCoord(coord);
		var ticks  = listTicks({"perimeter":14,"minorQty":1,"majorQty":7});

		return <svg width="250" height="250">
			<g className="chart-group" transform="translate(125,125)">
				<AngularAxis ticks={ticks} space={space} scale={scale} />
            </g>
	  	</svg>;
  }
}
