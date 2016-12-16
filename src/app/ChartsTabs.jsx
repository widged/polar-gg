/* jshint esnext: true */

import React from 'react';
import ReactDom from 'react-dom';
import Vanilla    from './gog-vanilla-svg/Vanilla';

// import PrimitivesTwo        from '../primitives-twojs/usage/TwoDemo.jsx';
import TabbedContainer from '../components/tabs/TabbedContainer.jsx';
import SectionsGrid    from './SectionsGrid.jsx';

// import reactRenderer   from '../surface/svg-surface/svgSurface.jsx';

// Renderers
import PlotReact    from './gog-react-svg/PlotReactSvg.jsx';
import PlotVanilla  from './gog-vanilla-svg/PlotVanillaSvg.js';
// Guides
import AngularGuide  from '../gog/guide-polar-xangular/usage/AngularGuide-demo.jsx';
import RadialGuide   from '../gog/guide-polar-yradial/usage/RadialGuide-demo.jsx';
// Geom Series
import PolarAreaMock  from '../gog/layout-polar-area/usage/PolarAreaMock.jsx';
import PolarBandMock  from '../gog/layout-polar-band/usage/PolarBandMock.jsx';
import PolarBarMock   from '../gog/layout-polar-bar/usage/PolarBarMock.jsx';
import PolarDonutMock from '../gog/layout-polar-donut/usage/PolarDonutMock.jsx';
import PolarDotMock   from '../gog/layout-polar-dot/usage/PolarDotMock.jsx';
import PolarHatMock   from '../gog/layout-polar-hat/usage/PolarHatMock.jsx';
import PolarLineMock  from '../gog/layout-polar-line/usage/PolarLineMock.jsx';
import PolarPetalMock from '../gog/layout-polar-petal/usage/PolarPetalMock.jsx';
import PolarPieMock   from '../gog/layout-polar-pie/usage/PolarPieMock.jsx';

const {Component} = React;

class ChartTabs extends Component {
  constructor(props) {
    super(props);
    var charts = [
      {"type": "Scales"   ,"children":["Angular", "Radial", "Color"]},
      {"type": "guide","children":[AngularGuide,RadialGuide]},
      {"type": "geoms" ,"children":[
        PolarAreaMock,PolarBandMock,PolarBarMock,
        PolarDonutMock,PolarDotMock,PolarPetalMock,
        PolarPieMock,PolarLineMock,PolarHatMock/**/
      ]},
      {"type": "plots"   ,"children":[
        {geomLayers: [PolarAreaMock,PolarBandMock], guides:[AngularGuide,RadialGuide]}
      ]}
    ];
    this.state = {
      reactCharts  : charts.map(this.renderGeom("react")),
      vanillaCharts: charts.map(this.renderGeom("vanilla"))
    }
  }

  renderGeom(renderer) {
      const renderGuide = (guideR, i) => {
        return (<div key={'g'+i}>
          <svg width="250" height="250">
            {guideR}
          </svg>
        </div>);
      }

      return ({type,children}, i) => {
        var kids;
        /*
        if(type === "guide") {
          kids = children.map((mock, i) => {
            var guide = mock.getLayout();
            var guideR;
            if(renderer === 'react') {
                guideR = <g className="chart" transform="translate(125,125)">{guide.render(React.createElement)}</g>
            } else {
              var elGuide  = guide.render(Vanilla.createElement).outerHTML;
              guideR = <g className="chart" transform="translate(125,125)" dangerouslySetInnerHTML={{__html: elGuide}} />;
            }
            return renderGuide(guideR, i);
          });
      } else if(type === "geoms") {
          kids = children.map((Mock, i) => {
            var {data, geom, customClass} = Mock.getLayout().series(Mock.getSeries(), {customClass: "months"});
            const title = Mock.name;
            var layers = [{data: data, geom: geom, customClass}];
            var plot;
            if(renderer === 'react') {
              plot = <PlotReact key={'k'+i} width="250" height="250" customClass={customClass} layers={layers}/>;
            } else if(renderer === 'vanilla') {
              var elPlot  = Vanilla.createElement( PlotVanilla, {width: 250, height: 250, customClass: customClass, layers} );
              plot = <div key={'k'+i} dangerouslySetInnerHTML={{__html: elPlot.outerHTML}} />;
            }
            return <div key={'g'+i}>{plot}</div>
          })
        } else */ if(type === "plots") {
          kids = children.map((plot, i) => {
             var layers = plot.geomLayers.map((Mock, i) => {
               var {data, geom, customClass} = Mock.getLayout().series(Mock.getSeries(), {customClass: "months"});
               const title = Mock.name;
               return {data: data, geom: geom, customClass};
             });
             var plot;
             var guides = plot.guides.map((mock) => { return mock.getLayout(); })
             if(renderer === 'react') {
               guides = guides.map((guide, i) => {
                 guide.props.key = 'g' + i;
                 return guide.render(React.createElement);

                });
               plot = <PlotReact key={'p'+i} width="250" height="250" layers={layers} guides={guides}/>;
             } else if(renderer === 'vanilla') {
               guides = guides.map((guide, i) => {
                 guide.props.key = 'g' + i;
                 return guide.render(Vanilla.createElement);
               });
               var elPlot  = Vanilla.createElement( PlotVanilla, {width: 250, height: 250, layers, guides} );
               plot = <div dangerouslySetInnerHTML={{__html: elPlot.outerHTML}} />;
             }
             return <div key={'g'+i}>{plot}</div>
          })
        }
            /*
        } else {
          kids = <div>{children.join(', ')}</div>
        }
        */
        return <div title={type} className="demo">{kids}</div>;
      };
  }


  render() {
    const {reactCharts, vanillaCharts} = this.state;
    return (<TabbedContainer>
      <page tab="React+SVG"><SectionsGrid sections={reactCharts}/></page>
      <page tab="Vanilla+SVG"><SectionsGrid sections={vanillaCharts}/></page>
    </TabbedContainer>);
  }
}

export default ChartTabs;
