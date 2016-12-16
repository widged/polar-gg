/* jshint esnext: true */

export default class Plot {

	constructor() {
		this.layers = [];
		this.space = null;
		this.aesthetics = null;
        this.interactives = null;
        this.type = null;
	}

  use(Type) {
      this.type = Type;
      this.space = Type.space;
      this.layers = [];
      return this;
  }

	addLayer(layer) {
		console.log('ADD LAYER', layer);
		this.layers.push(layer);
        return this;
	}

	finalize() {
		return finalizeFn(Type.aesthetics, this.aesthetics, this.space, this.layers, this.interactives)
	}

	static finalizeFn(typeAesthetics, overrideAesthetics, space, layers, interactives) {

		/*

    const shallowCopy = (a) => {
      var b = {};
      Object.keys(a).forEach(function(key, dimIdx) { b[key] = a[key]; });
      return b;
    }

			angular
			aes.scale = scale(x) { return output(x); }
			space = {height: 250, width: 250, margin: 0, radius: 115, originTheta: 0}
			ticks = {perimeter: 14, minorQty: 1, majorQty: 7}

			radial
			aes.scale = scale(x) { return output(x); }
			space = {height: 250, width: 250, margin: 0, radius: 115, originTheta: 0}
			ticks = {showCircle: true, axisTheta: 0}
		*/

		/*
		Object.keys(typeAesthetics).forEach(function(key, dimIdx) {
            var aes   = shallowCopy(typeAesthetics[key]);
            var aesP  = overrideAesthetics[key];
            if(!aes || !aesP) { return; }

            var ticks = aesP.ticks;

            (aes.guides || []).forEach(function(guide) {
                guide.scale(aes.scale).space(space);
                if(guide.type === "axis") {
                    guide.ticks(ticks);
                    guide.mountIn(svgNode.querySelector('.' + key + '.axis'));
                }
            });

		}
		*/


	}

	static finalizeFn_all(typeAesthetics, overrideAesthetics, space, layers, interactives) {

		/*

		typeAesthetics : {
			aesx: { // angular
				guides: [
					AngularGuide{
						config: function(d) {},
						scale: function(d) {},
						space: function(d) {},
						ticks: function(d) {},
						type: "axis"
					}
				],
				validateRange: function(range, space) {}
			}
			aesy: { // radial
				guides: [
					RadialAxis{
						config: function(d) {},
						scale: function(d) {},
						space: function(d) {},
						ticks: function(d) {},
						type: "axis"
					}
				],
				validateRange: function(range, space) {}

			}
		}

		overrideAesthetics : {
			aesx: {
				coord : {domain : [0,14], range: [0, 360], scale: 'linear'},
				ticks : {data, majorQty: 2, majorStep: 2, minorQty: 1, minorStep: 1, perimeter: 14},
				valueFn : function(d) {}
			},
			aesy: {
				coord : {domain : [0,5], range: [0, 115], scale: 'linear'},
				ticks : {axisTheta: 0, showCircle: true},
				valueFn : function(d) {}
			},
			fill : {coord: {domain : [0,3], range: ['red', 'blue'], scale: 'linear'}, valueFn: function(d) {} }
			stroke: : {coord: {domain : [0,3], range: ['red', 'blue'], scale: 'linear'}, valueFn: function(d) {} }
		}

		space : {
			height: 250,
			margin: 0,
			originTheta: 0,
			radius: 115,
			width: 250
		}

		layers : [
			GeomLayer{
				config: function(d) {},
				data: function(d) {},
				geom: function(d) {},
				id: function(d) {},
				options: function(d) {}
			}
		]

		interactives : { list: [
			PolarHover{activate: function() {}, space: function() {} }}
		]}

		*/

	/*

  import {linearInterpolation}    from '../../lib/interpolation';

    const validateDomain = (domain, layers, valueFn) => {
        if(domain === null) {
            var data, extent;
            (layers || []).forEach(function(layer, i) {
                var extent =  d3.extent((layer.data() || []).map(valueFn));
                if(!domain) { domain = extent; }
                if(domain[0] > extent[0]) { domain[0] = extent[0]; }
                if(domain[1] < extent[1]) { domain[1] = extent[1]; }
            });
        }
        return domain;
    }

    const getScale = (coord) =>  {
        return linearInterpolation(coord.domain, coord.range);
    }


        var aesthetics = {};
        Object.keys(typeAesthetics).forEach(function(key, dimIdx) {

            var aes   = shallowCopy(typeAesthetics[key]);
            var aesP  = overrideAesthetics[key];
            if(!aes || !aesP) { return; }

            var coord = aesP.coord;
            var ticks = aesP.ticks;
            aes.value = aesP.valueFn || function(d, i){ return d[dimIdx]; };

            if(!aes.validateRange) { aes.validateRange = function(r) { return r; }; }

            coord.range = aes.validateRange(coord.range, space);
            coord.domain = Class.validateDomain(coord.domain, layers, aes.value);
            coord.scale = coord.scale || "linear";

            aes.scale = Class.getScale(coord);
            aes.scaleValue = function(d, i) { return aes.scale(aes.value(d, i)); };

            (aes.guides || []).forEach(function(guide) {
                var node = null;
                guide.scale(aes.scale).space(space);
                if(guide.type === "axis") {
                    guide.ticks(ticks);
                    guide.mountIn(svgNode.querySelector('.' + key + '.axis'));
                }
            });
            aesthetics[key] = aes;
        });


        Object.keys(overrideAesthetics).forEach(function(key, dimIdx) {
            if(typeAesthetics.hasOwnProperty(key)) { return; }

            var aesP  = overrideAesthetics[key];
            var scale = Class.getScale(aesP.coord);
            aesthetics[key] = {scaleValue: function(d, i) { return scale(aesP.valueFn(d, i)); }, optional: true };
        });

        (layers || []).forEach(function(layer, i) {
            var data = layer.data(),
            cssClass = layer.id();

            var geomNode =  svgNode.querySelector('g.geometry');
            geomNode.innerHTML += '<g class="'+cssClass+'"></g>';
            var gNode  = svgNode.querySelector('g.geometry > g:nth-last-child(1)');
            var config = layer.geom();

            var geom = new Geom().render(config.render).layout(config.layout);
            geom.aesthetics(aesthetics)
                .space(space)
                .config(layer.options() || {});
            geom.data(data).cssClass(cssClass);
            geom.mountIn(gNode);
         });

        var interactiveList = interactives ? interactives.list : [];
        interactiveList.forEach(function(interactive) {
            interactive.space(space);
            interactive.mountIn(svgNode);
            interactive.activate();

        });
*/
	}

}
