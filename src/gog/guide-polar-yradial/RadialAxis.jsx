/* jshint esnext: true */

import React from 'react';

import RadialTick from './RadialTick.js';

const h = (tag, props, children) => {
  return React.createElement(tag, props, children);
};

class RadialAxis {

  constructor(props) {
      this.props = props;
  }

    render(h) {
       const {ticks, scale, space, key} = this.props;
       var lastTick  = ticks[ticks.length-1];
       var axisTheta = space.originTheta;

       var ticksH = ticks.map((d, i) => {
           var r = scale(d.value, i);
           var tick = new RadialTick({key:'k_'+ d.value,  r, text:d.text, addClassName: d.addClassName, axisTheta});
           return tick.render(h);
       });

      return h('g', {key, className: "axis yaxis radial"}, [
        h('line', { key:'line', className:"mark", x:0, x2:scale(lastTick.value)}),
        h('g', { key:'g', className: 'ticks'}, ticksH)
      ]);
  }
}

export default RadialAxis;
