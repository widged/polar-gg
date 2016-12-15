/* jshint esnext: true */

import React from 'react';

const {Component} = React;

class SectionsGrid extends Component {

  constructor(props) {
    super(props);
    this.bound  = {
      renderItem: this.renderItem.bind(this)
    };
  }

  renderItem(contents, i) {
    var {title} = contents.props;
    return (
      <section key={"k"+i}>
        { title ? <title>{title}</title> : null }
        {contents}
      </section>
  );
  }

  render() {
    const {renderItem} = this.bound;
    const {sections} = this.props;
    return <sections-grid>
      {sections.map(renderItem)}
    </sections-grid>;
  }
}

export default SectionsGrid;
