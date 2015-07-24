/* jshint esnext: true */

import React from 'react';
import Demo       from '../../../components/demo/Demo';

import ShapesReactSvg   from './Renderer-demo';
import AngularGuide  from '../../guide-polar-xangular/usage/AngularGuide-demo';
import RadialGuide  from '../../guide-polar-yradial/usage/RadialGuide-demo';
// Layouts
import PolarArea  from '../../layout-polar-area/usage/ReactSvgPolarArea-demo';
import PolarBand  from '../../layout-polar-band/usage/ReactSvgPolarBand-demo';
import PolarBar   from '../../layout-polar-bar/usage/ReactSvgPolarBar-demo';
import PolarDonut from '../../layout-polar-donut/usage/ReactSvgPolarDonut-demo';
import PolarDot   from '../../layout-polar-dot/usage/ReactSvgPolarDot-demo';
import PolarHat   from '../../layout-polar-hat/usage/ReactSvgPolarHat-demo';
import PolarLine  from '../../layout-polar-line/usage/ReactSvgLine-demo';
import PolarPetal from '../../layout-polar-petal/usage/ReactSvgPolarPetal-demo';
import PolarPie   from '../../layout-polar-pie/usage/ReactSvgPolarPie-demo';


export default class ReactSvgDemo extends React.Component {
  render() {

    function h3(item) {
      var el = React.createElement(item);
      var title = item.name;
      return <div>
        <h3>{title}</h3>
        {el}
      </div>;
    }

    return <renderer-demo>
      <div>
        <h1>Plots</h1>
        Coming Soon!
      </div>

      <div>
        <h1>React+SVG Shape Primitives</h1>
        <ShapesReactSvg/>
      </div>

      <div>
        <h1>Scales</h1>
        Angular, Radial, Color at the moment
      </div>      

      <div>
        <h1>Guides</h1>
        <Demo>{[AngularGuide,RadialGuide].map(h3)}</Demo> 
       </div>

      <div>
        <h1>Geom Layouts</h1>
        <Demo>{[PolarArea,PolarBand,PolarBar,PolarDonut,PolarDot,PolarHat,PolarLine,PolarPetal,PolarPie].map(h3)}</Demo> 
      </div>

  	</renderer-demo>;

  }
}

