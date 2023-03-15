import logo from './logo.svg';
import key from './assets/images/key.svg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={key} className="App-logo" alt="logo" />
        <p>
          TEST Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/create"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to={'/create'}>HUI</Link>
      </header>
    </div>
  );
}

export default App;
