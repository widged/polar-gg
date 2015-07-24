/* jshint esnext: true */

import React from 'react';

import RendererReactSvg from '../../renderer-react-svg/RendererReactSvg';
import Geom    from '../../layout/Layout';
import Layout  from '../LayoutPolarBand';

const PlotView = RendererReactSvg.Plot;
const LayerView = RendererReactSvg.Layer;


export default class LayoutPolarBandDemo extends React.Component {

  render() {
    var space = {"height":250,"width":250,"margin":0,"radius":115,"originTheta":0};
    var aes = {
      "y":{
        "type"   : "angular",
        "guides" : [{"type":"axis"}],
        "coord"  : {domain : [0,14], range: [0, 360], scale: 'linear'},
        "dataFn" : function(d) { return d[1]; }
      },
      "x":{
        "type"   : "radial",
        "guides" : [{"type":"axis"}],
        "coord"  : { domain : [0, 5], range: [0, space.radius], scale: 'linear'},
        "dataFn" : function(d) { return d[0]; }
      },
      "fill"   : {
        "coord" : { domain : [0, 3], range: ['red', 'blue'] },
        "dataFn": function(d, i) { return i; }
      },
      "stroke" : {
        "coord": { domain : [0, 3], range: ['red', 'blue'] },
        "dataFn": function(d, i) { return i; }
      }
    };
    
    var options = {};
    var data = [[1,4],[2,8],[3,7]];

    var layoutFn = Geom.layoutFn(Layout, aes, space, options);
    var geomData = layoutFn(data);

    return <PlotView width="250" height="250">
        <LayerView data={geomData} geom='arc' />
    </PlotView>;
  }
}


