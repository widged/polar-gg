/* jshint esnext: true */

import React from 'react';
import RendererSvg from '../RendererSvg';
import PrimitiveMocks from './PrimitiveMocks';

export default class RendererReactSvgDemo extends React.Component {

  render() {
    function renderShape(data, primitive) {
      var shapes =  data.map(function(d) {
          var out = RendererSvg[primitive](d);
          out.props.style = d.style;
          return React.createElement(out.type, out.props);
      });
      return shapes;
    }
    
    function renderItem(primitive) {
      var shapes = PrimitiveMocks[primitive]();
      var title = primitive;
      return <div>
        <h2>{title}</h2>
        <svg>
          <g>
          {renderShape(shapes, primitive)}
          </g>
        </svg>
      </div>;
    }

    return <demo>
      {'arc,dot,dotsquare,rect,petal,polyline,polylineradial'.split(',').map(renderItem)}
    </demo>;
  }
}
