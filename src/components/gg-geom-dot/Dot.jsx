import React from 'react';

export default class Dot extends React.Component {

    constructor() {
        super();
        this.defaults = {dotSize: 3, maxRadius: 3/2};
    }

    render() {
        var data    = this.props;
        var idx     = data.idx;
        var style   = data.style;
        var cx      = data.cx || 0;
        var cy      = data.cy || 0;
        var r       = data.radius || 0;
        var transform = 'rotate('+ (data.rotate) +')';

        return <circle className={'geom g-' + idx} cx={cx} cy={cy} r={r} transform={transform} style={style}  />;
    }
}
