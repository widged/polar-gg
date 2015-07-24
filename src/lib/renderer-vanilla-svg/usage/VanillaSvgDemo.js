/* jshint esnext: true */

import React   from 'react';
import Demo       from '../../../components/demo/Demo';
import Vanilla    from '../../renderer-vanilla-svg/Vanilla';
import VanillaSvg from '../../renderer-vanilla-svg/VanillaSvg';

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

    function geom(Mock) {
        var {data, geom, customClass} = Mock.scenario();
        const PlotView  = VanillaSvg.Plot;
        const LayerView = VanillaSvg.Layer;
        const title = Mock.name;

        var elPlot  = Vanilla.createElement(
          PlotView, 
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