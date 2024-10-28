import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(10)

    const increase = (value: number) => {
        setCount(count + value)
    }

    const decrease = (value: number) => {
        setCount(count - value)
    }

  return (
    <div>
      <h3>Contador <small>{count}</small></h3>

      <button onClick={ () => increase(1) } >
        +1
      </button>
      <button onClick={ () => decrease(1) } >
        -1
      </button>
    </div>
  )
}

export default Counter
