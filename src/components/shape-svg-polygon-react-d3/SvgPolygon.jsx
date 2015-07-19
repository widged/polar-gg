/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';

export default class SvgArea extends React.Component {

    constructor() {
        super();
        this.radialFn = d3.svg.line.radial()
                            .radius(function(d) { return d.radius; })
                            .angle(function(d) { return d.angle; });
    }

    render() {
        var {rotate, data} = this.props;
        var transform  = 'rotate('+ (rotate || 0) +')';
        var d       = this.radialFn(data);
        return <path transform={transform} d={d} />;
    }
}


