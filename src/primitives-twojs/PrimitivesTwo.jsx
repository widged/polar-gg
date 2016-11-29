/* jshint esnext: true */

import React from 'react';
import {arc, line, radialLine} from 'd3-shape';

/*
var my_awesome_script = document.createElement('script');
my_awesome_script.setAttribute('src','../../node_modules/two.js/build/two.js');
document.head.appendChild(my_awesome_script);

 */
import twojs from 'two.js';



class D3Utils { }

D3Utils.arcFn = arc()
    .startAngle(function(d)  { return d.startAngle || 0; })
    .endAngle(function(d)    { return d.endAngle; })
    .innerRadius(function(d) { return d.innerRadius || 0; })
    .outerRadius(function(d) { return d.outerRadius; });

D3Utils.radialFn = radialLine()
    .radius(function(d) { return d.radius; })
    .angle(function(d) { return d.angle; });

export default class RendererSvg {

    static arc(props) {
      const {startAngle, endAngle, innerRadius, outerRadius, rotate} = props;
      const transform  = 'rotate('+ (rotate || 0) +')';
      const d          = D3Utils.arcFn({startAngle: startAngle, endAngle: endAngle, innerRadius: innerRadius, outerRadius: outerRadius});
      return {type: 'path', props: {d: d, transform: transform}};
    }

    static dot(props) {
      const {cx, cy, r, rotate} = props;
      const transform  = 'rotate('+ (rotate || 0) +')';
      return {type: 'circle', props: {  cx : cx, cy : cy,  r : r, transform: transform }};
    }

    static dotsquare(props) {
      const {cx, cy, r, rotate} = props;
      var size = r * 2;
      var transform  = 'rotate('+ (rotate || 0) +')';
      return {type: 'rect', props: { x : cx - r, y : cy - r, width : size, height : size, transform: transform }};
    }

    static petal(props) {
      var {rotate, s, e, c1, c2, m} = props;
      var d          = "M0,0L" + s.x + "," + s.y + "Q" + c1.x + "," + c1.y + " " + m.x + "," + m.y + "L" + m.x + "," + m.y + "Q" + c2.x + "," + c2.y + " " + e.x + "," + e.y + "Z";
      var transform  = 'rotate('+ (rotate || 0) +')';
      return {type: 'path', props: { d: d, transform: transform }};
    }

    static rect(props) {
      const {x, y, width, height, rotate, translate} = props;
      var transform = 'rotate('+ (rotate || 0) +')';
      return {type: 'rect', props: { x: x, y: y, width: width, height: height, transform: transform }};
    }

    static polyline(props) {
      var {rotate, translate, lines} = props;
      var transform  = 'rotate('+ (rotate || 0) +'), translate('+ (translate || "0, 0") +')';
      var d          = 'M'+ lines.join('L')+'Z';
      return {type: 'path', props: { d: d, transform: transform }};
    }

    static polylineradial(props) {
      var {rotate, radiallines} = props;
      var transform  = 'rotate(' + (rotate || 0) + ')';
      var d          = D3Utils.radialFn(radiallines);
      return {type: 'path', props: { d: d, transform: transform }};
    }

}