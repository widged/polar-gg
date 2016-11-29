/* jshint esnext: true */

export default class PrimitiveMocks {

  static arc() {
    return [
        {"startAngle":2.30,"endAngle":3.23,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "blue"}},
        {"startAngle":2.76,"endAngle":2.99,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "yellow"}},
        {"startAngle":2.30,"endAngle":2.76,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "orange"}},
        {"startAngle":1.64,"endAngle":2.29,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "red"}},
        {"startAngle":0.94,"endAngle":1.64,"innerRadius":56,"outerRadius":112,"rotate":0,"style":{fill: "green"}}
    ];
  }

  static dot() {
    return [
      { "rotate": 0, "r":  6.4, "cx": 60, "cy":  60, "style": {fill: "green" }},
      { "rotate": 0, "r": 10.7, "cx": 90, "cy":  60, "style": {fill: "red"   }},
      { "rotate": 0, "r": 12.9, "cx": 30, "cy":  90, "style": {fill: "orange"}},
      { "rotate": 0, "r": 11.8, "cx": 60, "cy":  90, "style": {fill: "blue"  }},
      { "rotate": 0, "r":  8.6, "cx": 90, "cy":  90, "style": {}},
      { "rotate": 0, "r":  4.3, "cx": 30, "cy": 120, "style": {}},
      { "rotate": 0, "r":  4.3, "cx": 60, "cy": 120, "style": {}},
      { "rotate": 0, "r":  7.5, "cx": 90, "cy": 120, "style": {}},
      { "rotate": 0, "r": 12.9, "cx": 30, "cy":  30, "style": {}},
      { "rotate": 0, "r": 13.9, "cx": 60, "cy":  30, "style": {}},
      { "rotate": 0, "r": 12.9, "cx": 90, "cy":  30, "style": {}},
      { "rotate": 0, "r":  8.6, "cx": 30, "cy":  60, "style": {}}
    ];
  }    

  static dotsquare() {
    return [
      { "rotate": 0, "r":  6.4, "cx": 60, "cy":  60, "style": {fill: "green" }},
      { "rotate": 0, "r": 10.7, "cx": 90, "cy":  60, "style": {fill: "red"   }},
      { "rotate": 0, "r": 12.9, "cx": 30, "cy":  90, "style": {fill: "orange"}},
      { "rotate": 0, "r": 11.8, "cx": 60, "cy":  90, "style": {fill: "blue"  }},
      { "rotate": 0, "r":  8.6, "cx": 90, "cy":  90, "style": {}},
      { "rotate": 0, "r":  4.3, "cx": 30, "cy": 120, "style": {}},
      { "rotate": 0, "r":  4.3, "cx": 60, "cy": 120, "style": {}},
      { "rotate": 0, "r":  7.5, "cx": 90, "cy": 120, "style": {}},
      { "rotate": 0, "r": 12.9, "cx": 30, "cy":  30, "style": {}},
      { "rotate": 0, "r": 13.9, "cx": 60, "cy":  30, "style": {}},
      { "rotate": 0, "r": 12.9, "cx": 90, "cy":  30, "style": {}},
      { "rotate": 0, "r":  8.6, "cx": 30, "cy":  60, "style": {}}
    ];
  }

  static rect() {
    return [
        {"x":20.83,"y": 72.14,"width":19,"height":177.86,"style":{fill: "green"}},
        {"x":41.67,"y": 36.57,"width":19,"height":213.43,"style":{fill: "red"}},
        {"x":62.50,"y": 54.36,"width":19,"height":195.64,"style":{fill: "orange"}},
        {"x":83.33,"y":107.71,"width":19,"height":142.29,"style":{fill: "blue"}}
    ];
  } 

  static petal() {
    return [
      {"rotate":-15.98130841121494,"s":{"x":53.967881425250745,"y":-19.842322809340537},"c1":{"x":84.11732786846085,"y":-19.842322809340537},"m":{"x":110.73465573692171,"y":0},"c2":{"x":84.11732786846085,"y":19.842322809340537},"e":{"x":53.96788142525074,"y":19.842322809340537},"style":{fill: "green"}},
      {"rotate":22.710280373831807,"s":{"x":54.52712197603583,"y":-18.249464896552738},"c1":{"x":82.98415123730265,"y":-18.249464896552738},"m":{"x":108.46830247460531,"y":0},"c2":{"x":82.98415123730265,"y":18.249464896552738},"e":{"x":54.52712197603583,"y":18.249464896552738},"style":{fill: "red"}},
      {"rotate":54.672897196261715,"s":{"x":55.92110814946013,"y":-13.382064987750717},"c1":{"x":79.23295719803056,"y":-13.382064987750717},"m":{"x":100.96591439606112,"y":0},"c2":{"x":79.23295719803056,"y":13.382064987750717},"e":{"x":55.92110814946013,"y":13.382064987750717},"style":{fill: "orange"}},
      {"rotate":74.85981308411218,"s":{"x":57.10391281949932,"y":-6.737443187368721},"c1":{"x":72.8675214099644,"y":-6.737443187368721},"m":{"x":88.23504281992881,"y":0},"c2":{"x":72.8675214099644,"y":6.737443187368721},"e":{"x":57.10391281949932,"y":6.737443187368721},"style":{fill: "yellow"}},
      {"rotate":88.31775700934583,"s":{"x":57.10391281949932,"y":-6.737443187368721},"c1":{"x":72.8675214099644,"y":-6.737443187368721},"m":{"x":88.23504281992881,"y":0},"c2":{"x":72.8675214099644,"y":6.737443187368721},"e":{"x":57.10391281949932,"y":6.737443187368721},"style":{fill: "blue"}}
    ];
  } 

  static polyline() {
    return [
      {"rotate":30,"translate":"74.29, 0","lines":[[0,0],[-54.29,10],[-54.29,-10]],"style":{fill: "red"}},
      {"rotate": 0,"translate":"94.64, 0","lines":[[0,0],[-74.64,10],[-74.64,-10]],"style":{fill: "blue"}},
      {"rotate":60,"translate":"47.14, 0","lines":[[0,0],[-27.14,10],[-27.14,-10]],"style":{fill: "orange"}},
      {"rotate":90,"translate":"47.14, 0","lines":[[0,0],[-27.14,10],[-27.14,-10]],"style":{fill: "green"}}
    ];
  } 

  static polylineradial() {
    return [
      { radiallines: [
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
        ],
        "rotate":0,"style":{fill: "orange"}
      },
      { radiallines: [
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
        ],
        "rotate":0,"style":{fill: "green"}
      }
    ];
      /*
      {radiallines: [
          {"radius": 47,"angle":2.0},
          {"radius": 57,"angle":2.1},
          {"radius": 68,"angle":2.2},
          {"radius": 77,"angle":2.3},
          {"radius": 85,"angle":2.4},
          {"radius": 93,"angle":2.5},
          {"radius":100,"angle":2.6},
          {"radius":105,"angle":2.7},
          {"radius":109,"angle":2.8},
          {"radius":112,"angle":2.9}
        ],"style":{stroke: "blue", fill: "transparent"}}
      */  
  }    

}