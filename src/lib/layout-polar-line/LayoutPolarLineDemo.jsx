/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';

import Scale from '../../lib/Scale';
import RendererReactSvg from '../renderer-react-svg/RendererReactSvg';
import Layout from './LayoutPolarLine';
import Geom       from '../geom/Geom';

import '../demo/demo.css';

const PlotView = RendererReactSvg.Plot;
const LayerView = RendererReactSvg.Layer;


export default class LayoutPolarLineDemo extends React.Component {

  render() {
    var space = {"height":250,"width":250,"margin":0,"radius":115,"originTheta":0};
    var aes = {
      "x":{
        type    : "radial",
        coord   : { domain :  [0, 1], range: [0, 115] },
        dataFn  : function(d) { return d[1]; }
      },
      "y":{
        type    : "angular",
        coord: {domain: [0, 360], range: [360, 0]},
        dataFn  : function(d) { return d[0]; }
      },
    };
    var options = {};

    var data = d3.range(0, 721, 1).map(function(deg, index){ return [deg, index/720]; });

    var layoutFn = Geom.layoutFn(Layout, aes, space, options);
    var geomData = layoutFn(data);

    var gpData = [{radiallines: geomData, style: {fill: 'none', stroke: 'blue'}}];

    return <PlotView width="250" height="250">
        <LayerView data={gpData} geom='polylineradial' />
    </PlotView>;
  }
}
