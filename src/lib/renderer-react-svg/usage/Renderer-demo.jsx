/* jshint esnext: true */

import React from 'react';
import ArcDemo        from './arc-demo';
import DotCircleDemo  from './dot-demo';
import DotSquareDemo  from './dotsquare-demo';
import PetalDemo      from './petal-demo';
import RectDemo       from './rect-demo';
import PolylineDemo   from './polyline-demo';
import PolylineRadialDemo   from './polylineradial-demo';

/*
import PolylineRadialDemo from '../shape-svg-polylineradial-react-d3/usage/PolylineRadial-demo';

import '../../stylesheets/demo.css';
*/
export default class RendererReactSvgDemo extends React.Component {
  render() {
    return <demo>
      <ArcDemo/>
      <DotCircleDemo/>
      <DotSquareDemo/>
      <PetalDemo/>
      <PolylineDemo/>
      <PolylineRadialDemo/>
      <RectDemo/>
  	</demo>;
  }
}
