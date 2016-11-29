/* jshint esnext: true */

import React from 'react';

export default  class PageView extends React.Component {

    constructor(props) {
        super();
        var {active,onActiveChange} = props;
        this.state = {active: active};
        onActiveChange((active) => {
            console.log('ACTIVE', active)
            this.setState({active: active})
        })
    }

    render() {
        var {pages} = this.props;
        var {active} = this.state;
        var page = (pages && pages.hasOwnProperty(active)) ? pages[active] : '';
        return <page-view>
            {page}
        </page-view>;
    }
}