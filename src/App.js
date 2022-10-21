
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <h1> <i className="fa-solid fa-book-open"></i> Dictionary</h1>
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer>
      This project was coded by {" "} 
      <a href="SarahClarke.io" target="_blank" rel="noopener noreferrer">
        Sarah Clarke
      </a>{" "}
      and is {" "}
      <a href="https://github.com/ClarSar/react-finalproject-dictionary-app" target="_blank" rel="noopener noreferrer">
        Open Sourced on Github</a>
      </footer>
    </div>
    </div>
  );
}

export default App;
