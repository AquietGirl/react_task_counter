import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div>
        <button onClick={this.subCount}>-</button>
        <span>{this.state.value}</span>
        <button onClick={this.addCount}>+</button>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.clearLastValue(this.state.value);
  }

  subCount = () => {
    this.setState((preState) => ({
      value: preState.value - 1,
    }));
    this.props.onDescrease();
  };

  addCount = () => {
    this.setState((preState) => ({
      value: preState.value + 1,
    }));
    this.props.onIncrease();
  };
}

export default Counter;
