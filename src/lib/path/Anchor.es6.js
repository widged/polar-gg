/* jshint esnext: true */

const round3 = (d) => {
  return Math.round(d * 1000) / 1000;
};

class Anchor {
    constructor(cmd, x, y, ...extras) {
      this.state = { cmd, x, y, extras };
    }

    svgString() {
      var { cmd, x, y, extras } = this.state;
      var more = [];
      if(x      !== undefined) { more = more.concat([x,y]); }
      if(extras !== undefined) { more = more.concat(extras); }
      return '' + cmd + (more.length ? more.map((d) => { return round3(d); }).join(' ') : '');
    }
}


export default Anchor;
