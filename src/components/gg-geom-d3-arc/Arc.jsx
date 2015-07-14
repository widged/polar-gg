import React from 'react';
import d3 from 'd3';

export default class Arc extends React.Component {

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
        var idx     = data.idx;
        var style   = data.style;
        var rotate  = data.rotate;
        var d       = this.arcFn(data);
        return <path className={'geom g-' + idx} transform={'rotate('+ rotate +')'} d={d} style={style} />;
    }
}
