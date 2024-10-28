import UseCounter from "../hooks/UseCounter"

const Counter = () => {

    const {count, increase, decrease} = UseCounter({
      initialValue: 20
    })
  return (
    <div>
      <h3>Contador <small>{count}</small></h3>

      <button onClick={ () => increase(1) } >
        +1
      </button>
      <button onClick={ () => decrease(2) } >
        -1
      </button>
    </div>
  )
}

export default Counter
