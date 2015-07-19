/* jshint esnext: true */

import React from 'react';

export default class SvgRect extends React.Component {

    render() {
        const {x, y, width, height, transform} = this.props;
        return <rect x={x} y={y} width={width} height={height} transform={transform}  />;
    }
}
