/* jshint esnext: true */

import React from 'react';
import ReactDom from 'react-dom';
import Vanilla    from './gog-vanilla-svg/Vanilla';

// import PrimitivesTwo        from '../primitives-twojs/usage/TwoDemo.jsx';
import TabbedContainer from '../components/tabs/TabbedContainer.jsx';
import SectionsGrid    from './SectionsGrid.jsx';

// import reactRenderer   from '../surface/svg-surface/svgSurface.jsx';

// Plot
import PlotReact    from './gog-react-svg/PlotReactSvg.jsx';
import PlotVanilla    from './gog-vanilla-svg/PlotVanillaSvg.js';
// Guides
import AngularGuide  from '../gog/guide-polar-xangular/usage/AngularGuide-demo.jsx';
import RadialGuide   from '../gog/guide-polar-yradial/usage/RadialGuide-demo.jsx';
// Layouts
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
        PolarPieMock,PolarLineMock,PolarHatMock
      ]},
      {"type": "plots"   ,"children":["Coming Soon!"]}
    ];
    this.state = {
      reactCharts  : charts.map(this.renderGeom("react")),
      vanillaCharts: charts.map(this.renderGeom("vanilla"))
    }
  }

  renderGeom(renderer) {
      return ({type,children}, i) => {
        var kids;
        if(type === "guide") {
          if(renderer === 'react') {
            kids = children.map((d, i) => { return <div key={'g'+i}>{React.createElement(d)}</div>  })
          } else {
            kids = children.map((d, i) => { return <div key={'g'+i}>NA</div>  })
          }
        } else if(type === "geoms") {
          kids = children.map((Mock, i) => {
            var config;;
            if(Mock.getSeries) {
              config = Mock.getLayout().series(Mock.getSeries(), {customClass: "months"});
            } else {
              config = Mock.scenario();
            }
            var {data, geom, customClass} = config;
            const title = Mock.name;
            var layers = [{data: data, geom: geom}];
            var plot;
            if(renderer === 'react') {
              plot = <PlotReact width="250" height="250" customClass={customClass} layers={layers}/>;
            } else if(renderer === 'vanilla') {
              var elPlot  = Vanilla.createElement(
                PlotVanilla,
                {width: 250, height: 250, customClass: customClass, layers: [{data: data, geom: geom}]}
              );
              plot = <div dangerouslySetInnerHTML={{__html: elPlot.outerHTML}} />;
            }
            return <div key={'g'+i}>{plot}</div>
          })
        } else {
          kids = <div>{children.join(', ')}</div>
        }
        return <div title={type} className="demo">{kids}</div>// (<GeomSeries title={geom} geom={geom} series={series} surface={surface} />);
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

/*
    var reactDemo = document.createElement('div');
    document.body.appendChild(reactDemo);
    React.render(<ReactSvgDemo />, reactDemo);


    var vanillaDemo = document.createElement('div');
    document.body.appendChild(vanillaDemo);
    React.render(<VanillaSvgDemo />, vanillaDemo);
*/

        /*
        var activePane = this.state.activePane;
        var panes = this.props.children.reduce(function(acc, item) {
            const {title, children} = item.props;
            acc.push({title: title, content: children});
            return acc;
        }, []);
        var handlePaneChange = this.handlePaneChange.bind(this);
        var Tabs = React.createElement('ul', {}, panes.map(function(pane, i) {
            var isActive = (i === activePane) ? true : false;
            return <li className={isActive ? 'active' : null} data-pane={i} onClick={handlePaneChange}>{pane.title}</li>;
        }));
        */
