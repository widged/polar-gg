/* jshint esnext: true */

import React from 'react';
import RendererReactSvg from '../RendererReactSvg';

const Group = RendererReactSvg.Group;

export default class HatDemo extends React.Component {

    render() {

    var paths = [
      {"rotate":30,"translate":"74.28571428571428, 0","lines":[[0,0],[-54.285714285714285,10],[-54.285714285714285,-10]],"style":{fill: "red"}},
      {"rotate":0,"translate":"94.64285714285714, 0","lines":[[0,0],[-74.64285714285714,10],[-74.64285714285714,-10]],"style":{fill: "blue"}},
      {"rotate":60,"translate":"47.14285714285714, 0","lines":[[0,0],[-27.142857142857142,10],[-27.142857142857142,-10]],"style":{fill: "orange"}},
      {"rotate":90,"translate":"47.14285714285714, 0","lines":[[0,0],[-27.142857142857142,10],[-27.142857142857142,-10]],"style":{fill: "green"}}
    ];

    return <div>
      <h2>Polyline</h2>
      <svg>
        <Group data={paths} shape='polyline' />
      </svg>
    </div>



    }
}
