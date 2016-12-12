/* jshint esnext: true */

import Anchor from '../path/Anchor.es6';
import Commands from '../path/CommandTypes';

const {CLOSEPATH, CURVETO, MOVETO, LINETO, ARCTO, QUADCURVE, rHLINETO, rVLINETO} = Commands;


export default (props) => {
  const {x, y, w, h} = props;
  var anchors = [];
  anchors.push(new Anchor(MOVETO, +x, +y));
  anchors.push(new Anchor(rHLINETO, +w));
  anchors.push(new Anchor(rVLINETO, +h));
  anchors.push(new Anchor(rHLINETO, -h));
  anchors.push(new Anchor(CLOSEPATH));
  return {anchors, endPoint: [+x,+y]};
};
