/* jshint esnext: true */

import React from 'react';

export default class Path extends React.Component {

    constructor() {
        super();
    }

    render() {
        var data       = this.props;
        var idx        = data.idx;
        var transform  = 'rotate('+ (data.rotate || 0) +'), translate('+ (data.translate || "0, 0") +')';
        var d          = 'M'+ data.lines.join('L')+'Z';
        var style      = data.style;
        return <path className={'geom g-' + idx} transform={transform} d={d} style={style} />;
    }
}
