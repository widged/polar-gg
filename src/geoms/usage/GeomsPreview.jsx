/* jshint esnext: true */

import React from 'react';
import ReactDom from 'react-dom';

// import PrimitivesTwo        from '../primitives-twojs/usage/TwoDemo.jsx';
import GeomsGallery     from './GeomDemo.jsx';
import PrimitiveMocks from '../../geoms/usage/GeomMocks';
import svgSurface    from '../../surface/svg-surface/svgSurface.jsx';
import canvasSurface from '../../surface/canvas-surface/canvasSurface.jsx';
import webglSurface  from '../../surface/webgl-surface/webglSurface.jsx';

const {Component} = React;

class GeomsPreview extends Component {

  render() {
    var shapes = 'arc,dot,dotsquare,rect,petal,polyline,polylineradial'.split(',').map((d) => { return PrimitiveMocks[d](); });
    var shapes2 = 'polyline'.split(',').map((d) => { return PrimitiveMocks[d](); });
    // 'arc,dot,dotsquare,rect,petal,polyline,polylineradial'.split(',').map(renderItem)}

    /*
    var pages = (
      <pages>
        <page title="SVG surface / primitives"><GeomsGallery shapes={shapes} surface={svgSurface} /></page>
        <page title="Webgl surface / primitives"><GeomsGallery shapes={shapes2} surface={webglSurface} /></page>
        <page title="Canvas surface / primitives"><GeomsGallery shapes={shapes2} surface={canvasSurface} /></page>
      </pages>
    );
    //         <!-- <page title="Twojs primitives"><PrimitivesTwo /></page> -->
    */
    return <geom-preview>hello</geom-preview>;

  }
}


export default GeomsPreview;
