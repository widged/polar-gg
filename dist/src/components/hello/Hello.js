/// <reference path="./interfaces.d.ts" />
"use strict";
const React = require("react");
class Hello extends React.Component {
    render() {
        var { compiler, framework } = this.props;
        return React.createElement("div", null, 
            React.createElement("h1", null, 
                "Hello from ", 
                React.createElement("span", {className: "myCustomStyleClass"}, compiler), 
                " and ", 
                framework, 
                "!")
        );
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hello;
//# sourceMappingURL=Hello.js.map