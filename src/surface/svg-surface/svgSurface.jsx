/* jshint esnext: true */

import React from 'react';
import arc from '../../shapes/geometries/arcBand';
import petal from '../../shapes/geometries/petal';
import polyline from '../../shapes/geometries/polyline';
import polylineradial from '../../shapes/geometries/polylineradial';

var PATH = {arc, petal, polyline, polylineradial};

var GEOM = {};

GEOM.dot = ({cx, cy, r}) => {
  return {type: 'circle', props: {  cx : cx, cy : cy,  r : r }};
};

GEOM.dotsquare = ({cx, cy, r}) => {
  var size = r * 2;
  return {type: 'rect', props: { x : cx - r, y : cy - r, width : size, height : size }};
};

GEOM.rect = ({x, y, width, height}) => {
  return {type: 'rect', props: { x: x, y: y, width: width, height: height }};
};

const svgString = (anchors) => {
  return anchors.map((d) => {
    return d.svgString();
  }).join('');
};

const render = (geom, d) => {
  var shape;
  if(GEOM.hasOwnProperty(geom)) {
    shape = GEOM[geom](d);
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

const renderSeries = (geom, series, container) => {
  container.innerHTML = '<div>svg</div>';
  var svgNS = "http://www.w3.org/2000/svg";
  var g = document.createElementNS(svgNS,"g");
  const renderSerie = (d, i) => {
      var out = render(geom, d);
      out.props.style = d.style;
      var node = document.createElementNS(svgNS,out.type);
      out.props = Object.assign(out.props, out.props.style);
      delete out.props.style;
      Object.keys(out.props).forEach((k) => {
        const v = out.props[k];
        node.setAttributeNS(svgNS,k,v);
      });
      g.appendChild(node);
  };
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  svg.appendChild(g);
  series.forEach(renderSerie);
  var div = document.createElement('div');
  div.innerHTML = svg.outerHTML;
  var svg2 = div.querySelector('svg');
  // for some weird reason, it updates with svg2 but not svg
  container.appendChild(svg2);
};




export default {render, renderSeries, name: 'svg'};

/*
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
  ${shapes.join('\n')}
</svg>`;

*/
