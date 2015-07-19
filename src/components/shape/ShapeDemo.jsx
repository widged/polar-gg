/* jshint esnext: true */

import React from 'react';
import ArcDemo        from '../shape-svg-arc-react-d3/usage/Arc-demo';
import DotCircleDemo  from '../shape-svg-dot-react/usage/Dot-demo';
import DotSquareDemo  from '../shape-svg-dotsquare-react/usage/Square-demo';
import RectDemo       from '../shape-svg-rect-react/usage/Rect-demo';
import PolylineDemo        from '../shape-svg-polyline-react/usage/Polyline-demo';
import PolylineRadialDemo from '../shape-svg-polylineradial-react-d3/usage/PolylineRadial-demo';
import PetalDemo      from '../shape-svg-petal-react-d3/usage/Petal-demo';

import '../../stylesheets/demo.css';

export default class ShapeDemo extends React.Component {
  render() {
    return <demo>
      <RectDemo/>
      <DotCircleDemo/>
      <DotSquareDemo/>
      <ArcDemo/>
      <PolylineRadialDemo/>
      <PolylineDemo/>
      <PetalDemo/>
  	</demo>;
  }
}
