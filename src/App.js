import logo from './logo.svg';
import './App.css';
import Ccomponent from './Ccomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ccomponent numbers={[1, 2, 3, 4]}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web Developer Blog
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Developer Blog
        </a>
      </header>
    </div>
  );
}

export default App;
