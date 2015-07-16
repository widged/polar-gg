/* jshint esnext: true */

import React from 'react';
import Utils from '../../lib/Utils';

export default class Dot extends React.Component {

    constructor() {
        super();
        this.defaults = {shape: 'circle', maxsize: 25};
    }


    render() {
        var data      = this.props;
        var options   = Utils.cloneAndAugment(data.options, this.defaults);
        var maxR      = options.maxsize / 2;

        var cx      = data.cx || 0;
        var cy      = data.cy || 0;
        var r       = data.radius || 0;
        if(r > maxR) { r = maxR; }

        var dotData = {
            className: 'geom g-' + data.idx,
            transform: 'rotate('+ (data.rotate || 0) +')',
            style: data.style
        };

        var shapeFn = (Dot[options.shape] || Dot.circle);
        return shapeFn(dotData, cx, cy, r, maxR);
    }

    static square(dotData, cx, cy, r, maxR) {
        var size = r * 2;
        return React.createElement(
            'rect', 
            Utils.cloneAndAugment(dotData, {
                x : cx - r,
                y : cy - r,
                width : size, height : size
            })
        );
    }

    static circle(dotData, cx, cy, r, maxR) {
        return React.createElement(
            'circle', 
            Utils.cloneAndAugment(dotData, { 
                cx : cx, 
                cy : cy, 
                r : r 
            })
        );
    }   
}

