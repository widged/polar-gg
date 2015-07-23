/* jshint esnext: true */

import React from 'react';
import Vanilla from '../RendererVanillaSvg';
const Group = Vanilla.Group;


export default class ArcDemo extends React.Component {

    render() {
        var arcs = [
            {"startAngle":2.9947892585622315,"endAngle":3.2296746906063287,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "blue"}},
            {"startAngle":2.7599038265181353,"endAngle":2.9947892585622315,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "yellow"}},
            {"startAngle":2.2901329624299422,"endAngle":2.7599038265181353,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "orange"}},
            {"startAngle":1.6441980243086765,"endAngle":2.2901329624299422,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "red"}},
            {"startAngle":0.9395417281763866,"endAngle":1.6441980243086765,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "green"}}
        ];

        var group = Vanilla.createElement(Group, {data: arcs, shape: 'arc'});
        var html = `<div>
          <h2>Arc</h2>
          <svg width="250" height="250">
            ${group.outerHTML}
          </svg>
        </div>`;

        return <div dangerouslySetInnerHTML={{__html: html}} />;
    }
}


