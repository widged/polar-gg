(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-dom'), require('d3-shape'), require('d3-scale'), require('d3'), require('d3-array')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom', 'd3-shape', 'd3-scale', 'd3', 'd3-array'], factory) :
	(factory(global.React,global.ReactDom,global.d3Shape,global.d3Scale,global.d3,global.d3Array));
}(this, (function (React,ReactDom,d3Shape,d3Scale,d3,d3Array) { 'use strict';

React = 'default' in React ? React['default'] : React;
ReactDom = 'default' in ReactDom ? ReactDom['default'] : ReactDom;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

/* jshint esnext: true */

var Section = function (_React$Component) {
  inherits(Section, _React$Component);

  function Section() {
    classCallCheck(this, Section);
    return possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
  }

  createClass(Section, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          children = _props.children;

      return React.createElement('section', null, [React.createElement('title', null, [title]), children]);
    }
  }]);
  return Section;
}(React.Component);

var Demo = function (_React$Component2) {
  inherits(Demo, _React$Component2);

  function Demo() {
    classCallCheck(this, Demo);
    return possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));
  }

  createClass(Demo, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className;

      return React.createElement('demo', { className: className }, [children]);
    }
  }]);
  return Demo;
}(React.Component);

Demo.Section = Section;

/* jshint esnext: true */

var FN = {};

FN.arcFn = d3Shape.arc().startAngle(function (d) {
  return d.startAngle || 0;
}).endAngle(function (d) {
  return d.endAngle;
}).innerRadius(function (d) {
  return d.innerRadius || 0;
}).outerRadius(function (d) {
  return d.outerRadius;
});

FN.radialFn = d3Shape.radialLine().radius(function (d) {
  return d.radius;
}).angle(function (d) {
  return d.angle;
});

var RendererSvg = function () {
  function RendererSvg() {
    classCallCheck(this, RendererSvg);
  }

  createClass(RendererSvg, null, [{
    key: 'arc',
    value: function d3Shape.arc(props) {
      var startAngle = props.startAngle,
          endAngle = props.endAngle,
          innerRadius = props.innerRadius,
          outerRadius = props.outerRadius,
          rotate = props.rotate;

      var transform = 'rotate(' + (rotate || 0) + ')';
      var d = FN.arcFn({ startAngle: startAngle, endAngle: endAngle, innerRadius: innerRadius, outerRadius: outerRadius });
      return { type: 'path', props: { d: d, transform: transform } };
    }
  }, {
    key: 'dot',
    value: function dot(props) {
      var cx = props.cx,
          cy = props.cy,
          r = props.r,
          rotate = props.rotate;

      var transform = 'rotate(' + (rotate || 0) + ')';
      return { type: 'circle', props: { cx: cx, cy: cy, r: r, transform: transform } };
    }
  }, {
    key: 'dotsquare',
    value: function dotsquare(props) {
      var cx = props.cx,
          cy = props.cy,
          r = props.r,
          rotate = props.rotate;

      var size = r * 2;
      var transform = 'rotate(' + (rotate || 0) + ')';
      return { type: 'rect', props: { x: cx - r, y: cy - r, width: size, height: size, transform: transform } };
    }
  }, {
    key: 'petal',
    value: function petal(props) {
      var rotate = props.rotate,
          s = props.s,
          e = props.e,
          c1 = props.c1,
          c2 = props.c2,
          m = props.m;

      var d = "M0,0L" + s.x + "," + s.y + "Q" + c1.x + "," + c1.y + " " + m.x + "," + m.y + "L" + m.x + "," + m.y + "Q" + c2.x + "," + c2.y + " " + e.x + "," + e.y + "Z";
      var transform = 'rotate(' + (rotate || 0) + ')';
      return { type: 'path', props: { d: d, transform: transform } };
    }
  }, {
    key: 'rect',
    value: function rect(props) {
      var x = props.x,
          y = props.y,
          width = props.width,
          height = props.height,
          rotate = props.rotate,
          translate = props.translate;

      var transform = 'rotate(' + (rotate || 0) + ')';
      return { type: 'rect', props: { x: x, y: y, width: width, height: height, transform: transform } };
    }
  }, {
    key: 'polyline',
    value: function polyline(props) {
      var rotate = props.rotate,
          translate = props.translate,
          lines = props.lines;

      var transform = 'rotate(' + (rotate || 0) + '), translate(' + (translate || "0, 0") + ')';
      var d = 'M' + lines.join('L') + 'Z';
      return { type: 'path', props: { d: d, transform: transform } };
    }
  }, {
    key: 'polylineradial',
    value: function polylineradial(props) {
      var rotate = props.rotate,
          radiallines = props.radiallines;

      var transform = 'rotate(' + (rotate || 0) + ')';
      var d = FN.radialFn(radiallines);
      return { type: 'path', props: { d: d, transform: transform } };
    }
  }]);
  return RendererSvg;
}();

/* jshint esnext: true */

