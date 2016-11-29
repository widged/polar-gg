// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const ipc = require('electron').ipcMain;

ipc.on('printToPDF', function(event, arg) {
  var path = require('path');
  console.log(arg);  // prints "ping"
  mainWindow.webContents.printToPDF({silent:false, landscape: true, printBackground: true}, function (err, data) {
    if (err) { console.error(err); }
    var fs = require('fs');
    fs.writeFile(path.resolve('/Users/marielle/Downloads/electron.pdf'), data, function (err) {
      if (err) { console.error(err); }
    });
  });
});


/* Usage. In the dev console, type
const ipc = require('electron').ipcRenderer
ipc.sendSync('export-html', document.querySelector('body').innerHTML, 'x2.html')
*/
ipc.on('export-html', function(event, html, file) {
  var path = require('path');
  var fs = require('fs');
  console.log('[WRITE] html to: ', path.resolve(file));
  fs.writeFile(path.resolve(file), html, function (err) {
    if (err) { console.error(err); }
  });
  event.sender.send('html-exported');
  event.returnValue = 'done';
});
/*
const ipc = require('electron').ipcRenderer

const syncMsgBtn = document.getElementById('sync-msg')

syncMsgBtn.addEventListener('click', function () {
  const reply = ipc.sendSync('synchronous-message', 'ping')
  const message = `Synchronous message reply: ${reply}`
  document.getElementById('sync-reply').innerHTML = message
})
*/

// ########################################################################
// ########################################################################
// ########################################################################

var ipc = require('ipc');

ipc.on('reactdevtools', function(event) {
  var reactdevtools    = path.resolve(__dirname + '/vendor/react-devtools');
  BrowserWindow.addDevToolsExtension(reactdevtools);
});

// issue with the background not being printed
ipc.on('printToPDF', function(event, file) {
  var pdfOptions = {
      silent:false,
      marginsType: 0,
      pageSize: 'A4',
      printBackground: true,
      landscape: true
    };
mainWindow.webContents.printToPDF(pdfOptions, function (err, data) {
  if (err) { console.error(err); }
  var fs = require('fs');
  fs.writeFile(path.resolve(file), data, function (err) {
    if (err) { console.error(err); }
    console.log('[WROTE]', file);  // prints "ping"
  });
});
});

ipc.on('exportToPNG', function(event, rect, file) {
var fs = require('fs');
if(!file) { file = process.cwd() + '/screenshot.png'; }
mainWindow.capturePage(rect, function(buf) {
  fs.writeFile(path.resolve(file), buf.toPng(), function(err) {
    if (err) { console.error(err); }
    console.log('[WROTE]', path.resolve(file));
  });
});
});



ipc.on('exportHTML', function(event, html, file) {
  var fs = require('fs');
  fs.writeFile(path.resolve(file), html, function (err) {
    if (err) { console.error(err); }
    console.log('[WROTE]', path.resolve(file));
  });
});
