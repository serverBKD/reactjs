import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [discount, setDiscount] = useState(10)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button
            type="button"
            onClick={() => setDiscount((discount) => discount - 10)}
          >
            count is: {discount}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
