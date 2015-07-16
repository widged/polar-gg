/* jshint esnext: true */

import React from 'react';
import AngularDemo  from '../scale-polar-xangular/AngularDemo';
import RadialDemo  from '../scale-polar-yradial/RadialDemo';

import '../../stylesheets/demo.css';

export default class ScaleDemo extends React.Component {
  render() {

  	return <demo className="scale">
    <div>

      <h2>Guides</h2>

      <h3>Angular</h3>
        <AngularDemo/>

      <h3>Radial</h3>
        <RadialDemo/>
    </div>
	</demo>;

  }
}


