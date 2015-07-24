/* jshint esnext: true */

class Utils {
  static reformatStyle(obj) {

      if(!obj || typeof obj !== 'object') { return obj; }

      function camelToDash(match, p1, offset, string) {
        return '-' + match.toLowerCase();
      }
      
      return Object.keys(obj).reduce(function(acc, key) {
        var nkey = key.replace(/[A-Z]/g, camelToDash);
        acc.push('' + nkey + ':' + obj[key]);
        return acc;
      }, []).join('; ');
    }

    static createElementOfTag(type, props, ...children) {
        const svgNS = 'http://www.w3.org/2000/svg';
        const htmlNS = 'Use http://www.w3.org/1999/xhtml';
        // full list at: http://www.w3.org/TR/SVG/eltindex.html
        var svgTags = 'svg,g,circle,rect,line,polyline,polygon,ellipse,path,mpath,text'.split(',');

        var tagNS = (svgTags.indexOf(type) !== -1) ? svgNS : htmlNS;

        var rootEl = document.createElementNS(tagNS,type);
        Object.keys(props).forEach(function(k) {
          var p = props[k];
          if(k === 'style') { p = Utils.reformatStyle(p); }
          rootEl.setAttribute(k, p);
        });

        // whenever map is used.
        if(Array.isArray(children) && Array.isArray(children[0])) { 
          children = children[0][0]; 
        }
        (children || []).forEach(function(d) {
          rootEl.appendChild(d);
        });
        return rootEl;
    }

    static createElementOfShape(tag, data) {
    }

    static createElementFromFactory(Factory, props, children) {
      var el = new Factory();
      el.props = props;
      el.props.children = children;
      return el.render();
    }  
}

export default class Vanilla { 
  static createElement(type, props, ...children) {
     if(typeof type === 'string') {
      return Utils.createElementOfTag(type, props, children);
    } else if(typeof type === 'function') {
      return Utils.createElementFromFactory(type, props, children);
    }
    return null;
  }

}