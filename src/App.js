import logo from './Book.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My bookends Web</h1>
        <img src={logo}className="App-logo" alt="logo" />
        <p>
           Welcome to your favorite digital book store
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         See our products
        </a>
      </header>
    </div>
  );
}

export default App;
