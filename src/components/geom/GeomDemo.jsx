/* jshint esnext: true */

import React from 'react';
import GeomPolarAreaDemo  from '../geom-polar-area/GeomPolarAreaDemo';
import GeomPolarBandDemo  from '../geom-polar-band/GeomPolarBandDemo';
import GeomPolarBarDemo  from '../geom-polar-bar/GeomPolarBarDemo';
import GeomPolarDonutDemo  from '../geom-polar-donut/GeomPolarDonutDemo';
import GeomPolarDotDemo  from '../geom-polar-dot/GeomPolarDotDemo';
import GeomPolarHatDemo  from '../geom-polar-hat/GeomPolarHatDemo';
import GeomPolarLineDemo  from '../geom-polar-line/GeomPolarLineDemo';
import GeomPolarPieDemo  from '../geom-polar-pie/GeomPolarPieDemo';
import GeomPolarPetalDemo  from '../geom-polar-petal/GeomPolarPetalDemo';

import '../../stylesheets/demo.css';

export default class GeomDemo extends React.Component {
  render() {

  	return <demo className="scale">

      <div>
      <h3>Polar Area</h3>
        <GeomPolarAreaDemo/>
      </div>


      <div>
      <h3>Polar Band</h3>
        <GeomPolarBandDemo/>
      </div>
      
      <div>
      <h3>Polar Bar</h3>
        <GeomPolarBarDemo/>
      </div>

      <div>
      <h3>Polar Donut Slice</h3>
        <GeomPolarDonutDemo/>
      </div>

      <div>
      <h3>Polar Dot</h3>
        <GeomPolarDotDemo/>
      </div>

      <div>
      <h3>Polar Hat</h3>
        <GeomPolarHatDemo/>
      </div>

      <div>
      <h3>Polar Petal</h3>
        <GeomPolarPetalDemo/>
      </div>

      <div>
      <h3>Polar Pie</h3>
        <GeomPolarPieDemo/>
      </div>

      <div>
      <h3>Polar Line</h3>
        <GeomPolarLineDemo/>
      </div>

    </demo>

  }
}


