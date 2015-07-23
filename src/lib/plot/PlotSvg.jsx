/* jshint esnext: true */

import React from 'react';
import Plot from './Plot.js';

export default class PlotView extends React.Component {

	constructor(props) {
		super();
		var plot = this.plot = new Plot();
        plot.use(props.type);
  		props.children.map(function(layer, i) {
  			plot.addLayer(layer.props);
  		});
	}

  	render() {
        var plotData = this.plot.finalize({
            data: [],
            width: 120,
            height: 30,
            margin: 2   
        });

		return <plot>
			<svg>
				<g className="chart">
					<circle className="background-circle"></circle>
					<g class="guides">
						<g class="angular axis"></g>
						<g class="radial axis"></g>
					</g>
					<g className="layers">
						<g class="geometry"></g>
					</g>
				</g>
			</svg>
		</plot>


/*
		this.props.children.map(function(layer, i) {
  			console.log(layer.props)
  		});
*/
	}
}


/*  */
/*

require.install('plot/Plot', function(require, exports, module) {

    var AccessMaker = require('AccessMaker');

   var Class = function Plot() {

        instance.addLayer = function(layer) {
            if(!state.layers) { state.layers = []; }
            state.layers.push(layer);
            return instance;
        };

        instance.mountIn = function(node) {
            rootNode = node;
            var Type = state.type;
            rootNode.innerHTML = Type.template;
            return instance;
        };

        instance.draw = function() {
            if(!rootNode) { return; }
            var Type = state.type;
            var space = state.space;
            rootNode.innerHTML = Type.template;
            Type.beforeRender(rootNode, space, state.aesthetics);
            Class.render(rootNode, Type.aesthetics, state.aesthetics, space, state.layers, state.interactives);
        };

        // var dispatch = d3.dispatch('hover');
        // d3.rebind(instance, dispatch, 'on');

        return instance;
   };

   function shallowCopy(a) {
        var b = {};
        Object.keys(a).forEach(function(key, dimIdx) { b[key] = a[key]; });
        return b;
   }

    Class.render = function(rootNode, typeAesthetics, overrideAesthetics, space, layers, interactives) {

        var Geom = require('plot/Geom');

        if(!layers || !layers.length) { rootNode.innerHTML = "";  return;}

        var svgNode = rootNode.querySelector('svg');
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
    };

    Class.getScale = function(coord) {
        var d3 = require('d3');
        return d3.scale.linear().domain(coord.domain).range(coord.range);
    };

    Class.validateDomain = function(domain, layers, valueFn) {
        var d3  = require('d3');
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
    };



    module.exports = Class;

});

*/
