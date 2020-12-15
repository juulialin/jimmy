import logo from './logo.svg';
import './App.css';
import Jimmy from './components/Jimmy.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://instagram.fpoa4-1.fna.fbcdn.net/v/t51.2885-15/e35/106193065_131524141926081_2945055853923481462_n.jpg?_nc_ht=instagram.fpoa4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=6PR6xHu3JQEAX_1uGwS&tp=1&oh=faae79e8aed64008319b62e6fc8ebedc&oe=60000CD1" className="jimmy" alt="logo"  />
        <p>
          Qual o nome do gato?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
        <Jimmy/>
      </header>
    </div>
  );
}

export default App;
