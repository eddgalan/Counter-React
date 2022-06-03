import React from 'react';
import './counter.css';

class Counter extends React.Component {
  render() {
    return (
      <div className="counter text-center">
        { this.props.numClicks }
      </div>
    )
  }
}

export default Counter;
