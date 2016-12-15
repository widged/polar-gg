/* jshint esnext: true */

import React from 'react';
const { PropTypes, Component } = React;

class AnimationFramer {

  constructor(whenFrameTick, realtime) {
    this.state = {whenFrameTick, realtime, previousTime: undefined};
  }

  trigger() {
    const { whenFrameTick, realtime } = this.state;
    if(typeof whenFrameTick !== 'function') { return; }
    const nextFrame = (time) => {
      let {previousTime } = this.state;
      time = (Math.round(time * 1000) / 1000);
      if(previousTime !== time) {
        let delta = 0;
        if(!previousTime) { previousTime = time; }
        if(realtime) { requestAnimationFrame(nextFrame); }
        this.state.previousTime = time;
        whenFrameTick({time, delta: time - previousTime});
      }
    };
    requestAnimationFrame(nextFrame);
  }
}

class SurfaceComponent extends Component {

  constructor(props) {
    super(props);
    const { whenTick, realtime } = props;
    const whenFrameTick = (res) => {
      let {time, delta} = res;
      whenTick({time, delta}, this.refs.surface);
    };
    this.state = {framer: new AnimationFramer(whenFrameTick, realtime)};
  }

  componentDidMount() {
    this.forceUpdate();
    const { framer } = this.state;
    framer.trigger();
  }

  render() {
    const { framer } = this.state;
    framer.trigger();
    return <surface ref='surface'></surface>;
  }
}
SurfaceComponent.defaultProps = {
    whenTick     : function() {},
    realtime : false
};
SurfaceComponent.propTypes = {
  whenTick : PropTypes.func,
  realtime : PropTypes.bool
};


export default SurfaceComponent;
