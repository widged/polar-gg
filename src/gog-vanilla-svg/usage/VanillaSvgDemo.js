/* jshint esnext: true */

import React   from 'react';
import Demo    from '../../components/demo/Demo.jsx';
import Vanilla    from '../Vanilla';
import Plot from '../PlotVanillaSvg';


// Layouts
import PolarAreaMock  from '../../gog/layout-polar-area/usage/PolarAreaMock.jsx';
import PolarBandMock  from '../../gog/layout-polar-band/usage/PolarBandMock.jsx';
import PolarBarMock   from '../../gog/layout-polar-bar/usage/PolarBarMock.jsx';
import PolarDonutMock from '../../gog/layout-polar-donut/usage/PolarDonutMock.jsx';
import PolarDotMock   from '../../gog/layout-polar-dot/usage/PolarDotMock.jsx';
import PolarHatMock   from '../../gog/layout-polar-hat/usage/PolarHatMock.jsx';
import PolarLineMock  from '../../gog/layout-polar-line/usage/PolarLineMock.jsx';
import PolarPetalMock from '../../gog/layout-polar-petal/usage/PolarPetalMock.jsx';
import PolarPieMock   from '../../gog/layout-polar-pie/usage/PolarPieMock.jsx';


export default class ReactSvgDemo extends React.Component {
  render() {
    var Section = Demo.Section;

    function geom(Mock) {
        var {data, geom, customClass} = Mock.scenario();
        const title = Mock.name;

        var elPlot  = Vanilla.createElement(
          Plot,
          {width: 250, height: 250, customClass: customClass, layers: [{data: data, geom: geom}]}
        );
        return <Section title={title}>
          <div dangerouslySetInnerHTML={{__html: elPlot.outerHTML}} />
        </Section>;
   }

    return <Demo>
      <Section title="Scale">
        Angular, Radial, Color
      </Section>

      <Section title="Guides">
        Coming Soon!
      </Section>

      <Section title="Geom Layouts">
        {[
          PolarAreaMock,PolarBandMock,PolarBarMock,
          PolarDonutMock,PolarDotMock,PolarHatMock,
          PolarLineMock,PolarPetalMock,PolarPieMock
        ].map(geom)}
      </Section>

      <Section title="Plots">
        Coming Soon!
      </Section>
    </Demo>;

  }
}

/*,
          ,
          */
