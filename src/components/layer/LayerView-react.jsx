/* jshint esnext: true */

import React from 'react';

export default class Layer extends React.Component {
	render() {
	  var {data, geom, options} = this.props;

	  var renderer = function(item, i) {
	    item.idx = i; 
	    item.key = 'geom_' + i; 
	    item.options = options; 
	    return React.createElement("g", {className: 'geom g-' + i, style: item.style},
	    	React.createElement(geom, item)
	    );
	  };

	  return React.createElement('g', {}, data.map(renderer));
	}
}
