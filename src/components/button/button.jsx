import React from 'react';
import './button.css';

function ButtonRect({text, type, actionClick}) {
  return (
    <button className={ type } onClick={ actionClick } > {text} </button>
  )
}

export default ButtonRect;
