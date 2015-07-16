/* jshint esnext: true */

import React from 'react';
import PlotView from './PlotSvg.jsx';
import Layer from './Layer.jsx';

import '../../stylesheets/demo.css';

export default class PlotDemo extends React.Component {
  render() {
	  return <demo>
	    <PlotView>
			<Layer geom="point"/>
			<Layer geom="line"/>
			<Layer/>
	    </PlotView>
		</demo>;

  }
}
