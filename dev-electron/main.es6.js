/* jshint esnext: true */

import {linkStylesheet} from './lib/StyleInjector.es6.js';

linkStylesheet([
	'etc/style/spectre.min.css',
	'etc/style/axis-defaults.css',
	'etc/style/monthly-defaults.css',
	'etc/style/tabs.css',
	'etc/style/sections-grid.css',
	'etc/style/app.css',
]);

require('../src/app/main.js');
