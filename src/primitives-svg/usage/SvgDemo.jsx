/* jshint esnext: true */

import React from 'react';
import Demo        from '../../components/demo/Demo.jsx';
import Primitives  from '../PrimitivesSvg.jsx';
import PrimitiveMocks from './PrimitiveMocks';

class SvgDemo extends React.Component {

  constructor(props) {
    super(props);
    this.bound  = {
      renderItem: this.renderItem.bind(this)
    };
  }

  renderShape(data, primitive) {
    var shapes =  data.map(function(d, i) {
        var out = Primitives[primitive](d);
        out.props.style = d.style;
        return React.createElement(out.type, Object.assign(out.props, {key: 'k'+i}));
    });
    return shapes;
  }

  renderItem(primitive, i) {
    var shapes = PrimitiveMocks[primitive]();
    var title = primitive;
    var Section = Demo.Section;
    return <Section title={title} key={"k"+i}>
      <svg>
        <g>
        {this.renderShape(shapes, primitive)}
        </g>
      </svg>
    </Section>;
  }

  render() {

    const renderItem = this.bound.renderItem;
    return <Demo className="primitives">
      {'arc,dot,dotsquare,rect,petal,polyline,polylineradial'.split(',').map(renderItem)}
    </Demo>;
  }
}

export default SvgDemo;
