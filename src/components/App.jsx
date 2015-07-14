import React from 'react';
import Arc from './gg-geom-d3-arc/Arc';
import Bar from './gg-geom-bar/Bar';
import Dot from './gg-geom-dot/Dot';
import Path from './gg-geom-path/Path';
import Area from './gg-geom-d3-area/Area';
import RadialLine from './gg-geom-d3-radial-line/RadialLine';
import Flower from './gg-geom-d3-flower/Flower';

export default class App extends React.Component {
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
      {data: [{"radius":115,"angle":0},
      {"radius":114.37001796735143,"angle":0.10471975511965977},
      {"radius":112.48697408438765,"angle":0.20943951023931953},
      {"radius":109.37149937394265,"angle":0.3141592653589793},
      {"radius":105.0577276288991,"angle":0.41887902047863906},
      {"radius":99.59292143521046,"angle":0.5235987755982989},
      {"radius":93.03695435311896,"angle":0.6283185307179586},
      {"radius":85.46165492990033,"angle":0.7330382858376184},
      {"radius":76.9500197312687,"angle":0.8377580409572781},
      {"radius":67.5953040136344,"angle":0.9424777960769379},
      {"radius":57.500000000000014,"angle":1.0471975511965979},
      {"radius":46.774713953717026,"angle":1.1519173063162575},
      {"radius":35.53695435311896,"angle":1.2566370614359172},
      {"radius":23.90984444404234,"angle":1.361356816555577},
      {"radius":12.020773275780147,"angle":1.4660765716752369},
      {"radius":7.041719095097281e-15,"angle":1.5707963267948966},
      {"radius":12.020773275780133,"angle":1.6755160819145563},
      {"radius":23.9098444440423,"angle":1.780235837034216},
      {"radius":35.536954353118944,"angle":1.8849555921538759},
      {"radius":46.77471395371701,"angle":1.9896753472735356},
      {"radius":57.49999999999997,"angle":2.0943951023931957},
      {"radius":67.5953040136344,"angle":2.199114857512855},
      {"radius":76.9500197312687,"angle":2.303834612632515},
      {"radius":85.4616549299003,"angle":2.4085543677521746},
      {"radius":93.03695435311896,"angle":2.5132741228718345},
      {"radius":99.59292143521046,"angle":2.6179938779914944},
      {"radius":105.05772762889909,"angle":2.722713633111154},
      {"radius":109.37149937394265,"angle":2.827433388230814},
      {"radius":112.48697408438765,"angle":2.9321531433504737},
      {"radius":114.37001796735143,"angle":3.036872898470133},
      {"radius":115,"angle":3.141592653589793},
      {"radius":114.37001796735144,"angle":3.246312408709453},
      {"radius":112.48697408438765,"angle":3.3510321638291125},
      {"radius":109.37149937394265,"angle":3.455751918948773},
      {"radius":105.05772762889913,"angle":3.560471674068432},
      {"radius":99.59292143521044,"angle":3.6651914291880923},
      {"radius":93.03695435311896,"angle":3.7699111843077517},
      {"radius":85.46165492990033,"angle":3.8746309394274117},
      {"radius":76.95001973126872,"angle":3.979350694547071},
      {"radius":67.59530401363442,"angle":4.084070449666731},
      {"radius":57.50000000000005,"angle":4.188790204786391},
      {"radius":46.77471395371701,"angle":4.293509959906051},
      {"radius":35.53695435311897,"angle":4.39822971502571},
      {"radius":23.909844444042374,"angle":4.50294947014537},
      {"radius":12.020773275780137,"angle":4.60766922526503},
      {"radius":2.112515728529184e-14,"angle":4.71238898038469},
      {"radius":12.020773275780094,"angle":4.817108735504349},
      {"radius":23.909844444042236,"angle":4.921828490624009},
      {"radius":35.53695435311893,"angle":5.026548245743669},
      {"radius":46.77471395371706,"angle":5.131268000863329},
      {"radius":57.500000000000014,"angle":5.235987755982989},
      {"radius":67.59530401363439,"angle":5.340707511102648},
      {"radius":76.95001973126864,"angle":5.445427266222308},
      {"radius":85.46165492990033,"angle":5.550147021341969},
      {"radius":93.03695435311893,"angle":5.654866776461628},
      {"radius":99.59292143521041,"angle":5.759586531581287},
      {"radius":105.05772762889912,"angle":5.8643062867009474},
      {"radius":109.37149937394265,"angle":5.969026041820607},
      {"radius":112.48697408438764,"angle":6.073745796940266},
      {"radius":114.37001796735143,"angle":6.178465552059927},
      {"radius":115,"angle":6.283185307179586}],"style":{stroke: "blue", fill: "transparent"}}
    ];

    var flowers = [
      {"rotate":-15.98130841121494,"s":{"x":53.967881425250745,"y":-19.842322809340537},"c1":{"x":84.11732786846085,"y":-19.842322809340537},"m":{"x":110.73465573692171,"y":0},"c2":{"x":84.11732786846085,"y":19.842322809340537},"e":{"x":53.96788142525074,"y":19.842322809340537},"style":{fill: "green"}},
      {"rotate":22.710280373831807,"s":{"x":54.52712197603583,"y":-18.249464896552738},"c1":{"x":82.98415123730265,"y":-18.249464896552738},"m":{"x":108.46830247460531,"y":0},"c2":{"x":82.98415123730265,"y":18.249464896552738},"e":{"x":54.52712197603583,"y":18.249464896552738},"style":{fill: "red"}},
      {"rotate":54.672897196261715,"s":{"x":55.92110814946013,"y":-13.382064987750717},"c1":{"x":79.23295719803056,"y":-13.382064987750717},"m":{"x":100.96591439606112,"y":0},"c2":{"x":79.23295719803056,"y":13.382064987750717},"e":{"x":55.92110814946013,"y":13.382064987750717},"style":{fill: "orange"}},
      {"rotate":74.85981308411218,"s":{"x":57.10391281949932,"y":-6.737443187368721},"c1":{"x":72.8675214099644,"y":-6.737443187368721},"m":{"x":88.23504281992881,"y":0},"c2":{"x":72.8675214099644,"y":6.737443187368721},"e":{"x":57.10391281949932,"y":6.737443187368721},"style":{fill: "yellow"}},
      {"rotate":88.31775700934583,"s":{"x":57.10391281949932,"y":-6.737443187368721},"c1":{"x":72.8675214099644,"y":-6.737443187368721},"m":{"x":88.23504281992881,"y":0},"c2":{"x":72.8675214099644,"y":6.737443187368721},"e":{"x":57.10391281949932,"y":6.737443187368721},"style":{fill: "blue"}}
    ];

  class Layer extends React.Component {
    render() {
      var data = this.props.data;
      var Geom = this.props.geom;
      var renderer = function(item, i) {
        item.idx = i; item.key = 'geom_' + i; return React.createElement(Geom, item);
      }

      return React.createElement('svg', {}, data.map(renderer));
    }
  }

  return <div>
    <div><h2>Arcs</h2><Layer data={arcs} geom={Arc}/></div>
    <div><h2>Bars</h2><Layer data={bars} geom={Bar}/></div>
    <div><h2>Dots</h2><Layer data={dots} geom={Dot}/></div>
    <div><h2>Paths</h2><Layer data={paths} geom={Path}/></div>
    <div><h2>Areas</h2><Layer data={areas} geom={Area}/></div>
    <div><h2>RadialLines</h2><Layer data={radialLines} geom={RadialLine}/></div>
    <div><h2>Flowers</h2><Layer data={flowers} geom={Flower}/></div>
	</div>;

  }
}