/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';

export default class SvgPetal extends React.Component {

    render() {
        var {rotate, s, e, c1, c2, m} = this.props;
        var transform  = 'rotate('+ (rotate || 0) +')';
        var d       = "M0,0L" + s.x + "," + s.y + "Q" + c1.x + "," + c1.y + " " + m.x + "," + m.y + "L" + m.x + "," + m.y + "Q" + c2.x + "," + c2.y + " " + e.x + "," + e.y + "Z";
        return <path transform={transform} d={d} />;
    }
}

