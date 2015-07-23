/* jshint esnext: true */

import React from 'react';
import AngularDemo  from '../guide-polar-xangular/AngularDemo';
import RadialDemo  from '../guide-polar-yradial/RadialDemo';

import '../../stylesheets/demo.css';

export default class GuideDemo extends React.Component {
  render() {

  	return <demo className="scale">
    <div>

      <div>
      <h3>Angular</h3>
        <AngularDemo/>
      </div>

      <div>
      <h3>Radial</h3>
        <RadialDemo/>
	  </div>

    </div>
	</demo>;

  }
}


