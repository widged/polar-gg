/* jshint esnext: true */

import React from 'react';
import LayoutPolarAreaDemo  from '../../lib/layout-polar-area/LayoutPolarAreaDemo';
import LayoutPolarBandDemo  from '../../lib/layout-polar-band/LayoutPolarBandDemo';
import LayoutPolarBarDemo  from '../../lib/layout-polar-bar/LayoutPolarBarDemo';
import LayoutPolarDonutDemo  from '../../lib/layout-polar-donut/LayoutPolarDonutDemo';
import LayoutPolarDotDemo  from '../../lib/layout-polar-dot/LayoutPolarDotDemo';
import LayoutPolarHatDemo  from '../../lib/layout-polar-hat/LayoutPolarHatDemo';
import LayoutPolarLineDemo  from '../../lib/layout-polar-line/LayoutPolarLineDemo';
import LayoutPolarPieDemo  from '../../lib/layout-polar-pie/LayoutPolarPieDemo';
import LayoutPolarPetalDemo  from '../../lib/layout-polar-petal/LayoutPolarPetalDemo';

import '../demo/demo.css';

export default class GeomDemo extends React.Component {
  render() {

  	return <demo className="scale">

      <div>
      <h3>Polar Area</h3>
        <LayoutPolarAreaDemo/>
      </div>

      <div>
      <h3>Polar Band</h3>
        <LayoutPolarBandDemo/>
      </div>
      
      <div>
      <h3>Polar Bar</h3>
        <LayoutPolarBarDemo/>
      </div>

      <div>
      <h3>Polar Donut Slice</h3>
        <LayoutPolarDonutDemo/>
      </div>

      <div>
      <h3>Polar Dot</h3>
        <LayoutPolarDotDemo/>
      </div>

      <div>
      <h3>Polar Hat</h3>
        <LayoutPolarHatDemo/>
      </div>

      <div>
      <h3>Polar Petal</h3>
        <LayoutPolarPetalDemo/>
      </div>

      <div>
      <h3>Polar Pie</h3>
        <LayoutPolarPieDemo/>
      </div>

      <div>
      <h3>Polar Line</h3>
        <LayoutPolarLineDemo/>
      </div>


    </demo>

  }
}
