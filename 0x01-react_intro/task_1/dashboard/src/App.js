import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <>
      <header className="App-header">
        <img width={200} height={200} src={logo} alt="Holberton School logo"></img>
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label>Email:</label>
        <input type="email" id="email" />
        <label>Password:</label>
        <input type="password" id="password"></input>
        <button className='ok'>OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
}

export default App;