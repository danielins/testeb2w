/**
 * App.js
 * - Script principal da aplicação
 */

require('./sass/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';

ReactDOM.render(
	<Home />,
	document.getElementById('app')
);