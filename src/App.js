import React from 'react';
import './App.css';
import './bootstrap/bootstrap.min.css';
import ButtonReact from './components/button/button.jsx';
import Counter from './components/counter/counter.jsx';
import logoAlphaTeamDev from './img/AlphaTeamDev-sm.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = { numClicks: 0 };
    this.add = this.add.bind(this);
    this.restart = this.restart.bind(this);
  }

  add() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }

  restart() {
    this.setState({ numClicks: 0 });
  }

  render() {
    return (
      <div className="App">
        <div className="logo-container">
          <img className="logo" src={ logoAlphaTeamDev } alt="Logo AlphaTeamDev"/>
        </div>
        <div className="main-container">
          <Counter numClicks={ this.state.numClicks } />
          <ButtonReact text="Clic" type="btn btn-primary" actionClick={ this.add } />
          <ButtonReact text="Restart" type="btn btn-danger" actionClick={ this.restart } />
        </div>
      </div>
    );
  }
}

export default App;
