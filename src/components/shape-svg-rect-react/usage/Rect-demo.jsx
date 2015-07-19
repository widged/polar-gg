/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';
import LayerView  from '../../layer/LayerView-react';
import Shape      from '../SvgRect';

export default class RectDemo extends React.Component {

    render() {

    var bars = [
        {"x":20.833333333333332,"y":72.14285714285714,"width":19,"height":177.85714285714286,"style":{fill: "green"}},
        {"x":41.666666666666664,"y":36.57142857142857,"width":19,"height":213.42857142857144,"style":{fill: "red"}},
        {"x":62.5,"y":54.357142857142854,"width":19,"height":195.64285714285714,"style":{fill: "orange"}},
        {"x":83.33333333333333,"y":107.71428571428571,"width":19,"height":142.28571428571428,"style":{fill: "blue"}}
    ];

    return <div>
      <h2>Bar</h2>
      <svg>
        <LayerView data={bars} geom={Shape}/>
      </svg>
    </div>


    }
}
