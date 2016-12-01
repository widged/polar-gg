/* jshint esnext: true */

import Anchor from '../path/Anchor.es6';


export default (props) => {
  var {lines} = props;
  var anchors = [];
  anchors.push(new Anchor('M'+ lines.join('L')));
  anchors.push(new Anchor('Z'));
  return anchors;
};
