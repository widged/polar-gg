/* jshint esnext: true */

import React from 'react';
import ShapeDemo from './shape/ShapeDemo';
import ScaleDemo from './scale/ScaleDemo';
import GeomDemo  from './geom/GeomDemo';
import PlotDemo  from './plot/PlotDemo';
import LayerDemo  from './layer/LayerDemo';
import AngularDemo  from './scale-polar-xangular/AngularDemo';
import RadialDemo  from './scale-polar-yradial/RadialDemo';

export default class App extends React.Component {
  render() {

    return <app>
      <div>
        <h1>Plots</h1>
      </div>

      <div>
        <h1>Guides</h1>
        <AngularDemo/>
        <RadialDemo/>
      </div>

      <div>
        <h1>Shapes</h1>
        <ShapeDemo/>
      </div>
      <div>
        <h1>Scales</h1>
        <ScaleDemo/>
      </div>
      <div>
        <h1>Geoms</h1>
        <GeomDemo/>
      </div>
      <div>
        <h1>Layer</h1>
        <LayerDemo/>
      </div>      

  	</app>;

  }
}
