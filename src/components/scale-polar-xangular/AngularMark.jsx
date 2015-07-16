/* jshint esnext: true */

import React from 'react';

export default class AngularMark extends React.Component {

    render() {
        var {idx, value, text, isMajor, radius, angleFn, labelOffset, orientation} = this.props;

        // mark
        const transform = 'rotate(' + angleFn(value, idx) + ')';
        const [x1, x2] = [0, radius]

        // text
        if(labelOffset === undefined) { labelOffset = 6; }
        const orient      = orientation || 'angular'; // 'radial', 'angular', 'horizontal';
        const rad         = radius + (labelOffset || 0);

        var angle = angleFn(value, idx);
        var t;
        if(orient == 'angular') {
            t= 'rotate('+ ((angle <= 180 && angle > 0) ? -90 : 90) +' ' + rad + ' 0)';
        } else if(orient == 'radial') {
            t= (angle < 270 && angle > 90) ? 'rotate(180 ' + rad + ' 0)' : null;
        } else if(orient == 'horizontal') {
            t= 'rotate(' + (-angle) + ' ' + rad + ' 0)';
        } 


        return <g className="mark" transform={transform} >
            <line className={isMajor ? "guide-line major" : "guide-line minor"} x1={x1} x2={x2}></line>
            <text className={"label"} transform={t} x={rad} dy=".35em" style={{textAnchor: 'middle'}}>{text}</text>
        </g>
    }
}
