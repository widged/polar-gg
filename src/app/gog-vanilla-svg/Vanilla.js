/* jshint esnext: true */

class FN {

  static camelToDash(match, p1, offset, string) {
    return '-' + match.toLowerCase();
  }

  static convertKeysToDash(obj) {
    if(!obj || typeof obj !== 'object') { return obj; }
    return Object.keys(obj).reduce(function(acc, key) {
      var nkey = key.replace(/[A-Z]/g, FN.camelToDash);
      acc.push('' + nkey + ':' + obj[key]);
      return acc;
    }, []).join('; ');
  }

  static transferProperties(node, props) {
      Object.keys(props).forEach(function(k) {
        var p = props[k];
        if(p === undefined || p === null || !p) { return; }
        if(k === 'style') { p = FN.convertKeysToDash(p); }
        node.setAttribute(k, p);
      });
  }

  static appendChildren(node, children) {
      (children || []).forEach(function(d) {
        node.appendChild(d);
      });
  }

  static createElementNS(tag) {
      const svgNS = 'http://www.w3.org/2000/svg';
      const htmlNS = 'Use http://www.w3.org/1999/xhtml';
      // full list at: http://www.w3.org/TR/SVG/eltindex.html
      var svgTags = 'svg,g,circle,rect,line,polyline,polygon,ellipse,path,mpath,text'.split(',');
      var tagNS = (svgTags.indexOf(tag) !== -1) ? svgNS : htmlNS;
      return document.createElementNS(tagNS,tag);
  }

  static childrenFromRest(children) {
    // whenever map is used, an array of children is passed under children[0]
    if(Array.isArray(children) && children.length === 1) {
      children = children[0][0];
    }
    return children;
  }

  static createElementOfTag(type, props, ...rest) {
      var node = FN.createElementNS(type);
      FN.transferProperties(node, props);
      var children = FN.childrenFromRest(rest);
      FN.appendChildren(node, children);
      return node;
  }

  static createElementFromFactory(Factory, props, children) {
    var el = new Factory();
    el.props = props;
    el.props.children = children;
    return el.render();
  }
}

export default class Vanilla {

/**
 * Adds commas to a number
 * @param {object} type the type of element to create
 * @param {string} props the properties to transfer to the created element.
 * @param {...list} children the list of chilren to append to the created element.
 * @return {node} a dom node
 */
  static createElement(type, props, ...children) {
     if(typeof type === 'string') {
      return FN.createElementOfTag(type, props, children);
    } else if(typeof type === 'function') {
      return FN.createElementFromFactory(type, props, children);
    }
    return null;
  }

  static htmlize(html) {
    var div = document.createElement('tmp-div');
    div.innerHTML = html;
    return div.children[0];
  }

}
