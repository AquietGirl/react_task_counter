import React from "react";
import { Component } from "react";
import Counter from "./counter";

class CounterGroup extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      size: 0,
      totalValue: 0,
    };
  }

  handleResize = (event) => {
    const newSize = event.target.value ? parseInt(event.target.value) : 0;
    if (this.state.size !== newSize) {
      this.setState({
        size: newSize
      });
    }
  };

  clearLastValue = (value) => {
    this.setState((preState) => ({
      totalValue: preState.totalValue - value
    }))
  }

  handleIncrease = () => {
    this.setState((preState) => ({
      totalValue: preState.totalValue + 1,
    }));
  };

  handleDescrease = () => {
    this.setState((preState) => ({
      totalValue: preState.totalValue - 1,
    }));
  };

  render() {
    const initArray = [...Array(this.state.size).keys()];

    return (
      <div>
        <p>
          <label>
            Group size:
            <input onBlur={this.handleResize} />
          </label>
        </p>
        <p>
          <label>Total Value: {this.state.totalValue}</label>
        </p>
        {initArray.map((key) => (
          <Counter
            key={key}
            onIncrease={this.handleIncrease}
            onDescrease={this.handleDescrease}
            clearLastValue = {this.clearLastValue}
          />
        ))}
      </div>
    );
  }
}

export default CounterGroup;