var PrimitiveMocks = function () {
  function PrimitiveMocks() {
    classCallCheck(this, PrimitiveMocks);
  }

  createClass(PrimitiveMocks, null, [{
    key: "arc",
    value: function arc() {
      return [{ "startAngle": 2.30, "endAngle": 3.23, "innerRadius": 56, "outerRadius": 112, "rotate": 0, "style": { fill: "blue" } }, { "startAngle": 2.76, "endAngle": 2.99, "innerRadius": 56, "outerRadius": 112, "rotate": 0, "style": { fill: "yellow" } }, { "startAngle": 2.30, "endAngle": 2.76, "innerRadius": 56, "outerRadius": 112, "rotate": 0, "style": { fill: "orange" } }, { "startAngle": 1.64, "endAngle": 2.29, "innerRadius": 56, "outerRadius": 112, "rotate": 0, "style": { fill: "red" } }, { "startAngle": 0.94, "endAngle": 1.64, "innerRadius": 56, "outerRadius": 112, "rotate": 0, "style": { fill: "green" } }];
    }
  }, {
    key: "dot",
    value: function dot() {
      return [{ "rotate": 0, "r": 6.4, "cx": 60, "cy": 60, "style": { fill: "green" } }, { "rotate": 0, "r": 10.7, "cx": 90, "cy": 60, "style": { fill: "red" } }, { "rotate": 0, "r": 12.9, "cx": 30, "cy": 90, "style": { fill: "orange" } }, { "rotate": 0, "r": 11.8, "cx": 60, "cy": 90, "style": { fill: "blue" } }, { "rotate": 0, "r": 8.6, "cx": 90, "cy": 90, "style": {} }, { "rotate": 0, "r": 4.3, "cx": 30, "cy": 120, "style": {} }, { "rotate": 0, "r": 4.3, "cx": 60, "cy": 120, "style": {} }, { "rotate": 0, "r": 7.5, "cx": 90, "cy": 120, "style": {} }, { "rotate": 0, "r": 12.9, "cx": 30, "cy": 30, "style": {} }, { "rotate": 0, "r": 13.9, "cx": 60, "cy": 30, "style": {} }, { "rotate": 0, "r": 12.9, "cx": 90, "cy": 30, "style": {} }, { "rotate": 0, "r": 8.6, "cx": 30, "cy": 60, "style": {} }];
    }
  }, {
    key: "dotsquare",
    value: function dotsquare() {
      return [{ "rotate": 0, "r": 6.4, "cx": 60, "cy": 60, "style": { fill: "green" } }, { "rotate": 0, "r": 10.7, "cx": 90, "cy": 60, "style": { fill: "red" } }, { "rotate": 0, "r": 12.9, "cx": 30, "cy": 90, "style": { fill: "orange" } }, { "rotate": 0, "r": 11.8, "cx": 60, "cy": 90, "style": { fill: "blue" } }, { "rotate": 0, "r": 8.6, "cx": 90, "cy": 90, "style": {} }, { "rotate": 0, "r": 4.3, "cx": 30, "cy": 120, "style": {} }, { "rotate": 0, "r": 4.3, "cx": 60, "cy": 120, "style": {} }, { "rotate": 0, "r": 7.5, "cx": 90, "cy": 120, "style": {} }, { "rotate": 0, "r": 12.9, "cx": 30, "cy": 30, "style": {} }, { "rotate": 0, "r": 13.9, "cx": 60, "cy": 30, "style": {} }, { "rotate": 0, "r": 12.9, "cx": 90, "cy": 30, "style": {} }, { "rotate": 0, "r": 8.6, "cx": 30, "cy": 60, "style": {} }];
    }
  }, {
    key: "rect",
    value: function rect() {
      return [{ "x": 20.83, "y": 72.14, "width": 19, "height": 177.86, "style": { fill: "green" } }, { "x": 41.67, "y": 36.57, "width": 19, "height": 213.43, "style": { fill: "red" } }, { "x": 62.50, "y": 54.36, "width": 19, "height": 195.64, "style": { fill: "orange" } }, { "x": 83.33, "y": 107.71, "width": 19, "height": 142.29, "style": { fill: "blue" } }];
    }
  }, {
    key: "petal",
    value: function petal() {
      return [{ "rotate": -15.98130841121494, "s": { "x": 53.967881425250745, "y": -19.842322809340537 }, "c1": { "x": 84.11732786846085, "y": -19.842322809340537 }, "m": { "x": 110.73465573692171, "y": 0 }, "c2": { "x": 84.11732786846085, "y": 19.842322809340537 }, "e": { "x": 53.96788142525074, "y": 19.842322809340537 }, "style": { fill: "green" } }, { "rotate": 22.710280373831807, "s": { "x": 54.52712197603583, "y": -18.249464896552738 }, "c1": { "x": 82.98415123730265, "y": -18.249464896552738 }, "m": { "x": 108.46830247460531, "y": 0 }, "c2": { "x": 82.98415123730265, "y": 18.249464896552738 }, "e": { "x": 54.52712197603583, "y": 18.249464896552738 }, "style": { fill: "red" } }, { "rotate": 54.672897196261715, "s": { "x": 55.92110814946013, "y": -13.382064987750717 }, "c1": { "x": 79.23295719803056, "y": -13.382064987750717 }, "m": { "x": 100.96591439606112, "y": 0 }, "c2": { "x": 79.23295719803056, "y": 13.382064987750717 }, "e": { "x": 55.92110814946013, "y": 13.382064987750717 }, "style": { fill: "orange" } }, { "rotate": 74.85981308411218, "s": { "x": 57.10391281949932, "y": -6.737443187368721 }, "c1": { "x": 72.8675214099644, "y": -6.737443187368721 }, "m": { "x": 88.23504281992881, "y": 0 }, "c2": { "x": 72.8675214099644, "y": 6.737443187368721 }, "e": { "x": 57.10391281949932, "y": 6.737443187368721 }, "style": { fill: "yellow" } }, { "rotate": 88.31775700934583, "s": { "x": 57.10391281949932, "y": -6.737443187368721 }, "c1": { "x": 72.8675214099644, "y": -6.737443187368721 }, "m": { "x": 88.23504281992881, "y": 0 }, "c2": { "x": 72.8675214099644, "y": 6.737443187368721 }, "e": { "x": 57.10391281949932, "y": 6.737443187368721 }, "style": { fill: "blue" } }];
    }
  }, {
    key: "polyline",
    value: function polyline() {
      return [{ "rotate": 30, "translate": "74.29, 0", "lines": [[0, 0], [-54.29, 10], [-54.29, -10]], "style": { fill: "red" } }, { "rotate": 0, "translate": "94.64, 0", "lines": [[0, 0], [-74.64, 10], [-74.64, -10]], "style": { fill: "blue" } }, { "rotate": 60, "translate": "47.14, 0", "lines": [[0, 0], [-27.14, 10], [-27.14, -10]], "style": { fill: "orange" } }, { "rotate": 90, "translate": "47.14, 0", "lines": [[0, 0], [-27.14, 10], [-27.14, -10]], "style": { fill: "green" } }];
    }
  }, {
    key: "polylineradial",
    value: function polylineradial() {
      return [{ radiallines: [{ "radius": 80, "angle": 0.52 }, { "radius": 126, "angle": 1.047 }, { "radius": 188, "angle": 1.57 }, { "radius": 164, "angle": 2.09 }, { "radius": 132, "angle": 2.62 }, { "radius": 132, "angle": 3.14 }, { "radius": 156, "angle": 3.67 }, { "radius": 196, "angle": 4.19 }, { "radius": 104, "angle": 4.71 }, { "radius": 96, "angle": 5.26 }, { "radius": 64, "angle": 5.76 }],
        "rotate": 0, "style": { fill: "orange" }
      }, { radiallines: [{ "radius": 80, "angle": 0.52 }, { "radius": 96, "angle": 1.08 }, { "radius": 88, "angle": 1.57 }, { "radius": 64, "angle": 2.09 }, { "radius": 32, "angle": 2.62 }, { "radius": 32, "angle": 3.14 }, { "radius": 56, "angle": 3.67 }, { "radius": 96, "angle": 4.19 }, { "radius": 104, "angle": 4.71 }, { "radius": 96, "angle": 5.24 }, { "radius": 64, "angle": 5.76 }],
        "rotate": 0, "style": { fill: "green" }
      }];
      /*
      {radiallines: [
          {"radius": 47,"angle":2.0},
          {"radius": 57,"angle":2.1},
          {"radius": 68,"angle":2.2},
          {"radius": 77,"angle":2.3},
          {"radius": 85,"angle":2.4},
          {"radius": 93,"angle":2.5},
          {"radius":100,"angle":2.6},
          {"radius":105,"angle":2.7},
          {"radius":109,"angle":2.8},
          {"radius":112,"angle":2.9}
        ],"style":{stroke: "blue", fill: "transparent"}}
      */
    }
  }]);
  return PrimitiveMocks;
}();

/* jshint esnext: true */

var SvgDemo = function (_React$Component) {
  inherits(SvgDemo, _React$Component);

  function SvgDemo(props) {
    classCallCheck(this, SvgDemo);

    var _this = possibleConstructorReturn(this, (SvgDemo.__proto__ || Object.getPrototypeOf(SvgDemo)).call(this, props));

    _this.bound = {
      renderItem: _this.renderItem.bind(_this)
    };
    return _this;
  }

  createClass(SvgDemo, [{
    key: 'renderShape',
    value: function renderShape(data, primitive) {
      var shapes = data.map(function (d, i) {
        var out = RendererSvg[primitive](d);
        out.props.style = d.style;
        return React.createElement(out.type, Object.assign(out.props, { key: 'k' + i }));
      });
      return shapes;
    }
  }, {
    key: 'renderItem',
    value: function renderItem(primitive, i) {
      var shapes = PrimitiveMocks[primitive]();
      var title = primitive;
      var Section = Demo.Section;
      return Section({ title: title, key: "k" + i }, [React.createElement('svg', null, [React.createElement('g', null, [this.renderShape(shapes, primitive)])])]);
    }
  }, {
    key: 'render',
    value: function render() {

      var renderItem = this.bound.renderItem;
      return Demo({ className: "primitives" }, ['arc,dot,dotsquare,rect,petal,polyline,polylineradial'.split(',').map(renderItem)]);
    }
  }]);
  return SvgDemo;
}(React.Component);

/* jshint esnext: true */

var Component$1 = React.Component;

var Layer = function (_Component) {
  inherits(Layer, _Component);

  function Layer() {
    classCallCheck(this, Layer);
    return possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).apply(this, arguments));
  }

  createClass(Layer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          geom = _props.geom,
          options = _props.options;

      var renderer = RendererSvg[geom];

      var renderItem = function renderItem(item, i) {
        var _renderer = renderer(item),
            type = _renderer.type,
            props = _renderer.props;

        props = Layer.augmentProps(props, i, item.style, options);
        return React.createElement(type, props);
      };

      return React.createElement('g', {}, data.map(renderItem));
    }
  }], [{
    key: 'augmentProps',
    value: function augmentProps(props, i, style, options) {
      props.idx = i;
      props.key = 'geom_' + i;
      props.className = 'geom g-' + i;
      props.style = style;
      props.options = options;
      return props;
    }
  }]);
  return Layer;
}(Component$1);

/* jshint esnext: true */

var Component = React.Component;

var Plot = function (_Component) {
  inherits(Plot, _Component);

  function Plot() {
    classCallCheck(this, Plot);
    return possibleConstructorReturn(this, (Plot.__proto__ || Object.getPrototypeOf(Plot)).apply(this, arguments));
  }

  createClass(Plot, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          children = _props.children,
          customClass = _props.customClass,
          layers = _props.layers;

      var transform = 'translate(' + width / 2 + ',' + height / 2 + ')';
      var classes = 'chart' + (customClass ? ' ' + customClass : '');

      //


      return React.createElement('svg', { width: width, height: height }, [React.createElement('g', { className: classes, transform: transform }, [layers.map(function (_ref) {
        var data = _ref.data,
            geom = _ref.geom;

        console.log('layer');
        return Layer({ data: data, geom: geom });
      })])]);
    }
  }]);
  return Plot;
}(Component);

