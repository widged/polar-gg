/* jshint esnext: true */

const dotsquare = (props) => {
  const {cx, cy, r} = props;
  const size = r * 2;
  return {type: 'rect', props: { x : cx - r, y : cy - r, width : size, height : size }};
};

export default dotsquare;
