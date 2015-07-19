/* jshint esnext: true */

import React from 'react';

export default class SvgDot extends React.Component {

    render() {
        var {cx, cy, r, rotate} = this.props;
        return React.createElement(
            'circle', 
            { 
                cx : cx, 
                cy : cy, 
                r : r,
                transform: 'rotate('+ (rotate || 0) +')' 
            }
        );
    }
    
}

