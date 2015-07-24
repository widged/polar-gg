/* jshint esnext: true */

import '../demo/demo.css';

import React from 'react';

class Section extends React.Component {
  render() {
    const {title, children} = this.props;
    return <section>
      <title>{title}</title>
      {children}
    </section>;
  }
}


export default  class Demo extends React.Component {
    render() {
        var {children, className} = this.props;
        return <demo className={className}>
            {children}
        </demo>;
    }
}

Demo.Section = Section;
