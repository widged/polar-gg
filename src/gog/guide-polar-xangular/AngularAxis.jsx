/* jshint esnext: true */

/* :TODO: delegate to Renderer */

import React from 'react';

import AngularTick from './AngularTick.js';

const h = (tag, props, children) => { return React.createElement(tag, props, children); };

class AngularAxis  {

  constructor(props) {
      this.props = props;
  }

  static renderTick(space, scale) {
      return function(d, i) {
      };
  }

  render(h) {
    const {ticks, space, scale, key} = this.props;
    var radius       = space.radius;
    var originTheta  = space.originTheta;
    var angleFn = (d) => { return (scale(d.value) + originTheta) % 360;  };
	  return h('g', {key, className: "axis xaxis angular"},
            h('g', {className: "ticks"}, ticks.map((d) => {
                var tick = new AngularTick({ key: 'k_'+ d.value,  text: d.text,  addClassName: d.addClassName, angle: angleFn(d), radius});
                return tick.render(h);
              })
            )
          );
  }
}

export default AngularAxis;
