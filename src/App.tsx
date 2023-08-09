import { useState } from 'react'
import './App.css'


function App() {
  
  const [coinResult, setCoinResult] = useState(0)
  const [heads, setHeads] = useState(0)
  const [tails, setTails] = useState(0)

  const updateTally = (result: number) => {
    setCoinResult(result)

    if (result == 0) 
    {
      setHeads((heads) => heads + 1)
    } 
    else 
    {
      setTails((tails) => tails + 1)
    }
  }

  return (
    <>
    <h1>Coin Toss</h1>
      <div className="card">
        <button onClick={() => updateTally(Math.floor(Math.random() * 2)) }>
          Toss the coin.
        </button>
        <p>
          {coinResult}
        </p>
        <p>
          Heads has landed {heads} times
          <br></br>
          Tails has landed {tails} times
        </p>
      </div>
      <p className="footer-msg">
        Press the button to flip the coin.
      </p>
    </>
  )
}

export default App
