/* jshint esnext: true */

import React from 'react';

const {Component} = React;

class Tabs extends Component {

    constructor(props) {
        super();
        this.state = {active: parseInt(props.active) || 0};
    }

    handlePaneChange(event) {
        var active = parseInt(event.target.dataset.tab);
        this.setState( {active: active });
        this.dispatchChange(active);
    }

    dispatchChange(active) {
        var fn = this.props.onChange;
        if(typeof fn === 'function') { fn(active); }
    }

    render() {
        var active = this.state.active;
        var {titles} = this.props;

        var handlePaneChange = this.handlePaneChange.bind(this);

        return <tabs><ul>{
            (titles || []).map(function(item, i) {
                var isActive = (i === active) ? true : false;
                return <li key={'tab_'+i} className={isActive ? 'active' : null} data-tab={i} onClick={handlePaneChange}>{item}</li>;
        })}</ul></tabs>;
    }
}

export default Tabs;