/* jshint esnext: true */

var Scale = function () {
    function Scale() {
        classCallCheck(this, Scale);
    }

    createClass(Scale, null, [{
        key: "fromCoord",
        value: function fromCoord(coord) {
            var type = coord.scale;
            var out;
            if (type === undefined || type === 'linear') {
                if (!coord.range) {
                    coord.range = coord.domain;
                }
                out = d3Scale.scaleLinear().domain(coord.domain).range(coord.range);
            }
            return out;
        }
    }, {
        key: "getScaleFn",
        value: function getScaleFn(obj) {
            var coord = obj.coord,
                dataFn = obj.dataFn;

            var scale = Scale.fromCoord(coord);
            return function (d, i) {
                return scale(dataFn(d, i));
            };
        }
    }]);
    return Scale;
}();

/* jshint esnext: true */

var listTicks = function (config) {
    var defaults = { minorQty: 0, majorQty: 4 };

    var major = getMajor(config.majorQty || defaults.majorQty, config.majorFmt, config.perimeter, config.majorStep, config.major, config.majorSuffix);
    var minor = getMinor(config.minorQty || defaults.minorQty, config.minorFmt, config.perimeter, config.minorStep, major.qty);

    minor.ticks = [];
    for (var j = 0, nj = minor.qty; j < nj; j++) {
        minor.ticks.push('x');
    }

    var all = [];
    for (var i = 0, ni = major.qty; i < ni; i++) {
        all.push(i);
        all = all.concat(minor.ticks);
    }

    var out = all.map(function (d, i) {
        var obj = {};
        if (d + 0 === d) {
            obj = major.fn(d, i);
            obj.addClassName = 'major';
        } else {
            obj = minor.fn(d, i);
        }
        if (!obj.hasOwnProperty('value')) {
            obj.value = i;
        }
        return obj;
    });

    return out;
};

function identityFn(d) {
    return d;
}

function getMajor(majorQty, majorFmt, perimeter, majorStep, labels, majorSuffix) {
    var out;
    if (typeof majorFmt !== 'function') {
        majorFmt = identityFn;
    }

    if (labels) {
        out = {
            qty: labels.length,
            fn: function fn(d, i) {
                return formatTick(labels[d], i, majorFmt, majorSuffix);
            }
        };
    } else {
        out = {
            qty: majorQty,
            fn: function fn(d, i) {
                return formatTick(i, i, majorFmt, majorSuffix);
            }
        };
    }

    if (perimeter) {
        majorStep = perimeter / out.qty;
    }
    if (majorStep) {
        out.fn = function (d, i) {
            return formatTick(majorStep * d, i, majorFmt, majorSuffix);
        };
    }
    return out;
}

function getMinor(minorQty, minorFmt, perimeter, minorStep, majorQty) {
    if (typeof minorFmt !== 'function') {
        minorFmt = identityFn;
    }
    var out = {
        qty: minorQty,
        fn: function fn(d, i) {
            return Ticks.formatTick(d, i, minorFmt, '');
        }
    };

    if (perimeter && out.qty > 0) {
        minorStep = perimeter / (majorQty * (1 + out.qty));
    }
    if (minorStep) {
        out.fn = function (d, i) {
            return formatTick(minorStep * i, i, minorFmt, '');
        };
    }
    return out;
}

function formatTick(text, value, fmtFn, sfx) {
    if (value === undefined) {
        value = text;
    }
    if (typeof fmtFn === 'function') {
        text = fmtFn(text);
    }
    if (typeof sfx === 'string') {
        text = text + sfx;
    }
    return { text: '' + text, value: value };
}

/* jshint esnext: true */

/* :TODO: delegate to Renderer */

var AngularTick = function (_React$Component) {
    inherits(AngularTick, _React$Component);

    function AngularTick(props) {
        classCallCheck(this, AngularTick);

        var _this = possibleConstructorReturn(this, (AngularTick.__proto__ || Object.getPrototypeOf(AngularTick)).call(this));

        _this.defaults = { labelOffset: 6 };
        return _this;
    }

    createClass(AngularTick, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                text = _props.text,
                angle = _props.angle,
                radius = _props.radius,
                addClassName = _props.addClassName;
            var labelOffset = this.props.labelOffset;

            if (labelOffset === undefined || NaN(labelOffset)) {
                labelOffset = this.defaults.labelOffset;
            }

            var gTransform = 'rotate(' + angle + ')';

            // line mark
            var lineX = [0, radius];

            // text
            var radiusOffset = radius + labelOffset;
            var textTransform = 'rotate(' + (angle <= 180 && angle > 0 ? -90 : 90) + ' ' + radiusOffset + ' 0)';

            return React.createElement('g', { className: addClassName ? "tick " + addClassName : "tick", transform: gTransform }, [React.createElement('line', { className: "guide", x1: lineX[0], x2: lineX[1] }), React.createElement('g', { transform: textTransform }, [React.createElement('text', { className: "label", x: radiusOffset, dy: ".35em" }, [text])])]);
        }
    }]);
    return AngularTick;
}(React.Component);

/* jshint esnext: true */

/* :TODO: delegate to Renderer */

var AngularAxis = function (_React$Component) {
    inherits(AngularAxis, _React$Component);

    function AngularAxis(props) {
        classCallCheck(this, AngularAxis);
        return possibleConstructorReturn(this, (AngularAxis.__proto__ || Object.getPrototypeOf(AngularAxis)).call(this));
    }

    createClass(AngularAxis, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                ticks = _props.ticks,
                space = _props.space,
                scale = _props.scale;


            return React.createElement('g', { className: "axis xaxis angular" }, [React.createElement('g', { className: "ticks" }, [ticks.map(AngularAxis.renderTick(space, scale))])]);
        }
    }], [{
        key: 'renderTick',
        value: function renderTick(space, scale) {
            var radius = space.radius;
            var originTheta = space.originTheta;
            return function (d, i) {
                var angle = (scale(d.value) + originTheta) % 360;
                return AngularTick({ key: 'k_' + d.value, text: d.text, addClassName: d.addClassName, angle: angle, radius: radius });
            };
        }
    }]);
    return AngularAxis;
}(React.Component);

/* jshint esnext: true */

var AngularDemo = function (_React$Component) {
	inherits(AngularDemo, _React$Component);

	function AngularDemo() {
		classCallCheck(this, AngularDemo);
		return possibleConstructorReturn(this, (AngularDemo.__proto__ || Object.getPrototypeOf(AngularDemo)).apply(this, arguments));
	}

	createClass(AngularDemo, [{
		key: 'render',
		value: function render() {
			var space = { height: 250, width: 250, margin: 0, radius: 115, originTheta: 0 };
			var coord = { domain: [0, 14], range: [0, 360], scale: 'linear' };

			var scale = Scale.fromCoord(coord);
			var ticks = listTicks({ "perimeter": 14, "minorQty": 1, "majorQty": 7 });

			return React.createElement('svg', { width: "250", height: "250" }, [React.createElement('g', { className: "chart-group", transform: "translate(125,125)" }, [AngularAxis({ ticks: ticks, space: space, scale: scale })])]);
		}
	}]);
	return AngularDemo;
}(React.Component);

/* jshint esnext: true */

var RadialMark = function (_React$Component) {
    inherits(RadialMark, _React$Component);

    function RadialMark() {
        classCallCheck(this, RadialMark);
        return possibleConstructorReturn(this, (RadialMark.__proto__ || Object.getPrototypeOf(RadialMark)).apply(this, arguments));
    }

    createClass(RadialMark, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                text = _props.text,
                r = _props.r,
                axisTheta = _props.axisTheta,
                addClassName = _props.addClassName;

            var rotate = 'rotate(' + axisTheta + ')';
            var transform = 'translate(' + r + ',' + 0 + ')';

            return React.createElement('g', { className: addClassName ? "tick " + addClassName : "tick" }, [React.createElement('circle', { className: "guide", r: r }), React.createElement('g', { transform: transform }, [React.createElement('text', { className: "label", y: "12", dy: ".71em", rotate: rotate, style: { textAnchor: 'middle' } }, [text]), React.createElement('line', { className: "mark", y2: "6", x2: "0" })])]);
        }
    }]);
    return RadialMark;
}(React.Component);

