// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var app = document.createElement('div');
app.id = "mount"
document.body.appendChild(app)

var fs = require('fs');

app.innerHTML = 'app'

// bundle = require('./www/bundle.js')
