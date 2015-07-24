/* jshint esnext: true */

import RendererSvg from '../shapes-svg/RendererSvg';


class Plot {
  render() {
    const {width, height, children, customClass} = this.props;
    const transform = 'translate(' + (width/2) + ',' + (height/2) + ')';
    const classes = 'chart' + (customClass ? ' ' + customClass : '');

   return `<svg width={width} height={height}>
      <g className={classes} transform={transform}>
        {children}
      </g>
    </svg>`
  }
}


class Layer {

  static augmentProps(props, i, style, options) {
    props.idx = i; 
    props.key = 'geom_' + i; 
    props.className = 'geom g-' + i;
    props.style = style;
    props.options = options; 
    return props;
  }

  render() {
    var {data, shape, options} = this.props;
    var renderer = RendererSvg[shape];

    var renderItem = function(item, i) {
      var {type, props} = renderer(item);
      props = Group.augmentProps(props, i, item.style, options);
      return VanillaSvg.createElementOfTag(type, props);
    };

    return VanillaSvg.createElement('g', {}, data.map(renderItem));
  }
}




export default class VanillaSvg { 

  static reformatStyle(obj) {
    if(typeof obj !== 'object') { return obj; }
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

      var rootEl = document.createElementNS(svgNS,type);
      Object.keys(props).forEach(function(k) {
        var p = props[k];
        if(k === 'style') { p = VanillaSvg.reformatStyle(p); }
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
      var {type, props, children} = RendererSvg[tag](data);
      return VanillaSvg.createElementOfTag(type, props, children);
  }

  static createElementFromFactory(Factory, props, children) {
    var el = new Factory();
    el.props = props;
    el.props.children = children;
    return el.render();
  }

  static createElement(type, props, ...children) {

    if(RendererSvg.hasOwnProperty(type)) { 
      return VanillaSvg.createElementOfShape(type, props);
    } else if(typeof type === 'string') { 
      return VanillaSvg.createElementOfTag(type, props, children);
    } else if(typeof type === 'function') {
      return VanillaSvg.createElementFromFactory(type, props, children);
    }
    return null;
  }
}


VanillaSvg.Plot = Plot;
VanillaSvg.Layer = Layer;
VanillaSvg.Group = Group;


