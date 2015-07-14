import React from 'react';
import d3 from 'd3';

export default class Bar extends React.Component {

    constructor() {
        super();
        this.arcFn = d3.svg.arc()
            .startAngle(function(d) { return d.startAngle || 0; })
            .endAngle(function(d) { return d.endAngle; })
            .innerRadius(function(d) { return d.innerRadius; })
            .outerRadius(function(d) { return d.outerRadius; });
    }

    render() {
        var data    = this.props;
        var idx     = this.props.idx;
        return <rect className={'geom g-' + idx} x={data.x} y={data.y} width={data.width} height={data.height} transform={data.transform}  />;
    }
}
