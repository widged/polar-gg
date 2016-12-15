/* jshint esnext: true */

export default class PrimitiveMocks {

  static arc() {
    return {
      geom: 'arc',
      series: [
          {shape: {"startAngle":2.30,"endAngle":3.23,"innerRadius":56,"outerRadius":112},"style":{fill: "blue"}  ,"transform": {"rotate":0}},
          {shape: {"startAngle":2.76,"endAngle":2.99,"innerRadius":56,"outerRadius":112},"style":{fill: "yellow"},"transform": {"rotate":0}},
          {shape: {"startAngle":2.30,"endAngle":2.76,"innerRadius":56,"outerRadius":112},"style":{fill: "orange"},"transform": {"rotate":0}},
          {shape: {"startAngle":1.64,"endAngle":2.29,"innerRadius":56,"outerRadius":112},"style":{fill: "red"}   ,"transform": {"rotate":0}},
          {shape: {"startAngle":0.94,"endAngle":1.64,"innerRadius":56,"outerRadius":112},"style":{fill: "green"} ,"transform": {"rotate":0}}
      ]
    };
  }

  static dot() {
    return {
      geom: 'dot',
      series: [
        { "shape": {"r":  6.4, "cx": 60, "cy":  60}, "style": {fill: "green" }, "transform": {"rotate": 0}},
        { "shape": {"r": 10.7, "cx": 90, "cy":  60}, "style": {fill: "red"   }, "transform": {"rotate": 0}},
        { "shape": {"r": 12.9, "cx": 30, "cy":  90}, "style": {fill: "orange"}, "transform": {"rotate": 0}},
        { "shape": {"r": 11.8, "cx": 60, "cy":  90}, "style": {fill: "blue"  }, "transform": {"rotate": 0}},
        { "shape": {"r":  8.6, "cx": 90, "cy":  90}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r":  4.3, "cx": 30, "cy": 120}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r":  4.3, "cx": 60, "cy": 120}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r":  7.5, "cx": 90, "cy": 120}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r": 12.9, "cx": 30, "cy":  30}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r": 13.9, "cx": 60, "cy":  30}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r": 12.9, "cx": 90, "cy":  30}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r":  8.6, "cx": 30, "cy":  60}, "style": {}              , "transform": {"rotate": 0}}
      ]
    };
  }

  static dotsquare() {
    return {
      geom: 'dotsquare',
      series: [
        { "shape": {"r":  6.4, "cx": 60, "cy":  60}, "style": {fill: "green" }, "transform": {"rotate": 0}},
        { "shape": {"r": 10.7, "cx": 90, "cy":  60}, "style": {fill: "red"   }, "transform": {"rotate": 0}},
        { "shape": {"r": 12.9, "cx": 30, "cy":  90}, "style": {fill: "orange"}, "transform": {"rotate": 0}},
        { "shape": {"r": 11.8, "cx": 60, "cy":  90}, "style": {fill: "blue"  }, "transform": {"rotate": 0}},
        { "shape": {"r":  8.6, "cx": 90, "cy":  90}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r":  4.3, "cx": 30, "cy": 120}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r":  4.3, "cx": 60, "cy": 120}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r":  7.5, "cx": 90, "cy": 120}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r": 12.9, "cx": 30, "cy":  30}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r": 13.9, "cx": 60, "cy":  30}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r": 12.9, "cx": 90, "cy":  30}, "style": {}              , "transform": {"rotate": 0}},
        { "shape": {"r":  8.6, "cx": 30, "cy":  60}, "style": {}              , "transform": {"rotate": 0}}
      ]
    };
  }

  static rect() {
    return {
      geom: 'rect',
      series: [
          { "shape": {"x":20.83,"y": 72.14,"width":19,"height":177.86},"style":{fill: "green"}},
          { "shape": {"x":41.67,"y": 36.57,"width":19,"height":213.43},"style":{fill: "red"}},
          { "shape": {"x":62.50,"y": 54.36,"width":19,"height":195.64},"style":{fill: "orange"}},
          { "shape": {"x":83.33,"y":107.71,"width":19,"height":142.29},"style":{fill: "blue"}}
      ]
    };
  }

  static petal() {
    return {
      geom: 'petal',
      series: [
        { "shape": {"s":{"x":53.967881425250745,"y":-19.842322809340537},"c1":{"x":84.11732786846085,"y":-19.842322809340537},"m":{"x":110.73465573692171,"y":0},"c2":{"x":84.11732786846085,"y":19.842322809340537},"e":{"x":53.96788142525074,"y":19.842322809340537}},"style":{fill: "green"}, "transform": {"rotate":-15.98130841121494}},
        { "shape": {"s":{"x":54.52712197603583,"y":-18.249464896552738},"c1":{"x":82.98415123730265,"y":-18.249464896552738},"m":{"x":108.46830247460531,"y":0},"c2":{"x":82.98415123730265,"y":18.249464896552738},"e":{"x":54.52712197603583,"y":18.249464896552738}},"style":{fill: "red"}, "transform": {"rotate":22.710280373831807}},
        { "shape": {"s":{"x":55.92110814946013,"y":-13.382064987750717},"c1":{"x":79.23295719803056,"y":-13.382064987750717},"m":{"x":100.96591439606112,"y":0},"c2":{"x":79.23295719803056,"y":13.382064987750717},"e":{"x":55.92110814946013,"y":13.382064987750717}},"style":{fill: "orange"}, "transform": {"rotate":54.672897196261715}},
        { "shape": {"s":{"x":57.10391281949932,"y":-6.737443187368721},"c1":{"x":72.8675214099644,"y":-6.737443187368721},"m":{"x":88.23504281992881,"y":0},"c2":{"x":72.8675214099644,"y":6.737443187368721},"e":{"x":57.10391281949932,"y":6.737443187368721}},"style":{fill: "yellow"},"transform": { "rotate":74.85981308411218}},
        { "shape": {"s":{"x":57.10391281949932,"y":-6.737443187368721},"c1":{"x":72.8675214099644,"y":-6.737443187368721},"m":{"x":88.23504281992881,"y":0},"c2":{"x":72.8675214099644,"y":6.737443187368721},"e":{"x":57.10391281949932,"y":6.737443187368721}},"style":{fill: "blue"}, "transform": {"rotate":88.31775700934583}}
      ]
    };
  }

  static polyline() {
    return {
      geom: 'polyline',
      series: [
        { "shape": {"lines":[[0,0],[-54.29,10],[-54.29,-10]]},"style":{fill: "red"}, "transform": {"rotate":30,"translate":[74.29, 0]}},
        { "shape": {"lines":[[0,0],[-74.64,10],[-74.64,-10]]},"style":{fill: "blue"}, "transform": {"rotate": 0,"translate":[94.64, 0]}},
        { "shape": {"lines":[[0,0],[-27.14,10],[-27.14,-10]]},"style":{fill: "orange"}, "transform": {"rotate":60,"translate":[47.14, 0]}},
        { "shape": {"lines":[[0,0],[-27.14,10],[-27.14,-10]]},"style":{fill: "green"}, "transform": {"rotate":90,"translate":[47.14, 0]}}
      ]
    };
  }

  static polylineradial() {
    return {
      geom: 'polylineradial',
      series: [
        { "shape": {
          "radiallines": [
            {"radius": 80,"angle":0.52},
            {"radius":126,"angle":1.047},
            {"radius":188,"angle":1.57},
            {"radius":164,"angle":2.09},
            {"radius":132,"angle":2.62},
            {"radius":132,"angle":3.14},
            {"radius":156,"angle":3.67},
            {"radius":196,"angle":4.19},
            {"radius":104,"angle":4.71},
            {"radius": 96,"angle":5.26},
            {"radius": 64,"angle":5.76}
          ]},
          "style":{fill: "orange"},
          "transform": {"rotate":0}
        },
        { "shape": {
          "radiallines": [
            {"radius": 80,"angle":0.52},
            {"radius": 96,"angle":1.08},
            {"radius": 88,"angle":1.57},
            {"radius": 64,"angle":2.09},
            {"radius": 32,"angle":2.62},
            {"radius": 32,"angle":3.14},
            {"radius": 56,"angle":3.67},
            {"radius": 96,"angle":4.19},
            {"radius":104,"angle":4.71},
            {"radius": 96,"angle":5.24},
            {"radius": 64,"angle":5.76}
          ]},
          "style":{fill: "green"},
          "transform": {"rotate":0}
        }
      ]
    };
  }

}
