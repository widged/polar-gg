import * as React from "react";
import Hello from "./Hello";

class HelloReactAndTypescript extends React.Component<void, void>{
    render() {
      return <Hello framework="G" compiler="H" />;
    }
}

export default HelloReactAndTypescript;