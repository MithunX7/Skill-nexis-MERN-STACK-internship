
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h2>Counter App</h2>

      <h3>Count: {count}</h3>

      <button
        className="custom-button"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      <button
        className="custom-button"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>

      <button
        className="custom-button"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  )
}

export default Counter
