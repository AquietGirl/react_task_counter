import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCount, decrementCount, diffCount } from "../actions/counterAction";
import store from '../store'

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
    // store.dispatch(diffCount(this.state.value))
    console.log(this.state.value)
    this.props.diffCount(this.state.value)
  }

  subCount = () => {
    this.setState((preState) => ({
      value: preState.value - 1,
    }));
    this.props.subCount();
  };

  addCount = () => {
    this.setState((preState) => ({
      value: preState.value + 1,
    }));
    this.props.addCount();
  };
}

export default Counter;