/* jshint esnext: true */

var AngularAxis$2 = function (_React$Component) {
    inherits(AngularAxis, _React$Component);

    function AngularAxis() {
        classCallCheck(this, AngularAxis);
        return possibleConstructorReturn(this, (AngularAxis.__proto__ || Object.getPrototypeOf(AngularAxis)).apply(this, arguments));
    }

    createClass(AngularAxis, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                ticks = _props.ticks,
                scale = _props.scale,
                space = _props.space;

            var lastTick = ticks[ticks.length - 1];
            return React.createElement('g', { className: "axis yaxis radial" }, [React.createElement('line', { className: "mark", x: 0, x2: scale(lastTick.value) }), React.createElement('g', { className: "ticks" }, [ticks.map(AngularAxis.renderTick(space, scale))])]);
        }
    }], [{
        key: 'renderTick',
        value: function renderTick(space, scaleFn) {
            var axisTheta = space.originTheta;
            return function (d, i) {
                var r = scaleFn(d.value, i);
                return RadialMark({ key: 'k_' + d.value, r: r, text: d.text, addClassName: d.addClassName, axisTheta: axisTheta });
            };
        }
    }]);
    return AngularAxis;
}(React.Component);

/* jshint esnext: true */

var RadialDemo = function (_React$Component) {
	inherits(RadialDemo, _React$Component);

	function RadialDemo() {
		classCallCheck(this, RadialDemo);
		return possibleConstructorReturn(this, (RadialDemo.__proto__ || Object.getPrototypeOf(RadialDemo)).apply(this, arguments));
	}

	createClass(RadialDemo, [{
		key: 'render',
		value: function render() {
			var space = { height: 250, width: 250, margin: 0, radius: 115, originTheta: 0 };
			var coord = { domain: [0, 5], range: [0, space.radius], scale: 'linear' };
			var scale = Scale.fromCoord(coord);

			var ticks = listTicks({ "showCircle": true, majorSuffix: '', majorQty: 6 });

			return React.createElement('svg', { width: "250", height: "250" }, [React.createElement('g', { className: "chart", transform: "translate(125,125)" }, [AngularAxis$2({ ticks: ticks, scale: scale, space: space })])]);
		}
	}]);
	return RadialDemo;
}(React.Component);

/* jshint esnext: true */

var FN$1 = function () {
  function FN() {
    classCallCheck(this, FN);
  }

  createClass(FN, null, [{
    key: 'isStyle',
    value: function isStyle(key) {
      var styles = "fill,stroke,fillOpacity".split(',');
      return styles.indexOf(key) !== -1;
    }
  }, {
    key: 'extrapolateStyles',
    value: function extrapolateStyles(styleVariants) {
      return function (d, idx) {
        return Object.keys(styleVariants).reduce(function (acc, key) {
          var fn = styleVariants[key].scaleFn;
          if (FN.isStyle(key) && typeof fn === 'function') {
            if (!acc) {
              acc = {};
            }
            acc[key] = fn(d, idx);
          }
          return acc;
        }, null);
      };
    }
  }, {
    key: 'extrapolateScales',
    value: function extrapolateScales(aes) {
      Object.keys(aes).forEach(function (key) {
        var dim = aes[key];
        dim.scale = Scale.fromCoord(dim.coord);
        dim.scaleFn = Scale.getScaleFn(dim);
      });
    }
  }]);
  return FN;
}();

var Layout = function () {
  function Layout() {
    classCallCheck(this, Layout);
  }

  createClass(Layout, null, [{
    key: 'geom',
    value: function geom(GeomLayout, aes, space, options) {
      FN$1.extrapolateScales(aes);
      // layout can depend on x, y, z, and size
      var reduceFn = GeomLayout.reduce ? GeomLayout.reduce(aes, space, options) : null;
      var layoutFn = GeomLayout.layout(aes, space, options);
      var styleFn = FN$1.extrapolateStyles(aes);

      return function (data) {
        if (typeof reduceFn === 'function') {
          data = reduceFn(data);
        }
        return data.map(function (d, i) {
          var obj = layoutFn(d, i);
          obj.style = styleFn(d, i);
          return obj;
        });
      };
    }
  }]);
  return Layout;
}();

/* jshint esnext: true */

var Monthly = function () {
  function Monthly() {
    classCallCheck(this, Monthly);
  }

  createClass(Monthly, null, [{
    key: "xyFrom",
    value: function xyFrom(obj) {
      return Object.keys(obj).map(function (key, i) {
        return [i, obj[key]];
      });
    }
  }]);
  return Monthly;
}();

/* jshint esnext: true */

var Polar = function () {
    function Polar() {
        classCallCheck(this, Polar);
    }

    createClass(Polar, null, [{
        key: "radiusFromSize",
        value: function radiusFromSize(width, height, margin) {
            return Math.min(width, height) / 2 - margin;
        }
    }, {
        key: "radiansFromDegrees",
        value: function radiansFromDegrees(degrees) {
            return degrees * Math.PI / 180;
        }
    }, {
        key: "degreesFromRadians",
        value: function degreesFromRadians(radians) {
            return radians / Math.PI * 180;
        }
    }, {
        key: "polarToCartesian",
        value: function polarToCartesian(angle, radius) {
            return {
                x: Math.cos(angle) * radius,
                y: Math.sin(angle) * radius
            };
        }
    }]);
    return Polar;
}();

/* jshint esnext: true */

var LayoutPolarLine = function () {
    function LayoutPolarLine() {
        classCallCheck(this, LayoutPolarLine);
    }

    createClass(LayoutPolarLine, null, [{
        key: 'layout',
        value: function layout(aesthetics, _ref) {
            var originTheta = _ref.originTheta;


            var radial = aesthetics.x;
            var angular = aesthetics.y;

            if (originTheta === undefined) {
                originTheta = 0;
            }

            return function (d, idx) {
                var radius = radial.scaleFn(d);
                var angle = Polar.radiansFromDegrees(angular.scaleFn(d));
                var rotate = originTheta + 90;
                // renders to a polylineradial primitive
                return { radius: radius, angle: angle, rotate: rotate };
            };
        }
    }]);
    return LayoutPolarLine;
}();

/* jshint esnext: true */

var MockScenarios = function () {
  function MockScenarios() {
    classCallCheck(this, MockScenarios);
  }

  createClass(MockScenarios, null, [{
    key: 'scenario',
    value: function scenario(id) {
      if (id === undefined) {
        id = 'default';
      }
      var fn = this['scenario_' + id];
      if (typeof fn === 'function') {
        return fn();
      }
    }
  }]);
  return MockScenarios;
}();

/* jshint esnext: true */

var PolarAreaMock = function (_MockScenarios) {
  inherits(PolarAreaMock, _MockScenarios);

  function PolarAreaMock() {
    classCallCheck(this, PolarAreaMock);
    return possibleConstructorReturn(this, (PolarAreaMock.__proto__ || Object.getPrototypeOf(PolarAreaMock)).apply(this, arguments));
  }

  createClass(PolarAreaMock, null, [{
    key: 'scenario_default',
    value: function scenario_default() {
      var space = { "height": 250, "width": 250, "margin": 0, "radius": 115, "originTheta": 0 };
      var aes = {
        "x": {
          type: "radial",
          coord: { domain: [0, 14], range: [0, 115] },
          dataFn: function dataFn(d) {
            return d[1];
          }
        },
        "y": {
          type: "angular",
          coord: { domain: [0, 12], range: [0, 360] },
          dataFn: function dataFn(d) {
            return d[0];
          }
        }
      };
      var options = {};
      var layoutFn = Layout.geom(LayoutPolarLine, aes, space, options);

      var data = Monthly.xyFrom({ "jan": 6, "feb": 10, "mar": 12, "apr": 11, "may": 8, "jun": 4, "jul": 4, "aug": 7, "sep": 12, "oct": 13, "nov": 12, "dec": 8 });
      var geomData = layoutFn(data);
      var gpData = [{ radiallines: geomData, style: { fill: '#FFCF32' } }];
      return { data: gpData, geom: 'polylineradial' };
    }
  }]);
  return PolarAreaMock;
}(MockScenarios);

/* jshint esnext: true */

