/* jshint esnext: true */

import React from 'react';
import ReactDom from 'react-dom';
import ChartsTabs from './ChartsTabs.jsx';

function main() {
  var app = document.createElement('app');
  document.body.appendChild(app);
  ReactDom.render(<ChartsTabs />, app);
}
main();
