require.install('polar/RadialAxis', function(require, exports, module) {

    var d3          = require('d3');
    var AccessMaker = require('AccessMaker');

    var FN = {};


    var Class = function RadialAxis() {

        var instance = this;

        var state = {
            scale: null,
            space: null,
            ticks: null
        };

        AccessMaker.allKeys(state, instance, []);
        AccessMaker.addConfig(state, instance);
        
        instance.type = "axis";

        instance.mountIn = function(node) {

            var axisNode = d3.select(node);

            var scale   = state.scale;
            var space  = state.space;
            var ticks  = state.ticks || {};

            var radius = space.radius;
            var axisTheta = ticks.axisTheta;
            var majorSuffix = ticks.majorSuffix || '';
            var majorQty = ticks.majorQty || 4;


            if(ticks.showCircle) {
                renderMarks(axisNode, scale, majorQty);
                renderLabels(axisNode, scale, axisTheta, majorQty, majorSuffix);
            }

            return instance;
        };

        function renderMarks(axisNode, scale, majorQty) {
            var gridCircles = axisNode.selectAll('circle.grid-circle')
                .data(scale.ticks(majorQty));
            var gridCirclesEnter = gridCircles.enter().append('circle').attr({'class': 'grid-circle'});

            gridCircles.attr('r', scale);
            gridCircles.exit().remove();
        }

        function renderLabels(axisNode, scale, axisTheta, majorQty, ticksSuffix) {
            var axis = d3.svg.axis().scale(scale).ticks(majorQty);
            axisNode.call(axis).attr({transform: 'rotate('+ (axisTheta) +')'});
            axisNode.selectAll('.domain').style({fill: 'none', stroke: 'black'});
            axisNode.selectAll('.tick.major text').text(function(d, i){ return this.textContent + ticksSuffix; });
        }

        return instance;

    };


    module.exports = Class;

});
