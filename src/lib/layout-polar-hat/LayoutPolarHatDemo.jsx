/* jshint esnext: true */

import React from 'react';
import d3 from 'd3';

import Scale      from '../../lib/Scale';
import RendererReactSvg from '../renderer-react-svg/RendererReactSvg';
import Geom       from '../geom/Geom';
import Monthly    from '../plot-monthly/Monthly';
import Layout from './LayoutPolarHat';

import '../demo/demo.css';

const PlotView = RendererReactSvg.Plot;
const LayerView = RendererReactSvg.Layer;


export default class LayoutPolarHatDemo extends React.Component {

  render() {
    var space = {"height":250,"width":250,"margin":0,"radius":115,"originTheta":0};
    var aes = {
      "x":{
        type   : "radial",
        coord  : { domain : [0, 14], range: [0, 95] },
        dataFn : function(d) { return d[1]; }
      },
      "y":{
        type   : "angular",
        coord  : {domain: [0, 12], range: [0, 360]},
        dataFn : function(d) { return d[0]; }
      }
    };
    var options = {offset: 20};

    var data     = Monthly.xyFrom({ "jan": 6, "feb": 10, "mar": 12, "apr": 11, "may": 8, "jun": 4, "jul": 4, "aug": 7, "sep": 12, "oct": 13, "nov": 12, "dec": 8 });

    var layoutFn = Geom.layoutFn(Layout, aes, space, options);
    var geomData = layoutFn(data);

    return <PlotView width="250" height="250" customClass="months">
        <LayerView data={geomData} geom='polyline' />
    </PlotView>;
  }
}


