/* jshint esnext: true */

import React from 'react';

export default class RadialMark extends React.Component {

    render() {
        var {text, r, axisTheta, addClassName} = this.props;
        var rotate = 'rotate('+ (axisTheta) +')';
        var transform = 'translate('+ r + ',' + 0 +')';

        return <g className={addClassName ? "tick " + addClassName : "tick"}>
            <circle className="guide" r={r}></circle>
            <g transform={transform} >    
                <text className="label" y="12" dy=".71em" rotate={rotate} style={{textAnchor: 'middle'}}>{text}</text>
                <line className="mark" y2="6" x2="0"></line>
            </g>
         </g>
    }
}
