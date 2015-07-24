/* jshint esnext: true */

import React from 'react';
import Demo        from '../../../components/demo/Demo';
import RendererSvg from '../RendererSvg';
import PrimitiveMocks from './PrimitiveMocks';

export default class SvgDemo extends React.Component {

  render() {
    function renderShape(data, primitive) {
      var shapes =  data.map(function(d) {
          var out = RendererSvg[primitive](d);
          out.props.style = d.style;
          return React.createElement(out.type, out.props);
      });
      return shapes;
    }

    var Section = Demo.Section;
    
    function renderItem(primitive) {
      var shapes = PrimitiveMocks[primitive]();
      var title = primitive;
      return <Section title={title}>
        <svg>
          <g>
          {renderShape(shapes, primitive)}
          </g>
        </svg>
      </Section>;
    }

    return <Demo className="primitives">
      {'arc,dot,dotsquare,rect,petal,polyline,polylineradial'.split(',').map(renderItem)}
    </Demo>;
  }
}
