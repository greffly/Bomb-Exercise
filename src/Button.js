import React, { Component } from "react";

class Button extends Component {
  state = { who: "world" };

  render() {
    return (
      <div className="HelloWorld">
        <p>Hello, {this.state.who}</p>
        <button>World</button>
        <button onClick={() => this.setState({ who: "friend" })}>Friend</button>
        <button onClick={() => this.setState({ who: "react" })}>React</button>
      </div>
    );
  }
}

export default Button;
