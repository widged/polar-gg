/* jshint esnext: true */

import React from 'react';
import Tabs  from './Tabs.jsx';

const {Component} = React;

class TabbedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { active : 0 };
    this.bound = {
      onTabChange: this.onTabChange.bind(this)
    }
  }

  onTabChange(active) {
    this.setState({active});
  }

  render() {
    var {children}    = this.props;
    var {active}      = this.state;
    var {onTabChange} = this.bound;
    const tabTitles   = children.map(function(page) { return page.props.tab; });
    const pageContent = children[active].props.children;
    return <tabbed-container>
        <Tabs active={active} titles={tabTitles} onChange={onTabChange} />
        <page>{pageContent}</page>
    </tabbed-container>
  }
}

export default TabbedContainer;
