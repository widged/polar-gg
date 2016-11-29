/* jshint esnext: true */

import React from 'react';
import Demo        from '../../components/demo/Demo.jsx';
import Primitives from '../PrimitivesTwo.jsx';
import PrimitiveMocks from './PrimitiveMocks';
import Vanilla from '../../gog-vanilla-svg/Vanilla';
import requestAnimationFrame from 'requestanimationframe';
import Two from 'two.js';


export default class TwoDemo extends React.Component {

  render() {

    function renderShape(data, primitive) {
      var container = React.createElement('div', {
        ref: function ref(c) {
          if(!c) {return;}
        var two = new Two({
          width: 300,
          height: 200,
          type: Two.Types.svg
        }).appendTo(c);

        var svg = Vanilla.createElement('svg', {});
        var shapes =  data.map(function(d) {
          var gp = two.makeGroup();
          var out = Primitives[primitive](d);
          var p = Vanilla.createElement(out.type, Object.assign(out.props,d.style));
          svg.appendChild(p);
          return p.outerHTML;
      });
        var div = document.createElement('div');
        div.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
  ${shapes.join('\n')}
</svg>`;
        c.appendChild(svg);
        var elm = two.interpret(div.querySelector('svg'));
        two.update();


          return c;
        },
        className: "primitives"
      });

      return container;
    }

    var Section = Demo.Section;

    function renderItem(primitive,i) {
      var shapes = PrimitiveMocks[primitive]();
      var title = primitive;

      return <Section title={title} key={"k"+i}>
          {renderShape(shapes, primitive)}
      </Section>;
    }

    return <Demo className="primitives">
      {'petal'.split(',').map(renderItem)}
    </Demo>;
  }
}
// {'arc,dot,dotsquare,rect,petal,polyline,polylineradial'.split(',').map(renderItem)}
