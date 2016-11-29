"use strict";
const React = require("react");
const Hello_1 = require("./Hello");
class HelloReactAndTypescript extends React.Component {
    render() {
        return React.createElement(Hello_1.default, {framework: "G", compiler: "H"});
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelloReactAndTypescript;
//# sourceMappingURL=HelloReactAndTypescript.js.map