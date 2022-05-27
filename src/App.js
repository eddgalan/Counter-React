import './App.css';
import './bootstrap/bootstrap.min.css';
import ButtonReact from './components/button/button.jsx';
import logoAlphaTeamDev from './img/AlphaTeamDev-sm.png';

function App() {
  const add = () => {
    console.log("Click button");
  }

  const restart = () => {
    console.log("Restart");
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={ logoAlphaTeamDev } alt="Logo AlphaTeamDev"/>
      </div>
      <div className="main-container">
        <ButtonReact text="Clic" type="btn btn-primary" actionClick={add} />
        <ButtonReact text="Restart" type="btn btn-danger" actionClick={restart} />
      </div>
    </div>
  );
}

export default App;
