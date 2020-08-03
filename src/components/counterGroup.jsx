import React from "react";
import { Component } from "react";
import { incrementCount, decrementCount, diffCount } from "../actions/counterAction";
import Counter from "./counter";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0,
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
    this.props.store.dispatch(diffCount(value))
  }

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
          <label>Total Value: {this.props.store.getState()}</label>
        </p>
        {initArray.map((key) => (
          <Counter
            key={key}
            onIncrease={() => this.props.store.dispatch(incrementCount())}
            onDescrease={() => this.props.store.dispatch(decrementCount())}
            clearLastValue = {this.clearLastValue}
          />
        ))}
      </div>
    );
  }
}

export default CounterGroup;
