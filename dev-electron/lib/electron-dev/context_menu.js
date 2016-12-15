/* jshint esnext: true */

(function () {
    var electron = require('electron');
    var {remote} = electron;
    var {Menu,MenuItem} = remote;

    var currentWindow = remote.getCurrentWindow();
    var rightClickPosition = null;

    var cut = new MenuItem({
        label: "Cut",
        click: function () {
            document.execCommand("cut");
        }
    });

    var copy = new MenuItem({
        label: "Copy",
        click: function () {
            document.execCommand("copy");
        }
    });

    var paste = new MenuItem({
        label: "Paste",
        click: function () {
            document.execCommand("paste");
        }
    });

    var inspect = new MenuItem({
        label: 'Inspect Element',
        click: function() {
            currentWindow.inspectElement(rightClickPosition.x, rightClickPosition.y);
        }
    });

    var textMenu = new Menu();
    textMenu.append(cut);
    textMenu.append(copy);
    textMenu.append(paste);

    var defaultMenu = new Menu();
    defaultMenu.append(copy);
    defaultMenu.append(inspect);

    window.addEventListener('contextmenu', function (e) {

        switch (e.target.nodeName) {
            // This gives you default context menu (cut, copy, paste)
            // in all input fields and textareas across your app.
            case 'TEXTAREA':
            case 'INPUT':
                e.preventDefault();
                textMenu.popup(remote.getCurrentWindow());
                break;
            // This gives you access to "inspect element"
            // across your app.
            default:
              e.preventDefault();
              rightClickPosition = {x: e.x, y: e.y};
              defaultMenu.popup(remote.getCurrentWindow());
              break;
        }
    }, false);

}());