var LayoutPolarBand = function () {
    function LayoutPolarBand() {
        classCallCheck(this, LayoutPolarBand);
    }

    createClass(LayoutPolarBand, null, [{
        key: 'layout',
        value: function layout(aesthetics, _ref, _ref2) {
            var originTheta = _ref.originTheta;
            var barWidth = _ref2.barWidth;


            var radial = aesthetics.x;
            var angular = aesthetics.y;

            if (originTheta === undefined) {
                originTheta = 0;
            }
            if (barWidth === undefined) {
                barWidth = radial.scale(0.9);
            }

            return function (d, idx) {
                var endAngle = Polar.radiansFromDegrees(angular.scaleFn(d));
                var innerRadius = radial.scaleFn(d);
                var outerRadius = innerRadius + barWidth;

                var rotate = originTheta + 90;
                // renders to an arc primitive
                return { endAngle: endAngle, innerRadius: innerRadius, outerRadius: outerRadius, rotate: rotate };
            };
        }
    }]);
    return LayoutPolarBand;
}();

/* jshint esnext: true */

var PolarBandMock = function (_MockScenarios) {
  inherits(PolarBandMock, _MockScenarios);

  function PolarBandMock() {
    classCallCheck(this, PolarBandMock);
    return possibleConstructorReturn(this, (PolarBandMock.__proto__ || Object.getPrototypeOf(PolarBandMock)).apply(this, arguments));
  }

  createClass(PolarBandMock, null, [{
    key: 'scenario_default',
    value: function scenario_default() {
      var space = { "height": 250, "width": 250, "margin": 0, "radius": 115, "originTheta": 0 };
      var aes = {
        "y": {
          "type": "angular",
          "guides": [{ "type": "axis" }],
          "coord": { domain: [0, 14], range: [0, 360], scale: 'linear' },
          "dataFn": function dataFn(d) {
            return d[1];
          }
        },
        "x": {
          "type": "radial",
          "guides": [{ "type": "axis" }],
          "coord": { domain: [0, 5], range: [0, space.radius], scale: 'linear' },
          "dataFn": function dataFn(d) {
            return d[0];
          }
        },
        "fill": {
          "coord": { domain: [0, 3], range: ['red', 'blue'] },
          "dataFn": function dataFn(d, i) {
            return i;
          }
        },
        "stroke": {
          "coord": { domain: [0, 3], range: ['red', 'blue'] },
          "dataFn": function dataFn(d, i) {
            return i;
          }
        }
      };

      var options = {};
      var data = [[1, 4], [2, 8], [3, 7]];

      var layoutFn = Layout.geom(LayoutPolarBand, aes, space, options);
      var geomData = layoutFn(data);
      return { data: geomData, geom: 'arc' };
    }
  }]);
  return PolarBandMock;
}(MockScenarios);

/* jshint esnext: true */

var LayoutPolarBar = function () {
    function LayoutPolarBar() {
        classCallCheck(this, LayoutPolarBar);
    }

    createClass(LayoutPolarBar, null, [{
        key: 'layout',
        value: function layout(aesthetics, _ref, _ref2) {
            var originTheta = _ref.originTheta;
            var barWidth = _ref2.barWidth;


            var radial = aesthetics.x;
            var angular = aesthetics.y;

            if (originTheta === undefined) {
                originTheta = 0;
            }
            if (barWidth === undefined) {
                barWidth = 12;
            }

            return function (d, idx) {
                var rotate = originTheta + angular.scaleFn(d) - 90;
                var x = -barWidth / 2;
                var y = radial.scale(0);
                var width = barWidth;
                var height = radial.scaleFn(d);
                // renders to a rectangle primitive
                return { rotate: rotate, x: x, y: y, width: width, height: height, d: d };
            };
        }
    }]);
    return LayoutPolarBar;
}();

/* jshint esnext: true */

var PolarBandMock$2 = function (_MockScenarios) {
  inherits(PolarBandMock, _MockScenarios);

  function PolarBandMock() {
    classCallCheck(this, PolarBandMock);
    return possibleConstructorReturn(this, (PolarBandMock.__proto__ || Object.getPrototypeOf(PolarBandMock)).apply(this, arguments));
  }

  createClass(PolarBandMock, null, [{
    key: 'scenario_default',
    value: function scenario_default() {
      var space = { "height": 250, "width": 250, "margin": 0, "radius": 115, "originTheta": 0 };
      var aes = {
        "y": {
          type: "angular",
          guides: [{ "type": "axis" }],
          coord: { domain: [0, 750], range: [0, 360] },
          dataFn: function dataFn(d) {
            return d[0];
          }
        },
        "x": {
          type: "radial",
          guides: [{ "type": "axis" }],
          coord: { domain: [-40, 100], range: [0, 115] },
          dataFn: function dataFn(d) {
            return d[1];
          }
        }
      };
      var options = {};
      var data = d3Array.range(0, 15).map(function (deg, index) {
        var obj = [deg * 50 + 50, ~~(Math.random() * index * 5 - 15)];
        return obj;
      });

      var layoutFn = Layout.geom(LayoutPolarBar, aes, space, options);
      var geomData = layoutFn(data);
      return { data: geomData, geom: 'rect' };
    }
  }]);
  return PolarBandMock;
}(MockScenarios);

/* jshint esnext: true */

var LayoutPolarPetal = function () {
    function LayoutPolarPetal() {
        classCallCheck(this, LayoutPolarPetal);
    }

    createClass(LayoutPolarPetal, null, [{
        key: 'reduce',
        value: function reduce(aesthetics, space, options) {

            var radial = aesthetics.x;
            var angular = aesthetics.y;

            var sum = 0;
            return function (data) {
                data.forEach(function (d, i) {
                    sum += radial.dataFn(d);
                });
                data = data.map(function (d, i) {
                    return [angular.dataFn(d), radial.dataFn(d) / sum];
                });
                return data;
            };
        }
    }, {
        key: 'layout',
        value: function layout(aesthetics, space, options) {

            var radial = aesthetics.x;
            var angular = aesthetics.y;

            var originTheta = space.originTheta || 0;
            var halfRadius = (space.radius || 125) / 2;
            var innerRadius = options.innerRadius || radial.scale(0.5);
            var outerRadius = radial.scale(1);

            var currentAngle = 0;
            return function (d, idx) {
                var startAngle = currentAngle,
                    endAngle = currentAngle + angular.dataFn(d) * 360;

                currentAngle = endAngle;
                var startRad = Polar.radiansFromDegrees(startAngle);
                var endRad = Polar.radiansFromDegrees(endAngle);

                var rotate = originTheta - 90;
                // renders to an arc primitive
                return { startAngle: startRad, endAngle: endRad, innerRadius: innerRadius, outerRadius: outerRadius, rotate: rotate };
            };
        }
    }]);
    return LayoutPolarPetal;
}();

/* jshint esnext: true */

var PolarBandMock$3 = function (_MockScenarios) {
  inherits(PolarBandMock, _MockScenarios);

  function PolarBandMock() {
    classCallCheck(this, PolarBandMock);
    return possibleConstructorReturn(this, (PolarBandMock.__proto__ || Object.getPrototypeOf(PolarBandMock)).apply(this, arguments));
  }

  createClass(PolarBandMock, null, [{
    key: 'scenario_default',
    value: function scenario_default() {
      var space = { "height": 250, "width": 250, "margin": 0, "radius": 115, "originTheta": 0 };
      var aes = {
        "x": {
          type: "radial",
          coord: { domain: [0, 1], range: [0, 115] },
          dataFn: function dataFn(d, i) {
            return d[0];
          }
        },
        "y": {
          type: "angular",
          coord: { domain: [0, 14], range: [0, 360] },
          dataFn: function dataFn(d) {
            return d[1];
          }
        }
      };
      var options = {};
      var layoutFn = Layout.geom(LayoutPolarPetal, aes, space, options);

      var data = Monthly.xyFrom({ "jan": 6, "feb": 10, "mar": 12, "apr": 11, "may": 8, "jun": 4, "jul": 4, "aug": 7, "sep": 12, "oct": 13, "nov": 12, "dec": 8 });
      var geomData = layoutFn(data);

      return { data: geomData, geom: 'arc', customClass: "months" };
    }
  }]);
  return PolarBandMock;
}(MockScenarios);

/* jshint esnext: true */

