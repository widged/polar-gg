/* jshint esnext: true */

import React from 'react';
import ShapeDemo from './shape/ShapeDemo';
import GuideDemo from './guide/GuideDemo';
import GeomDemo  from './geom/GeomDemo';
import PlotDemo  from './plot/PlotDemo';

export default class App extends React.Component {
  render() {

    return <app>
      <div>
        <h1>Plots</h1>
      </div>

      <div>
        <h1>Shapes</h1>
        <ShapeDemo/>
      </div>

      <div>
        <h1>Scales</h1>
      </div>

      <div>
        <h1>Guides</h1>
        <GuideDemo/>
      </div>

      <div>
        <h1>Geom Layers</h1>
        <GeomDemo/>
      </div>


  	</app>;

  }
}
