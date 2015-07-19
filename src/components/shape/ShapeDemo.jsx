/* jshint esnext: true */

import React from 'react';
import ArcDemo        from '../shape-svg-arc-react-d3/usage/Arc-demo';
import DotCircleDemo  from '../shape-svg-dot-react/usage/Dot-demo';
import DotSquareDemo  from '../shape-svg-dotsquare-react/usage/Square-demo';
import RectDemo       from '../shape-svg-rect-react/usage/Rect-demo';
import HatDemo        from '../shape-svg-hat-react/usage/Hat-demo';
import PolygonDemo    from '../shape-svg-polygon-react-d3/usage/Polygon-demo';
import RadialLineDemo from '../shape-svg-radialline-react-d3/usage/RadialLine-demo';
import PetalDemo      from '../shape-svg-petal-react-d3/usage/Petal-demo';

import '../../stylesheets/demo.css';

export default class ShapeDemo extends React.Component {
  render() {
    return <demo>
      <RectDemo/>
      <DotCircleDemo/>
      <DotSquareDemo/>
      <PolygonDemo/>
      <ArcDemo/>
      <RadialLineDemo/>
      <HatDemo/>
      <PetalDemo/>
  	</demo>;
  }
}
