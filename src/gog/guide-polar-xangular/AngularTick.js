/* jshint esnext: true */

class AngularTick  {

    constructor(props) {
        this.props = props;
        this.defaults = { labelOffset: 6};
    }

    render(h) {
        const {key, text, angle, radius, addClassName} = this.props;
        var {labelOffset} = this.props;
        if(labelOffset === undefined || NaN(labelOffset)) { labelOffset = this.defaults.labelOffset; }
        const gTransform = 'rotate(' + (angle || 0) + ')';
        // line mark
        const lineX = [0, radius];
        // text
        const radiusOffset  = radius + labelOffset;
        var textTransform   = 'rotate('+ ((angle && angle <= 180 && angle > 0) ? -90 : 90) +' ' + radiusOffset + ' 0)';

        return h('g', {key, className: addClassName ? "tick " + addClassName : "tick", transform: gTransform}, [
            h('line', {key: 'line', className: "guide", x1:lineX[0], x2:lineX[1]}),
            h('g', {key: 'text', transform: textTransform},
              h('text', {className: "label", x: radiusOffset, dy: ".35em"}, text)
            )
        ]);
    }
}

export default AngularTick;
