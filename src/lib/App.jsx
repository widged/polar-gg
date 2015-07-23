/* jshint esnext: true */

import React from 'react';
import ReactSvgDemo   from './renderer-react-svg/usage/Renderer-demo';
import VanillaSvgDemo from './renderer-vanilla-svg/usage/Renderer-demo';
import GuideDemo from './guide/GuideDemo';
import LayoutDemo  from './layout/LayoutDemo';
import PlotDemo  from './plot/PlotDemo';

export default class App extends React.Component {
  render() {

    return <app>
      <div>
        <h1>Plots</h1>
        Coming Soon!
      </div>

      <div>
        <h1>Renderer</h1>
        <h2>React+SVG</h2>
        <ReactSvgDemo/>
        <h2>Vanilla+SVG</h2>
        <VanillaSvgDemo/>
        <h2>Others</h2>
        React+webgl, famous
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

  	</app>;

  }
}
