require.install('cartesian/VerticalAxis', function(require, exports, module) {

    var {select} = require('d3-selection');
    var svg      = require('d3-svg');

    var FN = {};

    var Class = function CartesianVerticalAxis() {

        var instance = this;

        var state = {
            scale: null,
            space: null,
            ticks: null
        };

        AccessMaker.allKeys(state, instance, []);
        AccessMaker.addConfig(state, instance);

        instance.type = "axis";

        instance.mountIn = function(rootNode) {

            var axisNode = select(rootNode);

            var scale  = state.scale;
            var space  = state.space;
            var ticks  = state.ticks || {};

            var radius = space.radius;
            var axisTheta = ticks.axisTheta;
            var majorSuffix = ticks.majorSuffix || '';
            var majorQty = ticks.majorQty || 4;

            if(ticks.showCircle) {
                renderMarks(axisNode, scale, space, majorQty);
                renderLabels(axisNode, scale, space, majorQty, majorSuffix);
            }

            return instance;
        };

        function renderMarks(axisNode, scale, space, majorQty) {
            var gridLines = axisNode.selectAll('line.grid-line').data(scale.ticks(majorQty));
            var gridLinesEnter = gridLines.enter().append('line').attr({'class': 'grid-line'});

            axisNode.selectAll('line.grid-line').style({fill: 'none', stroke: '#ccc'});
            gridLines.attr({
                x1: function(d, i) { return 0; },
                x2: function(d, i) { return space.width; },
                y1: function(d, i) { return scale(d); },
                y2: function(d, i) { return scale(d); }
            });
            gridLines.exit().remove();
        }

        function renderLabels(axisNode, scale, space, majorQty, ticksSuffix) {
            var axis = d3.svg.axis().scale(scale).ticks(majorQty).orient("left");
            axisNode.call(axis);
            axisNode.selectAll('.domain').style({fill: 'none', stroke: 'black'});
            axisNode.selectAll('.tick.major text').text(function(d, i){ return this.textContent + ticksSuffix; });
        }

        return instance;

    };


    module.exports = Class;

});
