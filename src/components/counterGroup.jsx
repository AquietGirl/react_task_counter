import React from "react";
import { Component } from "react";
import store from '../store'
import Counter from "./counter";
import { connect } from "react-redux";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.addNumber)
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
          <label>Total Value: {this.props.value}</label>
        </p>
        {initArray.map((key) => (
          <Counter
            key={key}
            addCount={this.props.addNumber}
            subCount = {this.props.subNumber}
            diffCount= {this.props.diffNumber}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {value:state}
}

const mapDispatchToProps = dispatch => ({
  addNumber: () => dispatch({type: 'INCREMENT'}),
  subNumber: () => dispatch({type: 'DECREMENT'}),
  diffNumber: (lastValue) => dispatch({type: 'DIFF', payload: lastValue})
})


export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup)
// export default CounterGroup;
