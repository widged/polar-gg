/* jshint esnext: true */

import React from 'react';

export default class SvgRect extends React.Component {

    render() {
        const {x, y, width, height, rotate, translate} = this.props;
        var transform = 'rotate('+ (rotate || 0) +')';
        return <rect x={x} y={y} width={width} height={height} transform={transform}  />;
    }
}
