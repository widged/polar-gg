/* jshint esnext: true */

import React from 'react';
import Arc        from '../shape-svg-arc-react-d3/Arc';
import Bar        from '../shape-svg-bar-react/Bar';
import Dot        from '../shape-svg-dot-react/Dot';
import Path       from '../shape-svg-path-react/Path';
import Polygon    from '../shape-svg-polygon-react-d3/Polygon';
import RadialLine from '../shape-svg-radialline-react-d3/RadialLine';
import Petal      from '../shape-svg-petal-react-d3/Petal';

import '../../stylesheets/demo.css';

export default class ShapeDemo extends React.Component {
  render() {

  	var arcs = [
    	{"startAngle":0.9395417281763866,"endAngle":1.6441980243086765,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "green"}},
    	{"startAngle":1.6441980243086765,"endAngle":2.2901329624299422,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "red"}},
    	{"startAngle":2.2901329624299422,"endAngle":2.7599038265181353,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "orange"}},
    	{"startAngle":2.7599038265181353,"endAngle":2.9947892585622315,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "yellow"}},
    	{"startAngle":2.9947892585622315,"endAngle":3.2296746906063287,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "blue"}}
    ];

    var bars = [
  		{"x":20.833333333333332,"y":72.14285714285714,"width":19,"height":177.85714285714286,"style":{fill: "green"}},
  		{"x":41.666666666666664,"y":36.57142857142857,"width":19,"height":213.42857142857144,"style":{fill: "red"}},
  		{"x":62.5,"y":54.357142857142854,"width":19,"height":195.64285714285714,"style":{fill: "orange"}},
  		{"x":83.33333333333333,"y":107.71428571428571,"width":19,"height":142.28571428571428,"style":{fill: "blue"}}
  	];

    var dots = [
      {"rotate":0,"radius":6.428571428571428,"cx":60,"cy":60,"style":{fill: "green"}},
      {"rotate":0,"radius":10.714285714285714,"cx":90,"cy":60,"style":{fill: "red"}},
      {"rotate":0,"radius":12.857142857142856,"cx":30,"cy":90,"style":{fill: "orange"}},
      {"rotate":0,"radius":11.785714285714285,"cx":60,"cy":90,"style":{fill: "blue"}},
      {"rotate":0,"radius":8.571428571428571,"cx":90,"cy":90,"style":{}},
      {"rotate":0,"radius":4.285714285714286,"cx":30,"cy":120,"style":{}},
      {"rotate":0,"radius":4.285714285714286,"cx":60,"cy":120,"style":{}},
      {"rotate":0,"radius":7.5,"cx":90,"cy":120,"style":{}},
      {"rotate":0,"radius":12.857142857142856,"cx":30,"cy":30,"style":{}},
      {"rotate":0,"radius":13.928571428571427,"cx":60,"cy":30,"style":{}},
      {"rotate":0,"radius":12.857142857142856,"cx":90,"cy":30,"style":{}},
      {"rotate":0,"radius":8.571428571428571,"cx":30,"cy":60,"style":{}}
    ];

    var paths = [
      {"rotate":30,"translate":"74.28571428571428, 0","lines":[[0,0],[-54.285714285714285,10],[-54.285714285714285,-10]],"style":{fill: "red"}},
      {"rotate":0,"translate":"94.64285714285714, 0","lines":[[0,0],[-74.64285714285714,10],[-74.64285714285714,-10]],"style":{fill: "blue"}},
      {"rotate":60,"translate":"47.14285714285714, 0","lines":[[0,0],[-27.142857142857142,10],[-27.142857142857142,-10]],"style":{fill: "orange"}},
      {"rotate":90,"translate":"47.14285714285714, 0","lines":[[0,0],[-27.142857142857142,10],[-27.142857142857142,-10]],"style":{fill: "green"}}
    ];

    var areas = [
      { data: [{"radius":79.99999999999999,"angle":0.5235987755982988,"rotate":0},
          {"radius":126,"angle":1.0471975511965976},
          {"radius":188,"angle":1.5707963267948966},
          {"radius":164,"angle":2.0943951023931953},
          {"radius":132,"angle":2.6179938779914944},
          {"radius":132,"angle":3.141592653589793},
          {"radius":156,"angle":3.6651914291880914},
          {"radius":196,"angle":4.1887902047863905},
          {"radius":103.99999999999999,"angle":4.71238898038469},
          {"radius":96,"angle":5.235987755982989},
          {"radius":64,"angle":5.759586531581287}],"rotate":0,"style":{fill: "orange"}},
      { data: [{"radius":79.99999999999999,"angle":0.5235987755982988,"rotate":0},
          {"radius":96,"angle":1.0471975511965976},
          {"radius":88,"angle":1.5707963267948966},
          {"radius":64,"angle":2.0943951023931953},
          {"radius":32,"angle":2.6179938779914944},
          {"radius":32,"angle":3.141592653589793},
          {"radius":56,"angle":3.6651914291880914},
          {"radius":96,"angle":4.1887902047863905},
          {"radius":103.99999999999999,"angle":4.71238898038469},
          {"radius":96,"angle":5.235987755982989},
          {"radius":64,"angle":5.759586531581287}],"rotate":0,"style":{fill: "green"}}
    ];

    var radialLines = [
      {data: [
        {"radius":46.77471395371701,"angle":1.9896753472735356},
        {"radius":57.49999999999997,"angle":2.0943951023931957},
        {"radius":67.5953040136344,"angle":2.199114857512855},
        {"radius":76.9500197312687,"angle":2.303834612632515},
        {"radius":85.4616549299003,"angle":2.4085543677521746},
        {"radius":93.03695435311896,"angle":2.5132741228718345},
        {"radius":99.59292143521046,"angle":2.6179938779914944},
        {"radius":105.05772762889909,"angle":2.722713633111154},
        {"radius":109.37149937394265,"angle":2.827433388230814},
        {"radius":112.48697408438765,"angle":2.9321531433504737}
      ],"style":{stroke: "blue", fill: "transparent"}}
    ];

    var petals = [
      {"rotate":-15.98130841121494,"s":{"x":53.967881425250745,"y":-19.842322809340537},"c1":{"x":84.11732786846085,"y":-19.842322809340537},"m":{"x":110.73465573692171,"y":0},"c2":{"x":84.11732786846085,"y":19.842322809340537},"e":{"x":53.96788142525074,"y":19.842322809340537},"style":{fill: "green"}},
      {"rotate":22.710280373831807,"s":{"x":54.52712197603583,"y":-18.249464896552738},"c1":{"x":82.98415123730265,"y":-18.249464896552738},"m":{"x":108.46830247460531,"y":0},"c2":{"x":82.98415123730265,"y":18.249464896552738},"e":{"x":54.52712197603583,"y":18.249464896552738},"style":{fill: "red"}},
      {"rotate":54.672897196261715,"s":{"x":55.92110814946013,"y":-13.382064987750717},"c1":{"x":79.23295719803056,"y":-13.382064987750717},"m":{"x":100.96591439606112,"y":0},"c2":{"x":79.23295719803056,"y":13.382064987750717},"e":{"x":55.92110814946013,"y":13.382064987750717},"style":{fill: "orange"}},
      {"rotate":74.85981308411218,"s":{"x":57.10391281949932,"y":-6.737443187368721},"c1":{"x":72.8675214099644,"y":-6.737443187368721},"m":{"x":88.23504281992881,"y":0},"c2":{"x":72.8675214099644,"y":6.737443187368721},"e":{"x":57.10391281949932,"y":6.737443187368721},"style":{fill: "yellow"}},
      {"rotate":88.31775700934583,"s":{"x":57.10391281949932,"y":-6.737443187368721},"c1":{"x":72.8675214099644,"y":-6.737443187368721},"m":{"x":88.23504281992881,"y":0},"c2":{"x":72.8675214099644,"y":6.737443187368721},"e":{"x":57.10391281949932,"y":6.737443187368721},"style":{fill: "blue"}}
    ];

  class Layer extends React.Component {
    render() {
      var p = this.props;
      var data = p.data;
      var Geom = p.geom;
      var options = p.options;
      var renderer = function(item, i) {
        item.idx = i; 
        item.key = 'geom_' + i; 
        item.options = options; 
        return React.createElement(Geom, item);
      };

      return React.createElement('g', {}, data.map(renderer));
    }
  }

  return <demo>
    <div>

      <h2>Arc</h2>
      <svg>
        <Layer data={arcs} geom={Arc}/>
      </svg>
    </div>

    <div>
      <h2>Bar</h2>
      <svg>
        <Layer data={bars} geom={Bar}/>
      </svg>
    </div>

    <div>
      <h2>Dot</h2>
      <svg>
        <Layer data={dots} geom={Dot}></Layer>
      </svg>
    </div>

    <div>
      <h2>Square</h2>
      <svg>
        <Layer data={dots} geom={Dot} options={{shape: "square", maxsize: 40}}></Layer>
      </svg>
    </div>

    <div>
      <h2>Path</h2>
      <svg>
        <Layer data={paths} geom={Path}/>
      </svg>
    </div>

    <div>
      <h2>Area</h2>
      <svg>
        <Layer data={areas} geom={Polygon}/>
      </svg>
    </div>

    <div>
      <h2>Radial Line</h2>
      <svg>
        <Layer data={radialLines} geom={RadialLine}/>
      </svg>
    </div>

    <div>
      <h2>Flower Petal</h2>
      <svg>
        <Layer data={petals} geom={Petal}/>
      </svg>
    </div>

	</demo>;

  }
}
