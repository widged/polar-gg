/* jshint esnext: true */

import React from 'react';
import RendererReactSvg from '../RendererReactSvg';

const Group = RendererReactSvg.Group;

export default class DotDemo extends React.Component {

    render() {

      var dots = [
        { "rotate": 0, "r":  6.4, "cx": 60, "cy":  60, "style": {fill: "green" }},
        { "rotate": 0, "r": 10.7, "cx": 90, "cy":  60, "style": {fill: "red"   }},
        { "rotate": 0, "r": 12.9, "cx": 30, "cy":  90, "style": {fill: "orange"}},
        { "rotate": 0, "r": 11.8, "cx": 60, "cy":  90, "style": {fill: "blue"  }},
        { "rotate": 0, "r":  8.6, "cx": 90, "cy":  90, "style": {}},
        { "rotate": 0, "r":  4.3, "cx": 30, "cy": 120, "style": {}},
        { "rotate": 0, "r":  4.3, "cx": 60, "cy": 120, "style": {}},
        { "rotate": 0, "r":  7.5, "cx": 90, "cy": 120, "style": {}},
        { "rotate": 0, "r": 12.9, "cx": 30, "cy":  30, "style": {}},
        { "rotate": 0, "r": 13.9, "cx": 60, "cy":  30, "style": {}},
        { "rotate": 0, "r": 12.9, "cx": 90, "cy":  30, "style": {}},
        { "rotate": 0, "r":  8.6, "cx": 30, "cy":  60, "style": {}}
      ];

      return <div>
        <h2>Dot</h2>
        <svg>
          <Group data={dots} shape='dot' />
        </svg>
      </div>;
    }
}
