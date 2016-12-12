/* jshint esnext: true */

var convertStyle = (function() {
  const addOpacity = (clr, opacity) => {
    if (opacity != null && opacity != '') {
      var color = new RGBColor(clr);
      if (color.ok) {
        clr = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', ' + opacity + ')';
      }
    }
    clr =  ((clr === undefined || clr == 'none') ? 'rgba(0,0,0,0)' : clr).toString();
    return clr;
  };

  return function(props) {
    // don't forget to inherit from parent components

    var svgProps = [];

    var fillOpacity;
    var strokeOpacity;
    Object.keys(props).forEach((k) => {
      if(!(/(fill-opacity|stroke-opacity)/.exec(k))) { return; }
      var v = props[k];
      delete props[k] ;
      if(k === 'fill-opacity')      { fillOpacity = v; }
      if(k === 'stroke-opacity')    { strokeOpacity = v; }
    });

    Object.keys(props).forEach((k) => {
      if(!(/(fill|stroke|opacity)/.exec(k))) { return; }
      var v = props[k];
      delete props[k] ;

      if(k === 'stroke-width')      { k = 'lineWidth'; }
      if(k === 'stroke-linecap')    { k = 'lineCap'; }
      if(k === 'stroke-linejoin')   { k = 'linejoin'; }
      if(k === 'stroke-miterlimit') { k = 'miterlimit'; }
      if(k === 'opacity')           { k = 'globalAlpha'; }
      if(k === 'fill') {
        k = 'fillStyle';
        v = addOpacity(v, fillOpacity);
      }
      if(k === 'stroke') {
        k = 'strokeStyle';
        v = addOpacity(v, strokeOpacity);
      }
      svgProps.push([k, v]);
    });

    var font = ['font-style','font-variant','font-weight','font-size','font-family'].reduce((acc, k) => {
      if(props[k]) {
        acc.push(props[k]);
        delete props[k] ;
      }
      return acc;
    }, []).join(' ');
    if(font.length) {
      svgProps.push(['font', font]);
    }

    return svgProps;

  };

}());

module.exports = {convertStyle};
