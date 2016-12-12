/* jshint esnext: true */

import React from 'react';
import {convertStyle} from './lib/style-properties';
import {convertTransform} from './lib/transform-properties';
import drawPath from './primitives/path';
import arc from '../../shapes/geometries/arcBand';
import petal from '../../shapes/geometries/petal';
import polyline from '../../shapes/geometries/polyline';
import polylineradial from '../../shapes/geometries/polylineradial';

var PATH = {arc, petal, polyline, polylineradial};

var GEOM = {};

const svgList = (anchors) => {
  return anchors.map((d) => {
    return d.valueOf();
  });
};

const loadShape = function(shape, props, transform) {
  const asCmd  = function(cmd, args)   { return ['cmd', cmd, args];    };
  const asProp = function(prop, value) { return ['prop', prop, value]; };

  var instructions = [];

  instructions.push(asCmd('save'));
  convertTransform(transform).forEach((cmds) => {
    cmds.forEach((c) => {
      instructions.push(asCmd(...c));
    });
  });

  var hasFill, hasStroke;
  convertStyle(props).forEach((d) => {
    var [k,v] = d;
    if(k === 'fillStyle')   { hasFill = true; }
    if(k === 'strokeStyle') { hasStroke = true; }
    instructions.push(asProp(k, v));
  });

  shape.cmds.forEach((d) => {
    var [cmd,args] = d;
    instructions.push(asCmd(cmd, args));
  });
  if(hasFill)   { instructions.push(asCmd('fill'));  }
  if(hasStroke) { instructions.push(asCmd('stroke')); }
  instructions.push(asCmd('restore'));
  // console.log('[instructions]', JSON.stringify(instructions))
  return instructions;
};


const render = (geom, d) => {
  var shape;
  if(GEOM.hasOwnProperty(geom)) {
    // shape = GEOM[geom](d);
  } else {
    var pth = PATH[geom](d);
    shape = drawPath(svgList(pth));
  }
  var {style} = d;
  var {rotate, translate} = d;
  var transform = {};
  if(rotate)    { transform.rotate = rotate; }
  if(translate) { transform.translate = translate; }
  return loadShape(shape, style, transform);
};

const paintCommand = (ctx) => {
  return (d) => {
    var [type, key, args] = d;
    if(type === 'cmd') {
      if(/^(fill|stroke)$/.exec(key)) {
        args = null;
      }
      if(args) {
        ctx[key](...args);
      } else {
        ctx[key]();
      }
    } else if(type === 'prop') {
      ctx[key] = args;
    }
  };
};

const renderSeries = (geom, series, container) => {
  container.innerHTML = '<div>canvas</div>';
  var canvas = document.createElement('canvas');
  var ctx    = canvas.getContext('2d');
  series.forEach((serie) => {
    var cmds = render(geom, serie);
    cmds.forEach(paintCommand(ctx));
  });
  container.appendChild(canvas);
};

export default {render, renderSeries, name: 'canvas'};

/*
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="70px" height="70px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
  ${shapes.join('\n')}
</svg>`;

*/
