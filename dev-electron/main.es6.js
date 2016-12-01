/* jshint esnext: true */

import {linkStylesheet} from './lib/StyleInjector.es6.js';

linkStylesheet([
	'../src/components/demo/demo-defaults.css',
	'../src/gog/guide-axis/axis-defaults.css',
	'../src/gog/plot-monthly/monthly-defaults.css',
	'../etc/style/app.css',
	'../etc/style/spectre.min.css',
	'../etc/stylesheets/stylesheet.css',
	'../src/usage/preview.css',
]);

require('../src/usage/preview.jsx');
