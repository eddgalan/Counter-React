import React from 'react';
import './button.css';

class ButtonReact extends React.Component {
  render() {
    return(
      <button className={ this.props.type } onClick={ this.props.actionClick } > {this.props.text} </button>
    );
  }
}

export default ButtonReact;
