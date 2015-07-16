/* jshint esnext: true */

import React from 'react';

export default class RadialMark extends React.Component {

    render() {
        var {idx, value, text, scaleFn, axisTheta} = this.props;

        var r = scaleFn(value);

        /*
            var axis = d3.svg.axis().scale(scale).ticks(majorQty);
            axisNode.call(axis).attr({transform: 'rotate('+ (axisTheta) +')'});
            axisNode.selectAll('.domain').style({fill: 'none', stroke: 'black'});
            axisNode.selectAll('.tick.major text').text(function(d, i){ return this.textContent + ticksSuffix; });
        */

        var rotate = 'rotate('+ (axisTheta) +')';
        var transform = 'translate('+ r + ',' + 0 +')';

        console.log(transform)

        return <g>
            <circle className="guide-line" r={r}></circle>
            <g className="mark" transform={transform} >    
                <text className={"label"} y="12" dy=".71em" rotate={rotate} style={{textAnchor: 'middle'}}>{text}</text>
                <line y2="6" x2="0"></line>
            </g>
         </g>
    }
}

/*

        function renderMarks(axisNode, scale, majorQty) {
            var gridCircles = axisNode.selectAll('circle.grid-circle')
                .data(scale.ticks(majorQty));
            var gridCirclesEnter = gridCircles.enter().append('circle').attr({'class': 'grid-circle'});

            gridCircles.attr('r', scale);
            gridCircles.exit().remove();
        }

        function renderLabels(axisNode, scale, axisTheta, majorQty, ticksSuffix) {
            var axis = d3.svg.axis().scale(scale).ticks(majorQty);
            axisNode.call(axis).attr({transform: 'rotate('+ (axisTheta) +')'});
            axisNode.selectAll('.domain').style({fill: 'none', stroke: 'black'});
            axisNode.selectAll('.tick.major text').text(function(d, i){ return this.textContent + ticksSuffix; });
        }

*/
