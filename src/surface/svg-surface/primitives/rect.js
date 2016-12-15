/* jshint esnext: true */

const rect = (props) => {
  const {x, y, width, height} = props;
  return {type: 'rect', props: { x: x, y: y, width: width, height: height }};
};

export default rect;
