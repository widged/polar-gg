/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';

export default class SvgArc extends React.Component {

    render() {
        const {startAngle, endAngle, innerRadius, outerRadius, rotate} = this.props;
        var transform  = 'rotate('+ (rotate || 0) +')';
        var d          = SvgArc.arcFn({startAngle: startAngle, endAngle: endAngle, innerRadius: innerRadius, outerRadius: outerRadius});

        return <path transform={transform} d={d} />;
    }
}

SvgArc.arcFn = d3.svg.arc()
    .startAngle(function(d)  { return d.startAngle || 0; })
    .endAngle(function(d)    { return d.endAngle; })
    .innerRadius(function(d) { return d.innerRadius || 0; })
    .outerRadius(function(d) { return d.outerRadius; });


