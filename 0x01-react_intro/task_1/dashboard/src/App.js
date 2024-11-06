import Holberton from './HolbertonLogo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Holberton} className="App-logo" alt="logo" />
        <h1 className='App-h1'>School dashboard</h1>
      </header>
      <body className='App-body'>Login to access the full dashboard</body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;