/* jshint esnext: true */

import React from 'react';
import arc from '../lib/path-geometries/arc';
import petal from '../lib/path-geometries/petal';
import polyline from '../lib/path-geometries/polyline';
import polylineradial from '../lib/path-geometries/polylineradial';

var PATH = {arc, petal, polyline, polylineradial};

var FN = {};

FN.dot = (props) => {
  const {cx, cy, r} = props;
  return {type: 'circle', props: {  cx : cx, cy : cy,  r : r }};
};

FN.dotsquare = (props) => {
  const {cx, cy, r} = props;
  var size = r * 2;
  return {type: 'rect', props: { x : cx - r, y : cy - r, width : size, height : size }};
};

FN.rect = (props) => {
  const {x, y, width, height} = props;
  return {type: 'rect', props: { x: x, y: y, width: width, height: height }};
};

const svgString = (anchors) => {
  return anchors.map((d) => {
    return d.svgString(); }).join('');
};


FN.render = (geom, d) => {
  var shape;
  if(FN.hasOwnProperty(geom)) {
    shape = FN[geom](d);
  } else {
    var pth = PATH[geom](d);
    shape = {type: 'path', props: { d: svgString(pth) }};
  }
  var {type, props} = shape;
  var {rotate, translate} = d;
  var transform = [];
  if(rotate) { transform.push('rotate('+ (rotate || 0) +')'); }
  if(translate) { transform.push('translate('+ (translate || "0, 0") +')'); }
  props.transform = transform.join(', ');
  return {type, props};
};



export default FN;