var LayoutPolarDot = function () {
    function LayoutPolarDot() {
        classCallCheck(this, LayoutPolarDot);
    }

    createClass(LayoutPolarDot, null, [{
        key: 'layout',
        value: function layout(aesthetics, space, options) {

            var radial = aesthetics.x;
            var angular = aesthetics.y;

            var originTheta = space.originTheta || 0;
            var maxSize = options.maxSize || 3;
            var maxRadius = Math.round(maxSize / 2);
            var size = aesthetics.size || { scaleValue: function scaleValue(d) {
                    return 1;
                } };

            return function (d, i) {
                var rotate = originTheta + 0 + angular.scaleFn(d);
                var r = maxRadius * size.scaleFn(d);
                var cy = radial.scaleFn(d);
                // renders to a dot primitive
                return { rotate: rotate, r: r, cy: cy, options: options };
            };
        }
    }]);
    return LayoutPolarDot;
}();

/* jshint esnext: true */

var PolarBandMock$4 = function (_MockScenarios) {
  inherits(PolarBandMock, _MockScenarios);

  function PolarBandMock() {
    classCallCheck(this, PolarBandMock);
    return possibleConstructorReturn(this, (PolarBandMock.__proto__ || Object.getPrototypeOf(PolarBandMock)).apply(this, arguments));
  }

  createClass(PolarBandMock, null, [{
    key: 'scenario_default',
    value: function scenario_default() {
      var space = { "height": 250, "width": 250, "margin": 0, "radius": 115, "originTheta": 0 };
      var aes = {
        "y": {
          "type": "angular",
          coord: { "domain": [0, 12], "range": [0, 360], "scale": "linear" },
          dataFn: function dataFn(d) {
            return d[0];
          } },
        "x": {
          "type": "radial",
          coord: { "domain": [0, 115], "range": [0, 115], "scale": "linear" },
          dataFn: function dataFn(d) {
            return 100;
          }
        },
        "size": {
          "type": "radial",
          coord: { domain: [0, 14], range: [0, 1] },
          dataFn: function dataFn(d) {
            return d[1];
          }
        }
      };
      var options = { dotsize: 40, maxSize: 50, shape: 'circle' };
      var layoutFn = Layout.geom(LayoutPolarDot, aes, space, options);

      var data = Monthly.xyFrom({ "jan": 6, "feb": 10, "mar": 12, "apr": 11, "may": 8, "jun": 4, "jul": 4, "aug": 7, "sep": 12, "oct": 13, "nov": 12, "dec": 8 });
      var geomData = layoutFn(data);

      return { data: geomData, geom: 'dot', customClass: "months" };
    }
  }]);
  return PolarBandMock;
}(MockScenarios);

/* jshint esnext: true */

var LayoutPolarHat = function () {
    function LayoutPolarHat() {
        classCallCheck(this, LayoutPolarHat);
    }

    createClass(LayoutPolarHat, null, [{
        key: "layout",
        value: function layout(aesthetics, space, options) {

            var radial = aesthetics.x;
            var angular = aesthetics.y;

            var originTheta = space.originTheta || 0;
            var offset = options.offset || 0;

            return function (d, i) {
                var h = radial.scaleFn(d);
                var triangleAngle = Polar.radiansFromDegrees(angular.scale(1)) / 2;
                var baseW = 10;
                var rotate = originTheta + 90 + angular.scale(i);
                var lines = [[0, 0], [-h, baseW], [-h, -baseW]];
                // renders to a polyline primitive
                return { rotate: rotate, translate: h + offset + ", 0", lines: lines };
            };
        }
    }]);
    return LayoutPolarHat;
}();

/* jshint esnext: true */

var PolarBandMock$5 = function (_MockScenarios) {
  inherits(PolarBandMock, _MockScenarios);

  function PolarBandMock() {
    classCallCheck(this, PolarBandMock);
    return possibleConstructorReturn(this, (PolarBandMock.__proto__ || Object.getPrototypeOf(PolarBandMock)).apply(this, arguments));
  }

  createClass(PolarBandMock, null, [{
    key: 'scenario_default',
    value: function scenario_default() {
      var space = { "height": 250, "width": 250, "margin": 0, "radius": 115, "originTheta": 0 };
      var aes = {
        "x": {
          type: "radial",
          coord: { domain: [0, 14], range: [0, 95] },
          dataFn: function dataFn(d) {
            return d[1];
          }
        },
        "y": {
          type: "angular",
          coord: { domain: [0, 12], range: [0, 360] },
          dataFn: function dataFn(d) {
            return d[0];
          }
        }
      };
      var options = { offset: 20 };

      var data = Monthly.xyFrom({ "jan": 6, "feb": 10, "mar": 12, "apr": 11, "may": 8, "jun": 4, "jul": 4, "aug": 7, "sep": 12, "oct": 13, "nov": 12, "dec": 8 });

      var layoutFn = Layout.geom(LayoutPolarHat, aes, space, options);
      var geomData = layoutFn(data);

      return { data: geomData, geom: 'polyline', customClass: "months" };
    }
  }]);
  return PolarBandMock;
}(MockScenarios);

/* jshint esnext: true */

var LayoutPolarLine$1 = function () {
    function LayoutPolarLine() {
        classCallCheck(this, LayoutPolarLine);
    }

    createClass(LayoutPolarLine, null, [{
        key: 'layout',
        value: function layout(aesthetics, space, options) {

            var radial = aesthetics.x;
            var angular = aesthetics.y;

            var originTheta = space.originTheta || 0;

            return function (d, idx) {
                var radius = radial.scaleFn(d);
                var angle = Polar.radiansFromDegrees(angular.scaleFn(d));
                var rotate = originTheta + 90;
                // renders to a polylineradial primitive
                return { radius: radius, angle: angle, rotate: rotate };
            };
        }
    }]);
    return LayoutPolarLine;
}();

/* jshint esnext: true */

var PolarBandMock$6 = function (_MockScenarios) {
  inherits(PolarBandMock, _MockScenarios);

  function PolarBandMock() {
    classCallCheck(this, PolarBandMock);
    return possibleConstructorReturn(this, (PolarBandMock.__proto__ || Object.getPrototypeOf(PolarBandMock)).apply(this, arguments));
  }

  createClass(PolarBandMock, null, [{
    key: 'scenario_default',
    value: function scenario_default() {
      var space = { "height": 250, "width": 250, "margin": 0, "radius": 115, "originTheta": 0 };
      var aes = {
        "x": {
          type: "radial",
          coord: { domain: [0, 1], range: [0, 115] },
          dataFn: function dataFn(d) {
            return d[1];
          }
        },
        "y": {
          type: "angular",
          coord: { domain: [0, 360], range: [360, 0] },
          dataFn: function dataFn(d) {
            return d[0];
          }
        }
      };
      var options = {};

      var data = d3Array.range(0, 721, 1).map(function (deg, index) {
        return [deg, index / 720];
      });

      var layoutFn = Layout.geom(LayoutPolarLine$1, aes, space, options);
      var geomData = layoutFn(data);

      var gpData = [{ radiallines: geomData, style: { fill: 'none', stroke: 'blue' } }];

      return { data: gpData, geom: 'polylineradial' };
    }
  }]);
  return PolarBandMock;
}(MockScenarios);

/* jshint esnext: true */

var LayoutPolarPetal$1 = function () {
    function LayoutPolarPetal() {
        classCallCheck(this, LayoutPolarPetal);
    }

    createClass(LayoutPolarPetal, null, [{
        key: "reduce",
        value: function reduce(aesthetics, space, options) {

            var valueFn = aesthetics.x.dataFn;

            return d3Shape.pie().sort(null).value(function (d) {
                return valueFn(d);
            });
        }
    }, {
        key: "layout",
        value: function layout(aesthetics, space, options) {

            var radial = aesthetics.x;
            var angular = aesthetics.y;

            var originTheta = space.originTheta || 0;
            var halfRadius = (space.radius || 125) / 2;

            var sqrtScale = d3Scale.scaleSqrt().domain([0, 1]).range([0, halfRadius]);

            return function (d, idx) {
                var angle = (d.endAngle - d.startAngle) / 2,
                    s = Polar.polarToCartesian(-angle, halfRadius),
                    e = Polar.polarToCartesian(angle, halfRadius),
                    r = sqrtScale(radial.scale(d.value)),
                    m = { x: halfRadius + r, y: 0 },
                    c1 = { x: halfRadius + r / 2, y: s.y },
                    c2 = { x: halfRadius + r / 2, y: e.y };
                var angle2 = (d.startAngle + d.endAngle) / 2;
                var rotate = Polar.degreesFromRadians(angle2) + (originTheta + 90);
                // renders to a petal primitive
                return { rotate: rotate, s: s, c1: c1, m: m, c2: c2, e: e };
            };
        }
    }]);
    return LayoutPolarPetal;
}();

