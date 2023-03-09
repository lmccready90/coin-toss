import { useState } from 'react'
import './App.css'

const coinSides = [
  "Heads",
  "Tails"
]

function App() {
  const [result, coinResult] = useState(0)

  return (
    <div className="App">
      <h1>Heads or Tails?</h1>
      <div className="card">
        <button onClick={() => coinResult(Math.floor(Math.random() * coinSides.length))}>
          Flip the coin 
        </button>
        <p>And the result is:</p>
        <p className="result">
          {coinSides[result]}
        </p>
      </div>
    </div>
  )
}

export default App
