/// <reference path="./interfaces.d.ts" />

import * as React from "react";
import * as ReactDom from "react-dom";

class Hello extends React.Component<IHelloProps, {}>{
    render() {
      var {compiler,framework} = this.props;
        return <div>
                <h1>Hello from <span className="myCustomStyleClass">{compiler}</span> and {framework}!</h1>
        </div>;
    }
}

export default Hello;