/* jshint esnext: true */

var PolarBandMock$7 = function (_MockScenarios) {
  inherits(PolarBandMock, _MockScenarios);

  function PolarBandMock() {
    classCallCheck(this, PolarBandMock);
    return possibleConstructorReturn(this, (PolarBandMock.__proto__ || Object.getPrototypeOf(PolarBandMock)).apply(this, arguments));
  }

  createClass(PolarBandMock, null, [{
    key: 'scenario_default',
    value: function scenario_default() {
      var space = { "height": 250, "width": 250, "margin": 0, "radius": 115, "originTheta": 0 };
      var aes = {
        "y": {
          "type": "angular",
          coord: { domain: [0, 12], range: [0, 360] },
          dataFn: function dataFn(d) {
            return d[0];
          } },
        "x": {
          "type": "radial",
          coord: { domain: [0, 14], range: [0, 1] },
          dataFn: function dataFn(d) {
            return d[1];
          }
        }
      };
      var options = {};
      var data = Monthly.xyFrom({ "jan": 6, "feb": 10, "mar": 12, "apr": 11, "may": 8, "jun": 4, "jul": 4, "aug": 7, "sep": 12, "oct": 13, "nov": 12, "dec": 8 });

      var layoutFn = Layout.geom(LayoutPolarPetal$1, aes, space, options);
      var geomData = layoutFn(data);

      return { data: geomData, geom: 'petal', customClass: "months" };
    }
  }]);
  return PolarBandMock;
}(MockScenarios);

/* jshint esnext: true */

var LayoutPolarPie = function () {
    function LayoutPolarPie() {
        classCallCheck(this, LayoutPolarPie);
    }

    createClass(LayoutPolarPie, null, [{
        key: 'layout',
        value: function layout(aesthetics, space, options) {

            var radial = aesthetics.x;
            var angular = aesthetics.y;

            var originTheta = space.originTheta || 0;

            return function (d, i) {
                var h = radial.scaleFn(d);
                var triangleAngle = Polar.radiansFromDegrees(angular.scale(1)) / 2;
                var baseW = Math.tan(triangleAngle) * h;
                var rotate = originTheta + angular.scale(i) + 90;
                var lines = [[0, 0], [h, baseW], [h, -baseW]];
                // renders to a polyline primitive
                return { rotate: rotate, lines: lines };
            };
        }
    }]);
    return LayoutPolarPie;
}();

/* jshint esnext: true */

var PolarBandMock$8 = function (_MockScenarios) {
  inherits(PolarBandMock, _MockScenarios);

  function PolarBandMock() {
    classCallCheck(this, PolarBandMock);
    return possibleConstructorReturn(this, (PolarBandMock.__proto__ || Object.getPrototypeOf(PolarBandMock)).apply(this, arguments));
  }

  createClass(PolarBandMock, null, [{
    key: 'scenario_default',
    value: function scenario_default() {
      var data = Monthly.xyFrom({ "jan": 6, "feb": 10, "mar": 12, "apr": 11, "may": 8, "jun": 4, "jul": 4, "aug": 7, "sep": 12, "oct": 13, "nov": 12, "dec": 8 });

      var space = { "height": 250, "width": 250, "margin": 0, "radius": 115, "originTheta": 0 };
      var aes = {
        "x": {
          type: "radial",
          coord: { domain: [0, 14], range: [0, 115] },
          dataFn: function dataFn(d, i) {
            return d[1];
          }
        },
        "y": {
          type: "angular",
          coord: { domain: [0, 12], range: [0, 360] },
          dataFn: function dataFn(d, i) {
            return d[0];
          }
        }
      };
      var options = {};

      var layoutFn = Layout.geom(LayoutPolarPie, aes, space, options);
      var geomData = layoutFn(data);
      return { data: geomData, geom: 'polyline', customClass: "months" };
    }
  }]);
  return PolarBandMock;
}(MockScenarios);

/* jshint esnext: true */

// Guides
// Layouts
var ReactSvgDemo = function (_React$Component) {
  inherits(ReactSvgDemo, _React$Component);

  function ReactSvgDemo() {
    classCallCheck(this, ReactSvgDemo);
    return possibleConstructorReturn(this, (ReactSvgDemo.__proto__ || Object.getPrototypeOf(ReactSvgDemo)).apply(this, arguments));
  }

  createClass(ReactSvgDemo, [{
    key: 'render',
    value: function render() {
      var Section = Demo.Section;

      function guide(item) {
        var el = React.createElement(item);
        var title = item.name;
        return Section({ title: title }, [el]);
      }

      function geom(Mock) {
        var _Mock$scenario = Mock.scenario(),
            data = _Mock$scenario.data,
            geom = _Mock$scenario.geom,
            customClass = _Mock$scenario.customClass;

        var title = Mock.name;
        var layers = [{ data: data, geom: geom }];
        return Section({ title: title }, [Plot({ width: "250", height: "250", customClass: customClass, layers: layers })]);
      }

      return Demo(null, [Section({ title: "Scale" }, ["Angular, Radial, Color"]), Section({ title: "Guides" }, [[AngularDemo, RadialDemo].map(guide)]), Section({ title: "Geom Layouts" }, [[PolarAreaMock, PolarBandMock, PolarBandMock$2, PolarBandMock$3, PolarBandMock$4, PolarBandMock$5, PolarBandMock$6, PolarBandMock$7, PolarBandMock$8].map(geom)]), Section({ title: "Plots" }, ["Coming Soon!"])]);
    }
  }]);
  return ReactSvgDemo;
}(React.Component);

/* jshint esnext: true */

var FN$2 = function () {
  function FN() {
    classCallCheck(this, FN);
  }

  createClass(FN, null, [{
    key: 'camelToDash',
    value: function camelToDash(match, p1, offset, string) {
      return '-' + match.toLowerCase();
    }
  }, {
    key: 'convertKeysToDash',
    value: function convertKeysToDash(obj) {

      if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
        return obj;
      }

      return Object.keys(obj).reduce(function (acc, key) {
        var nkey = key.replace(/[A-Z]/g, FN.camelToDash);
        acc.push('' + nkey + ':' + obj[key]);
        return acc;
      }, []).join('; ');
    }
  }, {
    key: 'transferProperties',
    value: function transferProperties(node, props) {
      Object.keys(props).forEach(function (k) {
        var p = props[k];
        if (k === 'style') {
          p = FN.convertKeysToDash(p);
        }
        node.setAttribute(k, p);
      });
    }
  }, {
    key: 'appendChildren',
    value: function appendChildren(node, children) {
      (children || []).forEach(function (d) {
        node.appendChild(d);
      });
    }
  }, {
    key: 'createElementNS',
    value: function createElementNS(tag) {
      var svgNS = 'http://www.w3.org/2000/svg';
      var htmlNS = 'Use http://www.w3.org/1999/xhtml';
      // full list at: http://www.w3.org/TR/SVG/eltindex.html
      var svgTags = 'svg,g,circle,rect,line,polyline,polygon,ellipse,path,mpath,text'.split(',');
      var tagNS = svgTags.indexOf(tag) !== -1 ? svgNS : htmlNS;
      return document.createElementNS(tagNS, tag);
    }
  }, {
    key: 'childrenFromRest',
    value: function childrenFromRest(children) {
      // whenever map is used, an array of children is passed under children[0]
      if (Array.isArray(children) && children.length === 1) {
        children = children[0][0];
      }
      return children;
    }
  }, {
    key: 'createElementOfTag',
    value: function createElementOfTag(type, props) {
      var node = FN.createElementNS(type);
      FN.transferProperties(node, props);

      for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        rest[_key - 2] = arguments[_key];
      }

      var children = FN.childrenFromRest(rest);
      FN.appendChildren(node, children);
      return node;
    }
  }, {
    key: 'createElementFromFactory',
    value: function createElementFromFactory(Factory, props, children) {
      var el = new Factory();
      el.props = props;
      el.props.children = children;
      return el.render();
    }
  }]);
  return FN;
}();

