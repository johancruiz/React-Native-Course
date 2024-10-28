
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address
    isAlive?: boolean;
}

interface Address {
    country: string;
    houseNo: number
}

const ObjectLiteral = () => {

    const person: Person = {
        firstName: 'Johan',
        age: 20,
        lastName: "Ruiz",
        address: {
             country: 'Canada',
             houseNo: 615
        }
    }

  return (
    <>
        <h3>Object Literals</h3>
        {JSON.stringify(person)}
    </>
  )
}

export default ObjectLiteral
