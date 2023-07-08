import logo from './logo.svg';
import './App.css';
import {fruits} from "./foods.js"
import {choice , remove } from "./Helpers.js"
import {Person} from "./index2.js"

function App() {
  console.log(choice(fruits))
  const selection = choice(fruits)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>,
    <div>
      <Person choice = {selection} fruits = {fruits} remove = {remove(fruits , selection)}/>
    </div>
  );
}

export default App;
