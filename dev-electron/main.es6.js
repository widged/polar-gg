/* jshint esnext: true */

import {linkStylesheet} from './lib/StyleInjector.es6.js';

import React from 'react';
import ReactDom from 'react-dom';

import {bindOnFns} from '../src/lib/react-utils/react-bind-listeners.js';

linkStylesheet([
	'../etc/style/app.css',
	'../etc/style/spectre.min.css',
	'../etc/stylesheets/stylesheet.css',
	'../src/usage/preview.css',
	'../src/components/demo/demo.css',
	'../src/gog/guide-axis/axis.css',
	'../src/gog/plot-monthly/monthly.css',

]);


require('../src/usage/preview.jsx');
