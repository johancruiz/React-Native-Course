import { User } from '../interfaces'

interface Props {
    user: User
}

const UserRow = ({user}: Props) => {
    const {avatar, last_name, first_name, email} = user;
  return (
    <div>
      <td ><img style={{width: "50px"}} src={ avatar }/></td>
      <td>{first_name} {last_name}</td>
      <td>{email}</td>
    </div>
  )
}

export default UserRow
