import './App.css';
import { useState, useEffect } from 'react';
import BitcoinPrice from '../src/components/BitcoinPrice/indext';
import BuyBitcoin from '../src/components/BuyBitcoin/index';

/**
 * 
 * api 
 * - currentprice : /api/currentprice
 * - currentprice By code : /api/currentprice/:id
 * - supported-currencies" : /api/supported-currencies"
 * 
 * ถ้า npm i ไม่ได้ให้ลบ package-lock ออกแล้ว npm i ไหม่
 */






const router = (page) => {
  if (page != null && page == "Bitcoin-price") {
    return (
      <>
        <BitcoinPrice />
      </>
    )
  }
  if (page != null && page == "Buy-Bitcoin") {
    return (
      <>
        <BuyBitcoin />
      </>
    )
  }
}

function App() {


  

  const [page, setPage] = useState("Bitcoin-price")

  const [state, setState] = useState([])
  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/supported-currencies.json").then(
      res => setState(res.data)
    )
  })

  return (
    <div className="App">
      <header className="Bitcoin-header" style={{ marginLeft: 100 }}>
        <p>
          EASY REACT
          <a className="Bitcoin-link" onClick={() => { setPage("Bitcoin-price"); router(page) }}>Bitcoin price </a>
          <a className="Bitcoin-link" onClick={() => { setPage("Buy-Bitcoin"); router(page) }}>Buy bitcoin </a>
          {/* {state.map( d => <div>{d}</div>)} */}
        </p>

      </header>
      {
        router(page)
      }
    </div>
  );
}

export default App;
