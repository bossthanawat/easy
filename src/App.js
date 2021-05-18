import logo from './logo.svg';
import './App.css';

/**
 * 
 * api 
 * - currentprice : /api/currentprice
 * - currentprice By code : /api/currentprice/:id
 * - supported-currencies" : /api/supported-currencies"
 * 
 * ถ้า npm i ไม่ได้ให้ลบ package-lock ออกแล้ว npm i ไหม่
 */

function App() {
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
    </div>
  );
}

export default App;
