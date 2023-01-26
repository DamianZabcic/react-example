import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Muchachos...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='footer'>
        <img src='https://raw.githubusercontent.com/DamianZabcic/footer/fa4262610627165c151f6beb242a8049d18a2670/autor.svg' className='imagen-footer' alt="Damián Zabcic" />
      </div>
    </div>
  );
}

export default App;
