/* jshint esnext: true */

import React   from 'react';
import Demo    from '../../../components/demo/Demo';
import ReactSvg from '../../renderer-react-svg/ReactSvg';

// Guides
import AngularGuide  from '../../guide-polar-xangular/usage/AngularGuide-demo';
import RadialGuide   from '../../guide-polar-yradial/usage/RadialGuide-demo';
// Layouts
import PolarAreaMock  from '../../layout-polar-area/usage/PolarAreaMock';
import PolarBandMock  from '../../layout-polar-band/usage/PolarBandMock';
import PolarBarMock   from '../../layout-polar-bar/usage/PolarBarMock';
import PolarDonutMock from '../../layout-polar-donut/usage/PolarDonutMock';
import PolarDotMock   from '../../layout-polar-dot/usage/PolarDotMock';
import PolarHatMock   from '../../layout-polar-hat/usage/PolarHatMock';
import PolarLineMock  from '../../layout-polar-line/usage/PolarLineMock';
import PolarPetalMock from '../../layout-polar-petal/usage/PolarPetalMock';
import PolarPieMock   from '../../layout-polar-pie/usage/PolarPieMock';


export default class ReactSvgDemo extends React.Component {
  render() {
    var Section = Demo.Section;

    function guide(item) {
      var el = React.createElement(item);
      var title = item.name;
      return <Section title={title}>{el}</Section>;
    };

    function geom(Mock) {
        var {data, geom, customClass} = Mock.scenario1();
        const PlotView  = ReactSvg.Plot;
        const LayerView = ReactSvg.Layer;
        const title = Mock.name;
        return <Section title={title}><PlotView width="250" height="250" customClass={customClass}>
            <LayerView data={data} geom={geom} />
        </PlotView></Section>;
   }

    return <Demo>
      <Section title="Scale">
        Angular, Radial, Color
      </Section>

      <Section title="Guides">
        {[AngularGuide,RadialGuide].map(guide)}
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

/*,PolarBar,PolarDonut,PolarDot,PolarHat,PolarLine,PolarPetal,PolarPie*/