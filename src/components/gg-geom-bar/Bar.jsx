import React from 'react';

export default class Bar extends React.Component {

    constructor() {
        super();
    }

    render() {
        var data    = this.props;
        var idx     = data.idx;
        var style     = data.style;
        return <rect className={'geom g-' + idx} x={data.x} y={data.y} width={data.width} height={data.height} transform={data.transform} style={style}  />;
    }
}
