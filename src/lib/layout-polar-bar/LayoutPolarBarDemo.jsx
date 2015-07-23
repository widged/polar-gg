/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';

import Scale from '../../lib/Scale';
import RendererReactSvg from '../renderer-react-svg/RendererReactSvg';
import Geom       from '../geom/Geom';
import Layout from './LayoutPolarBar';

const PlotView = RendererReactSvg.Plot;
const LayerView = RendererReactSvg.Layer;


export default class LayoutPolarBarDemo extends React.Component {

  render() {
    var space = {"height":250,"width":250,"margin":0,"radius":115,"originTheta":0};
    var aes = {
      "y":{
        type   : "angular",
        guides : [{"type":"axis"}],
        coord: {domain: [0, 750], range: [0, 360]},
        dataFn: function(d) { return d[0]; }
      },
      "x":{
        type   : "radial",
        guides : [{"type":"axis"}],
        coord: { domain :  [-40, 100], range: [0, 115] },
        dataFn: function(d) { return d[1]; }
      }
    };
    var options = {};
    var data = d3.range(0, 15).map(function(deg, index){
      var obj = [deg * 50 + 50, ~~(Math.random() * index * 5 - 15)];
      return obj;
    });

    var layoutFn = Geom.layoutFn(Layout, aes, space, options);
    var geomData = layoutFn(data);
    
    return <PlotView width="250" height="250">
        <LayerView data={geomData} geom='rect' />
    </PlotView>;
  }
}


