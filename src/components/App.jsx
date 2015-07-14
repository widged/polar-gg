import React from 'react';
import Arc from './gg-geom-d3-arc/Arc';
import Bar from './gg-geom-d3-bar/Bar';

export default class App extends React.Component {
  render() {
  	var arcs = [
  	{"startAngle":0.9395417281763866,"endAngle":1.6441980243086765,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "green"}},
  	{"startAngle":1.6441980243086765,"endAngle":2.2901329624299422,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{}}/*,
  	{"startAngle":2.2901329624299422,"endAngle":2.7599038265181353,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{}},
  	{"startAngle":2.7599038265181353,"endAngle":2.9947892585622315,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{}},
  	{"startAngle":2.9947892585622315,"endAngle":3.2296746906063287,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{}},
  	{"startAngle":3.2296746906063287,"endAngle":3.6407241966834976,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{}},
  	{"startAngle":3.6407241966834976,"endAngle":4.345380492815788,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{}},
  	{"startAngle":4.345380492815788,"endAngle":5.108758146959102,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{}},
  	{"startAngle":5.108758146959102,"endAngle":5.813414443091392,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{}},
  	{"startAngle":5.813414443091392,"endAngle":6.283185307179585,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{}} */
  ];


    var bars = [
  		{"x":0,"y":143.28571428571428,"width":19,"height":106.71428571428572,"style":{}},
  		{"x":20.833333333333332,"y":72.14285714285714,"width":19,"height":177.85714285714286,"style":{}},
  		{"x":41.666666666666664,"y":36.57142857142857,"width":19,"height":213.42857142857144,"style":{}},
  		{"x":62.5,"y":54.357142857142854,"width":19,"height":195.64285714285714,"style":{}},
  		{"x":83.33333333333333,"y":107.71428571428571,"width":19,"height":142.28571428571428,"style":{}},
  		{"x":104.16666666666666,"y":178.85714285714283,"width":19,"height":71.14285714285717,"style":{}},
  		{"x":125,"y":178.85714285714283,"width":19,"height":71.14285714285717,"style":{}},
  		{"x":145.83333333333331,"y":125.5,"width":19,"height":124.5,"style":{}},
  		{"x":166.66666666666666,"y":36.57142857142857,"width":19,"height":213.42857142857144,"style":{}},
  		{"x":187.5,"y":18.785714285714285,"width":19,"height":231.21428571428572,"style":{}},
  		{"x":208.33333333333331,"y":36.57142857142857,"width":19,"height":213.42857142857144,"style":{}},
  		{"x":229.16666666666666,"y":107.71428571428571,"width":19,"height":142.28571428571428,"style":{}}
  	];

    var geoms_arcs   = arcs.map(function(item, i) {
        return <Arc key={'arc_' + i} idx={i} startAngle={item.startAngle} endAngle={item.endAngle} innerRadius={item.innerRadius} outerRadius={item.outerRadius} rotate={item.rotate} style={item.style} />;
    });

    var geoms_bars   = bars.map(function(item, i) {
        return <Bar key={'rect_' + i} idx={i} x={item.x} y={item.y} width={item.width} height={item.height} style={item.style}  />;
    });


    return <svg>
    		<g>{geoms_arcs}</g>
    		<g>{geoms_bars}</g>
    		</svg>

  }
}
