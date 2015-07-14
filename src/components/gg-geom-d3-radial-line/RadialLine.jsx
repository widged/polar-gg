import React from 'react';
import d3 from 'd3';

export default class RadialLine extends React.Component {

    constructor() {
        super();
        this.radialFn = d3.svg.line.radial()
                            .radius(function(d) { return d.radius; })
                            .angle(function(d) { return d.angle; });
    }

    render() {
        var data       = this.props;
        var idx        = data.idx;
        var style      = data.style;
        var transform  = (!data.length || !data.hasOwnProperty(i)) ? '' : 'rotate('+( data.rotate)+')';
        var d          = this.radialFn(data.data);
        return <path className={'geom g-' + idx} transform={transform} d={d} style={style} />;
    }
}
