import React from 'react';
import './counter.css';

function Counter( { numClicks } ) {
  return (
    <div className="counter text-center">
      { numClicks }
    </div>
  )
}

export default Counter;
