/* jshint esnext: true */

import '../demo/demo.css';

import React from 'react';

export default  class Demo extends React.Component {
    render() {
        var {children} = this.props;
        return <demo>
            {children}
        </demo>;
    }
}