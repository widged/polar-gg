/* jshint esnext: true */

import React from 'react';
import arcband from '../../geoms/custom/arcBand';
import petal from '../../geoms/custom/petal';
import polyline from '../../geoms/primitives/polyline';
import polylineradial from '../../geoms/primitives/polylineradial';

import dot       from './primitives/dot.js';
import dotSquare from './primitives/dotSquare.js';
import rect      from './primitives/rect.js';

const svgNS = "http://www.w3.org/2000/svg";

var GEOM = {dot, dotSquare, rect};
var PATH = {arcband, petal, polyline, polylineradial};

const svgString = (anchors) => {
  return anchors.map((d) => {
    return d.svgString();
  }).join('');
};

const shapeData = (geom, shape) => {
  if(GEOM.hasOwnProperty(geom)) {
    shape = GEOM[geom](shape);
  } else {
    var pth = PATH[geom](shape);
    shape = {type: 'path', props: { d: svgString(pth) }};
  }
  return shape;
};

const convertStyle = (props) => {
  if(!props) {return '';}
  // style="fill: red; stroke: blue; stroke-width: 3"
  return Object.keys(props).map((k) => {
    return [k, props[k]].join(': ');
  }).join('; ');
};


const convertTransform = (transform) => {
  if(!transform) { return; }
  var {rotate, translate} = transform;
  var out = [];
  if(rotate)    { out.push('rotate('+ (rotate || 0) +')'); }
  if(translate) { out.push('translate('+ (translate.join(', ') || "0, 0") +')'); }
  return out.join(' ');
};

const renderGeom = (geom) => {
  return (d) => {
    var {type, props} = shapeData(geom, d.shape);
    var style         = convertStyle(d.style);
    var transform     = convertTransform(d.transform);
    var attr          = Object.assign(props, {style, transform});
    return {type, props: attr};
  };
};


const renderSeries = (geom, series, container) => {
  container.innerHTML = '<div>svg</div>';
  var g   = document.createElementNS(svgNS,"g");
  series.forEach((d) => {
    var {type, props} = renderGeom(geom);
    var node = document.createElementNS(svgNS,type);
    Object.keys(attr).forEach((k) => {
      const v = attr[k];
      node.setAttributeNS(svgNS,k,v);
    });
    g.appendChild(node);
  });

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  svg.appendChild(g);

  var div = document.createElement('div');
  div.innerHTML = svg.outerHTML;
  var svg2 = div.querySelector('svg');
  // for some weird reason, it updates with svg2 but not svg
  container.appendChild(svg2);
};




export default {renderGeom, renderSeries, name: 'svg'};

/*
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
  ${shapes.join('\n')}
</svg>`;

*/
