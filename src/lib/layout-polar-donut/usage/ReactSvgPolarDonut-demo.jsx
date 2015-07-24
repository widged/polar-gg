/* jshint esnext: true */

import React from 'react';

import RendererReactSvg from '../../renderer-react-svg/RendererReactSvg';
import Geom    from '../../layout/Layout';
import Monthly from '../../plot-monthly/Monthly';
import Layout  from '../LayoutPolarDonut';

const PlotView = RendererReactSvg.Plot;
const LayerView = RendererReactSvg.Layer;


export default class LayoutPolarDonutDemo extends React.Component {

  render() {
    var space = {"height":250,"width":250,"margin":0,"radius":115,"originTheta":0};
    var aes = {
      "x":{
        type   : "radial",
        coord: { domain : [0, 1], range: [0, 115] },
        dataFn : function(d, i) { return d[0]; }
      },
      "y":{
        type   : "angular",
        coord: {domain: [0, 14], range: [0, 360]},
        dataFn : function(d) { return d[1]; }      
      }
    };
    var options = {};
    var data     = Monthly.xyFrom({ "jan": 6, "feb": 10, "mar": 12, "apr": 11, "may": 8, "jun": 4, "jul": 4, "aug": 7, "sep": 12, "oct": 13, "nov": 12, "dec": 8 });

    var layoutFn = Geom.layoutFn(Layout, aes, space, options);
    var geomData = layoutFn(data);

    return <PlotView width="250" height="250" customClass="months">
        <LayerView data={geomData} geom='arc' />
    </PlotView>;
  }
}


