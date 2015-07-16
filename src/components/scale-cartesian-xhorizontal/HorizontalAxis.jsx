require.install('cartesian/HorizontalAxis', function(require, exports, module) {

    var d3          = require('d3');
    var AccessMaker = require('AccessMaker');

    var FN = {};

    var Class = function CartesianHorizontalGuides() {

        var instance = this;

        var state = {
            space: null,
            scale: null,
            ticks: null,
        };

        AccessMaker.allKeys(state, instance, []);
        AccessMaker.addConfig(state, instance);

        instance.type = "axis";

        instance.mountIn = function(rootNode) {


            var scale        = state.scale;
            var space        = state.space;
            var ticks        = state.ticks;

            var axisNode = d3.select(rootNode);
            var currentLoc = function(d, i){ return (scale(d.value)); };

            if(!ticks.data) { ticks.data =  Class.ticks(ticks); }

            var data          = ticks.data;
            var gTicks        = axisNode.selectAll('g.angular-tick').data(data);
            var angularAxisEnter = gTicks.enter().append('g').attr({ 'class': 'angular-tick', 'transform': 'translate(' + 8 + ',' + (-10) + ')'});
            gTicks.exit().remove();

            renderMarks(axisNode, space, currentLoc, ticks);
            renderLabels(axisNode, space, currentLoc, ticks);

            axisNode.select('rect.outside-rect').attr({width: space.width, height: space.height});


            return instance;
        };


        function renderMarks(axisNode, space, currentLoc, ticks) {
            var h    = space.height;

            axisNode.selectAll('g.angular-tick').append('line')
                .classed('grid-line', true)
                .classed('major', function(d, i){ return d.isMajor; })
                .classed('minor', function(d, i){ return !d.isMajor; });


            axisNode.selectAll('line.grid-line')
                .attr({
                    x1: 100,
                    x2: 100,
                    y1: currentLoc,
                    y2: currentLoc,
                });

        }

        function renderLabels(axisNode, space, currentLoc, ticks) {
            var labelOffset   = ticks.labelOffset || 6;
            var orient        = ticks.orientation || 'angular'; // 'radial', 'angular', 'horizontal'

            axisNode.selectAll('g.angular-tick')
                .append('text')
                .attr({
                    'class': 'axis-text',
                    x: currentLoc,
                    dy: '.35em'
                    
                })
                .style({'text-anchor': 'middle' })
                .text(function(d, i) { return d.text;  });

        }

        return instance;

    };

    Class.ticks = function(config) {
        var majorSuffix = config.majorSuffix || '',
            majorFmt = config.majorFmt || function(value) { return value; },
            minorFmt = config.minorFmt || function(value) { return ''; },
            minorQty = config.minorQty || 0,
            majorQty = config.majorQty || 4,
            majorFn = function(d, i) { return getMajor(i, i); },
            minorFn = function(d, i) { return getMinor(d, i); };


        function getMajor(text, value) {
            if(value === undefined) { value = text; }
            return {text: majorFmt(text) + majorSuffix, value: value };
        }

        function getMinor(text, value) {
            if(value === undefined) { value = text; }
            return {text: minorFmt(text), value: value };
        }

        if(config.major) {
            var labels = config.major;
            majorFn = function(d, i) { return getMajor(labels[d], i); };
            majorQty = labels.length;
        }


        if(config.majorStep) {
            var stepM = config.majorStep;
            majorFn = function(d, i) {
                return getMajor(stepM * d);
            };
        }
        if(config.minorStep) {
            var stepm = config.minorStep;
            minorFn = function(d, i) {
                return getMinor(stepm * i);
            };
        }

        var minor = [];
        for(var j = 0, nj = minorQty; j < nj; j++) {
            minor.push('x');
        }

        var all = [];
        for(var i = 0, ni = majorQty; i < ni; i++) {
            all.push(i);
            all = all.concat(minor);
        }

        var ticks = all.map(function(d, i) {
            var obj = {};
            if(d+0 === d) {
                obj = majorFn(d, i);
                obj.isMajor = true;
            } else {
                obj = minorFn(d, i);
            }
            if(!obj.hasOwnProperty('value')) { obj.value = i; }
            return obj;
        });

        return ticks;
    };

    module.exports = Class;

});
