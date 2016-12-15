/* jshint esnext: true */

import Anchor from '../path/Anchor.es6';
import Commands from '../path/CommandTypes';

const {CLOSEPATH, CURVETO, MOVETO, LINETO, ARCTO, QUADCURVE, rHLINETO, rVLINETO} = Commands;

export default (props) => {
  var {s, e, c1, c2, m} = props;
  var anchors = [];
  anchors.push(new Anchor(MOVETO,0,0));
  anchors.push(new Anchor(LINETO, s.x, s.y));
  anchors.push(new Anchor(QUADCURVE, c1.x, c1.y, m.x, m.y));
  anchors.push(new Anchor(LINETO, m.x, m.y));
  anchors.push(new Anchor(QUADCURVE, c2.x, c2.y, e.x, e.y));
  anchors.push(new Anchor(CLOSEPATH));

  return anchors;
};
