/* jshint esnext: true */

import React from 'react';
import Demo        from '../../components/demo/Demo.jsx';
import PrimitiveMocks from './PrimitiveMocks';
import SurfaceContainer from './SurfaceContainer';

const {Component} = React;

class GeomSeries extends Component {

  constructor(props) {
    super(props);
    this.bound  = {
      whenTick: this.whenTick.bind(this)
    };
  }

  whenTick({time}, container) {
    const {surface, geom, series} = this.props;
    surface.renderSeries(geom, series, container);
    console.log('[TICK]', time, container)
  }

 render() {
   console.log(this.props);
   const {whenTick} = this.bound;
   return (
      <SurfaceContainer whenTick={whenTick} realtime={false} />
   );

 }
}

class SvgDemo extends Component {

  constructor(props) {
    super(props);
    this.bound  = { renderItem: this.renderItem.bind(this) };
  }

  renderItem({geom, series}, i) {
    const {renderItem} = this.bound;
    var Section = Demo.Section;
    var {surface} = this.props;
    return (
      <Section title={geom} key={"k"+i}>
        <GeomSeries geom={geom} series={series} surface={surface} />
      </Section>
  );
  }

  render() {
    const {renderItem} = this.bound;
    var shapes = 'polyline'.split(',').map((d) => {
      return PrimitiveMocks[d]();
    });
    // {'arc,dot,dotsquare,rect,petal,polyline,polylineradial'.split(',').map(renderItem)}
    return <Demo className="primitives">
      {shapes.map(renderItem)}
    </Demo>;
  }
}

export default SvgDemo;
