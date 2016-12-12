/* jshint esnext: true */

const drawCircle = (props) => {
	var {cx,cy,r} = props;
	var bb = new BoundingBox(cx - r, cy - r, cx + r, cy + r);
	var cmds = [
		['beginPath'],
		['arc', [cx, cy, r, 0, Math.PI * 2, true]],
		['closePath']
	];
	return {bb, cmds};
};
