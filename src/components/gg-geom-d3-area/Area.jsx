
import React from 'react';
import d3 from 'd3';

export default class Area extends React.Component {

    constructor() {
        super();
        this.radialFn = d3.svg.line.radial()
                            .radius(function(d) { return d.radius; })
                            .angle(function(d) { return d.angle; });
    }

    render() {
        var data    = this.props; // {"radius":79.99999999999999,"angle":0.5235987755982988,"rotate":0,"style":{}}
        var idx     = data.idx;
        var style   = data.style;
        var transform  = 'rotate('+ (data.rotate || 0) +')';
        var d       = this.radialFn(data.data);
        return <path className={'geom g-' + idx} transform={transform} d={d} style={style} />;
    }
}


