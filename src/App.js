//import logo from './logo.svg';
import './App.css';
import Hola from './home/hola';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hola firstname="Facundo" secondname="Müller"></Hola>
        <h2>BlogApp</h2>
        <p>La nueva forma de hacer blogs</p>
      </header>
    </div>
  );
}

export default App;
