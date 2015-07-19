/* jshint esnext: true */

import React from 'react';

export default class SvgPath extends React.Component {

    render() {
        var {rotate, translate, lines} = this.props;
        var transform  = 'rotate('+ (rotate || 0) +'), translate('+ (translate || "0, 0") +')';
        var d          = 'M'+ lines.join('L')+'Z';
        return <path transform={transform} d={d} />;
    }
}
