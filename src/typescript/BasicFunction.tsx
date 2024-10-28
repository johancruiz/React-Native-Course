

const BasicFunction = () => {

    const addTwoNumbers = (a:number,b:number):number => {
        return a + b;
    }

  return (
    <>
        <h3>Funciones</h3>
        <span>El resultado de sumar: {addTwoNumbers(8,2)}</span>
    </>
  )
}

export default BasicFunction
