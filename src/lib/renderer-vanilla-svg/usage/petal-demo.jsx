/* jshint esnext: true */

import React from 'react';
import RendererReactSvg from '../RendererReactSvg';

const Group = RendererReactSvg.Group;

export default class PetalDemo extends React.Component {

    render() {

    var petals = [
      {"rotate":-15.98130841121494,"s":{"x":53.967881425250745,"y":-19.842322809340537},"c1":{"x":84.11732786846085,"y":-19.842322809340537},"m":{"x":110.73465573692171,"y":0},"c2":{"x":84.11732786846085,"y":19.842322809340537},"e":{"x":53.96788142525074,"y":19.842322809340537},"style":{fill: "green"}},
      {"rotate":22.710280373831807,"s":{"x":54.52712197603583,"y":-18.249464896552738},"c1":{"x":82.98415123730265,"y":-18.249464896552738},"m":{"x":108.46830247460531,"y":0},"c2":{"x":82.98415123730265,"y":18.249464896552738},"e":{"x":54.52712197603583,"y":18.249464896552738},"style":{fill: "red"}},
      {"rotate":54.672897196261715,"s":{"x":55.92110814946013,"y":-13.382064987750717},"c1":{"x":79.23295719803056,"y":-13.382064987750717},"m":{"x":100.96591439606112,"y":0},"c2":{"x":79.23295719803056,"y":13.382064987750717},"e":{"x":55.92110814946013,"y":13.382064987750717},"style":{fill: "orange"}},
      {"rotate":74.85981308411218,"s":{"x":57.10391281949932,"y":-6.737443187368721},"c1":{"x":72.8675214099644,"y":-6.737443187368721},"m":{"x":88.23504281992881,"y":0},"c2":{"x":72.8675214099644,"y":6.737443187368721},"e":{"x":57.10391281949932,"y":6.737443187368721},"style":{fill: "yellow"}},
      {"rotate":88.31775700934583,"s":{"x":57.10391281949932,"y":-6.737443187368721},"c1":{"x":72.8675214099644,"y":-6.737443187368721},"m":{"x":88.23504281992881,"y":0},"c2":{"x":72.8675214099644,"y":6.737443187368721},"e":{"x":57.10391281949932,"y":6.737443187368721},"style":{fill: "blue"}}
    ];

    return <div>
      <h2>Flower Petal</h2>
      <svg>
        <Group data={petals} shape='petal' />
      </svg>
    </div>

    }
}
