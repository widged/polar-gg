/* jshint esnext: true */

import React from 'react';

export default class SvgDotSquare extends React.Component {
    render() {
        const {cx, cy, r, rotate} = this.props;
        var size = r * 2;
        return React.createElement(
            'rect', 
            {
                x : cx - r,
                y : cy - r,
                width : size, height : size,
                transform: 'rotate('+ (rotate || 0) +')'
            }
        );
    }
}

