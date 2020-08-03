import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      originSize: this.props.changeSize,
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

  static getDerivedStateFromProps(props, state) {
      if (props.changeSize !== state.originSize) {
         return {
              value: 0,
              originSize: props.changeSize,
          }
      }
      return null;
  }

  subCount = () => {
    this.setState((preState) => ({ value: preState.value - 1 }));
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
