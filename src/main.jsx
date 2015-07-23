import './main.css';

import React from 'react';
import App from './lib/App';

main();

function main() {
    var app = document.createElement('div');
    document.body.appendChild(app);

    React.render(<App />, app);
}
