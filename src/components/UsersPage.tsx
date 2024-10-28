
import UserRow from "./UserRow";
import UseUsers from "../hooks/UseUsers";




const UsersPage = () => {

    const {users, nextPage, prevPage} = UseUsers();
   
  return (
    <>
        <h3>Usuarios: </h3>
        <table>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {users.map((user) => {
                        return (
                            <>
                                <UserRow key={user.id} user={user} />
                            </>

                        )
                        
                    })}
                    
                </tr>
            </tbody>
        </table>
        <button onClick={prevPage} >
            Prev
        </button>
        <button onClick={nextPage} >
            Next
        </button>
    </>
  )
}

export default UsersPage


