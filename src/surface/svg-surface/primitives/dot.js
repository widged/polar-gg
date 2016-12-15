/* jshint esnext: true */

const dot = (props) => {
  const {cx, cy, r} = props;
  return {type: 'circle', props: {  cx : cx, cy : cy,  r : r }};
};

export default dot;
