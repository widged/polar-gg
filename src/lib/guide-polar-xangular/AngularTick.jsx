/* jshint esnext: true */

/* :TODO: delegate to Renderer */

import React from 'react';

export default class AngularTick extends React.Component {

    constructor(props) {
        super();
        this.defaults = { labelOffset: 6};
    }

    render() {
        const {text, angle, radius, addClassName} = this.props;
        var {labelOffset} = this.props;
        if(labelOffset === undefined || NaN(labelOffset)) { labelOffset = this.defaults.labelOffset; }

        const gTransform = 'rotate(' + angle + ')';

        // line mark
        const lineX = [0, radius];

        // text
        const radiusOffset  = radius + labelOffset;
        var textTransform   = 'rotate('+ ((angle <= 180 && angle > 0) ? -90 : 90) +' ' + radiusOffset + ' 0)';

        return <g className={addClassName ? "tick " + addClassName : "tick"} transform={gTransform} >
            <line className={"guide"} x1={lineX[0]} x2={lineX[1]}></line>
            <g transform={textTransform} >    
                <text className="label"  x={radiusOffset} dy=".35em">{text}</text>
            </g>
        </g>
    }
}
