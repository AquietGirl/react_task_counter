import React from "react";
import { Component } from "react";
import Counter from "./counter";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {addNumber, subNumber, diffNumber} from '../actions/counterAction'

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
          <label>Total Value: {this.props.num}</label>
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


CounterGroup.propTypes = {
  num: PropTypes.number.isRequired,
  addNumber: PropTypes.func.isRequired,
  subNumber: PropTypes.func.isRequired,
  diffNumber: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {num:state}
}

const mapDispatchToProps = {
  addNumber,
  subNumber,
  diffNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup)
