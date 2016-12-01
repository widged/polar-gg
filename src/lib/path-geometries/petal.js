/* jshint esnext: true */

import path   from '../path/PathAnchors';
import Anchor from '../path/Anchor.es6';

export default (props) => {
  var {s, e, c1, c2, m} = props;
  var anchors = [];
  anchors.push(new Anchor("M",0,0));
  anchors.push(new Anchor("L", s.x, s.y));
  anchors.push(new Anchor("Q", c1.x, c1.y, m.x, m.y));
  anchors.push(new Anchor("L", m.x, m.y));
  anchors.push(new Anchor("Q", c2.x, c2.y, e.x, e.y));
  anchors.push(new Anchor("Z"));

  return anchors;
};
