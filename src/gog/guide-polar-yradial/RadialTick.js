/* jshint esnext: true */

class RadialTick {

  constructor(props) {
    this.props = props;
  }

  render(h) {
      var {text, r, axisTheta, addClassName, key} = this.props;
      var rotate = 'rotate('+ (axisTheta || 0) +')';
      var transform =  'translate('+ r + ',' + 0 +')';

      return h('g', {key, className: addClassName ? "tick " + addClassName : "tick"}, [
          h('circle', {key: 'circle', className: "guide", r }),
          h('g', {key: 'g',transform}, [
            h('text', {key: 'label', className:"label",  y:"12",  dy:".71em",  transform:rotate, style:{'textAnchor': 'middle'}}, text),
            h('line', {key: 'mark', className: "mark", y2: 6, x2: 0})
          ])
      ]);
  }
}

export default RadialTick;