var Vanilla = function () {
  function Vanilla() {
    classCallCheck(this, Vanilla);
  }

  createClass(Vanilla, null, [{
    key: 'createElement',


    /**
     * Adds commas to a number
     * @param {object} type the type of element to create
     * @param {string} props the properties to transfer to the created element.
     * @param {...list} children the list of chilren to append to the created element.
     * @return {node} a dom node
     */
    value: function createElement(type, props) {
      for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        children[_key2 - 2] = arguments[_key2];
      }

      if (typeof type === 'string') {
        return FN$2.createElementOfTag(type, props, children);
      } else if (typeof type === 'function') {
        return FN$2.createElementFromFactory(type, props, children);
      }
      return null;
    }
  }, {
    key: 'htmlize',
    value: function htmlize(html) {
      var div = document.createElement('tmp-div');
      div.innerHTML = html;
      return div.children[0];
    }
  }]);
  return Vanilla;
}();

/* jshint esnext: true */

var Layer$2 = function () {
  function Layer() {
    classCallCheck(this, Layer);
  }

  createClass(Layer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          geom = _props.geom,
          options = _props.options;

      var renderer = RendererSvg[geom];

      var renderItem = function renderItem(item, i) {
        var _renderer = renderer(item),
            type = _renderer.type,
            props = _renderer.props;

        props = Layer.augmentProps(props, i, item.style, options);
        return Vanilla.createElement(type, props);
      };

      return Vanilla.createElement('g', {}, data.map(renderItem));
    }
  }], [{
    key: 'augmentProps',
    value: function augmentProps(props, i, style, options) {
      props.idx = i;
      props.key = 'geom_' + i;
      props.class = 'geom g-' + i;
      props.style = style;
      props.options = options;
      return props;
    }
  }]);
  return Layer;
}();

/* jshint esnext: true */

var Plot$2 = function () {
  function Plot() {
    classCallCheck(this, Plot);
  }

  createClass(Plot, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          layers = _props.layers,
          customClass = _props.customClass;

      if (!width) {
        width = 250;
      }
      if (!height) {
        height = 250;
      }
      var transform = 'translate(' + width / 2 + ',' + height / 2 + ')';
      var classes = 'layers' + (customClass ? ' ' + customClass : '');

      var el = Vanilla.htmlize('<svg width=' + width + ' height=' + height + '>\n      <g class="' + classes + '" transform="' + transform + '"></g>\n    </svg>');

      var elLayers = el.querySelector('g.layers');
      layers.forEach(function (data) {
        var node = Vanilla.createElement(Layer$2, data);
        elLayers.appendChild(node);
      });

      return el;
    }
  }]);
  return Plot;
}();

/* jshint esnext: true */

// Layouts
var ReactSvgDemo$2 = function (_React$Component) {
  inherits(ReactSvgDemo, _React$Component);

  function ReactSvgDemo() {
    classCallCheck(this, ReactSvgDemo);
    return possibleConstructorReturn(this, (ReactSvgDemo.__proto__ || Object.getPrototypeOf(ReactSvgDemo)).apply(this, arguments));
  }

  createClass(ReactSvgDemo, [{
    key: 'render',
    value: function render() {
      var Section = Demo.Section;

      function geom(Mock) {
        var _Mock$scenario = Mock.scenario(),
            data = _Mock$scenario.data,
            geom = _Mock$scenario.geom,
            customClass = _Mock$scenario.customClass;

        var title = Mock.name;

        var elPlot = Vanilla.createElement(Plot$2, { width: 250, height: 250, customClass: customClass, layers: [{ data: data, geom: geom }] });
        return Section({ title: title }, [React.createElement('div', { dangerouslySetInnerHTML: { __html: elPlot.outerHTML } })]);
      }

      return Demo(null, [Section({ title: "Scale" }, ["Angular, Radial, Color"]), Section({ title: "Guides" }, ["Coming Soon!"]), Section({ title: "Geom Layouts" }, [[PolarAreaMock, PolarBandMock, PolarBandMock$2, PolarBandMock$3, PolarBandMock$4, PolarBandMock$5, PolarBandMock$6, PolarBandMock$7, PolarBandMock$8].map(geom)]), Section({ title: "Plots" }, ["Coming Soon!"])]);
    }
  }]);
  return ReactSvgDemo;
}(React.Component);

/* jshint esnext: true */

var Tabs = function (_React$Component) {
    inherits(Tabs, _React$Component);

    function Tabs(props) {
        classCallCheck(this, Tabs);

        var _this = possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

        _this.state = { active: parseInt(props.active) || 0 };
        return _this;
    }

    createClass(Tabs, [{
        key: 'handlePaneChange',
        value: function handlePaneChange(event) {
            var active = parseInt(event.target.dataset.tab);
            this.setState({ active: active });
            this.dispatchChange(active);
        }
    }, {
        key: 'dispatchChange',
        value: function dispatchChange(active) {
            var fn = this.props.onChange;
            if (typeof fn === 'function') {
                fn(active);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var active = this.state.active;
            var titles = this.props.titles;


            var handlePaneChange = this.handlePaneChange.bind(this);

            return React.createElement('tabs', null, [React.createElement('ul', null, [(titles || []).map(function (item, i) {
                var isActive = i === active ? true : false;
                return React.createElement('li', { key: 'tab_' + i, className: isActive ? 'active' : null, 'data-tab': i, onClick: handlePaneChange }, [item]);
            })])]);
        }
    }]);
    return Tabs;
}(React.Component);

/* jshint esnext: true */

var PageView = function (_React$Component) {
    inherits(PageView, _React$Component);

    function PageView(props) {
        classCallCheck(this, PageView);

        var _this = possibleConstructorReturn(this, (PageView.__proto__ || Object.getPrototypeOf(PageView)).call(this));

        var active = props.active,
            onActiveChange = props.onActiveChange;

        _this.state = { active: active };
        onActiveChange(function (active) {
            console.log('ACTIVE', active);
            _this.setState({ active: active });
        });
        return _this;
    }

    createClass(PageView, [{
        key: 'render',
        value: function render() {
            var pages = this.props.pages;
            var active = this.state.active;

            var page = pages && pages.hasOwnProperty(active) ? pages[active] : '';
            return React.createElement('page-view', null, [page]);
        }
    }]);
    return PageView;
}(React.Component);

/* jshint esnext: true */

// import PrimitivesTwo        from '../primitives-twojs/usage/TwoDemo.jsx';
function main() {

    var pages = React.createElement('pages', null, [React.createElement('page', { title: "SVG primitives" }, [SvgDemo()]), React.createElement('page', { title: "React+SVG" }, [ReactSvgDemo()]), React.createElement('page', { title: "Vanilla+SVG" }, [ReactSvgDemo$2()]), React.createElement('page', { title: "Canvas" }, [React.createElement('div', null, ["No renderer available yet"])]), React.createElement('page', { title: "Webgl" }, [React.createElement('div', null, ["No renderer available yet"])])]);
    //         <!-- <page title="Twojs primitives"><PrimitivesTwo /></page> -->


    var activePage = 0;
    var activeListeners = [];
    var activePageEmitter = function activePageEmitter(fn) {
        if (typeof fn === 'function') {
            activeListeners.push(fn);
        }
    };
    // var activePageEmitter = new EventEmitter();
    var tabTitles = pages.props.children.map(function (page) {
        return page.props.title;
    });
    var pageContents = pages.props.children.map(function (page) {
        return page.props.children;
    });
    var onTabChange = function onTabChange(active) {
        console.log('[tabchange]', active);
        activeListeners.forEach(function (fn) {
            fn(active);
        });
    };

    var app = React.createElement('app', null, [Tabs({ active: activePage, titles: tabTitles, onChange: onTabChange }), PageView({ active: activePage, pages: pageContents, onActiveChange: activePageEmitter })]);

    var appNode = document.createElement('div');
    document.body.appendChild(appNode);
    ReactDom.render(app, appNode);
}

main();

/*
    var reactDemo = document.createElement('div');
    document.body.appendChild(reactDemo);
    React.render(<ReactSvgDemo />, reactDemo);


    var vanillaDemo = document.createElement('div');
    document.body.appendChild(vanillaDemo);
    React.render(<VanillaSvgDemo />, vanillaDemo);
*/

/*
var activePane = this.state.activePane;
var panes = this.props.children.reduce(function(acc, item) {
    const {title, children} = item.props;
    acc.push({title: title, content: children});
    return acc;
}, []);
var handlePaneChange = this.handlePaneChange.bind(this);
var Tabs = React.createElement('ul', {}, panes.map(function(pane, i) {
    var isActive = (i === activePane) ? true : false;
    return <li className={isActive ? 'active' : null} data-pane={i} onClick={handlePaneChange}>{pane.title}</li>;
}));
*/

})));
