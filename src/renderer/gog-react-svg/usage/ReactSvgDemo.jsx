/* jshint esnext: true */

import React   from 'react';
import Demo    from '../../../components/demo/Demo.jsx';
import Plot    from '../PlotReactSvg.jsx';

// Guides
import AngularGuide  from '../../../gog/guide-polar-xangular/usage/AngularGuide-demo.jsx';
import RadialGuide   from '../../../gog/guide-polar-yradial/usage/RadialGuide-demo.jsx';
// Layouts
import PolarAreaMock  from '../../../gog/layout-polar-area/usage/PolarAreaMock.jsx';
import PolarBandMock  from '../../../gog/layout-polar-band/usage/PolarBandMock.jsx';
import PolarBarMock   from '../../../gog/layout-polar-bar/usage/PolarBarMock.jsx';
import PolarDonutMock from '../../../gog/layout-polar-donut/usage/PolarDonutMock.jsx';
import PolarDotMock   from '../../../gog/layout-polar-dot/usage/PolarDotMock.jsx';
import PolarHatMock   from '../../../gog/layout-polar-hat/usage/PolarHatMock.jsx';
import PolarLineMock  from '../../../gog/layout-polar-line/usage/PolarLineMock.jsx';
import PolarPetalMock from '../../../gog/layout-polar-petal/usage/PolarPetalMock.jsx';
import PolarPieMock   from '../../../gog/layout-polar-pie/usage/PolarPieMock.jsx';


export default class ReactSvgDemo extends React.Component {
  render() {
    var Section = Demo.Section;

    function guide(item, i) {
      var el = React.createElement(item);
      var title = item.name;
      return <Section key={"gd"+i} title={title}>{el}</Section>;
    }

    function geom(Mock, i) {
        var {data, geom, customClass} = Mock.scenario();
        const title = Mock.name;
        var layers = [{data: data, geom: geom}];
        return <Section key={"gm"+i} title={title}><Plot width="250" height="250" customClass={customClass} layers={layers}/></Section>;
   }

    return <Demo>
      <Section key="s1" title="Scale">
        Angular, Radial, Color
      </Section>

      <Section key="s2" title="Guides">
        {[AngularGuide,RadialGuide].map(guide)}
      </Section>

      <Section key="s3" title="Geom Layouts">
        {[
          PolarAreaMock,PolarBandMock,PolarBarMock,
          PolarDonutMock,PolarDotMock,PolarHatMock,
          PolarLineMock,PolarPetalMock,PolarPieMock
        ].map(geom)}
      </Section>

      <Section key="s4" title="Plots">
        Coming Soon!
      </Section>
  	</Demo>;

  }
}

/*,PolarBar,PolarDonut,PolarDot,PolarHat,PolarLine,PolarPetal,PolarPie*/
