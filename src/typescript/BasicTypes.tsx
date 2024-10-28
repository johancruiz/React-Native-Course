

const BasicTypes = () => {

    const name: string = "Johan"
    const age: number = 20;
    const isActive: boolean = true;

    const powers: string[] = ['React', 'React Native', 'Angular']
  return (
    <div>
      <h3>Tipos Basicos</h3>

      {name} {age} {isActive ? 'true': 'false'}

      <br></br>

      {powers.join(',')}
    </div>
  )
}

export default BasicTypes
