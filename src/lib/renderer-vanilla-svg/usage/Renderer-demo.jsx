/* jshint esnext: true */

import React from 'react';
import Vanilla from '../RendererVanillaSvg';
import ArcDemo        from './arc-demo';
import DotCircleDemo  from './dot-demo';
import DotSquareDemo  from './dotsquare-demo';
import PetalDemo      from './petal-demo';
import RectDemo       from './rect-demo';
import PolylineDemo   from './polyline-demo';
import PolylineRadialDemo   from './polylineradial-demo';

export default class RendererReactSvgDemo {
  render() {
    function demoHtml(Factory) {
      return {__html: Vanilla.createElement(Factory, {}).outerHTML};
    }

    return <demo>
      <div dangerouslySetInnerHTML={ demoHtml(ArcDemo) } />
      <div dangerouslySetInnerHTML={ demoHtml(DotCircleDemo) } />
      <div dangerouslySetInnerHTML={ demoHtml(DotSquareDemo) } />
      <div dangerouslySetInnerHTML={ demoHtml(PetalDemo) } />
      <div dangerouslySetInnerHTML={ demoHtml(RectDemo) } />
      <div dangerouslySetInnerHTML={ demoHtml(PolylineDemo) } />
      <div dangerouslySetInnerHTML={ demoHtml(PolylineRadialDemo) } />
  	</demo>;
  }
}
