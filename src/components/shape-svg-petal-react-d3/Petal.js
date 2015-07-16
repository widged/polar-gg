/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';

export default class Petal extends React.Component {

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
        var d       = "M0,0L" + data.s.x + "," + data.s.y + "Q" + data.c1.x + "," + data.c1.y + " " + data.m.x + "," + data.m.y + "L" + data.m.x + "," + data.m.y + "Q" + data.c2.x + "," + data.c2.y + " " + data.e.x + "," + data.e.y + "Z";
        return <path className={'geom g-' + idx} transform={transform} d={d} style={style} />;
    }
}

