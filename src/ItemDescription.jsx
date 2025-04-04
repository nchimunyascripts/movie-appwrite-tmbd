import React, { Component } from "react";

export default class ItemDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.decrement}>+</button>
      </div>
    );
  }
}
