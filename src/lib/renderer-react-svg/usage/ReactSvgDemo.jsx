/* jshint esnext: true */

import React from 'react';
import ShapesReactSvg   from './Renderer-demo';
import GuideDemo from '../../guide/GuideDemo';
import LayoutDemo  from '../../layout/LayoutDemo';
import PlotDemo  from '../../plot/PlotDemo';

export default class ReactSvgDemo extends React.Component {
  render() {

    return <renderer-demo>
      <div>
        <h1>Plots</h1>
        Coming Soon!
      </div>

      <div>
        <h1>Shapes Renderer</h1>
        <ShapesReactSvg/>
      </div>

      <div>
        <h1>Scales</h1>
        Angular, Radial, Color at the moment
      </div>      

      <div>
        <h1>Guides</h1>
        <GuideDemo/>
      </div>

      <div>
        <h1>Geom Layouts</h1>
        <LayoutDemo/>
      </div>

  	</renderer-demo>;

  }
}
