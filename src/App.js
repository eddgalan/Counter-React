import './App.css';
import './bootstrap/bootstrap.min.css';
import { useState } from 'react';
import ButtonReact from './components/button/button.jsx';
import Counter from './components/counter/counter.jsx';
import logoAlphaTeamDev from './img/AlphaTeamDev-sm.png';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const add = () => {
    setNumClicks( numClicks+1 );
  }

  const restart = () => {
    setNumClicks( 0 );
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={ logoAlphaTeamDev } alt="Logo AlphaTeamDev"/>
      </div>
      <div className="main-container">
        <Counter numClicks={ numClicks } />
        <ButtonReact text="Clic" type="btn btn-primary" actionClick={add} />
        <ButtonReact text="Restart" type="btn btn-danger" actionClick={restart} />
      </div>
    </div>
  );
}

export default App;
