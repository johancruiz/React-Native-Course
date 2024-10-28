import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { ReqresUserList } from "../interfaces"
import UserRow from "./UserRow";

const loadUsers = async(page: number = 1):Promise<User[]> => {
    try {
        const {data} = await  axios.get<ReqresUserList>('https://reqres.in/api/users', {
            params: {
                page: page
            }
        });
        return data.data;
    } catch (error) {
        return[];
    }
    
}


const UsersPage = () => {

    const [users, setUsers] = useState<User[]>([])
    const currentPageRef = useRef(1);

    useEffect(() => {
        loadUsers(currentPageRef.current)
            .then(setUsers)
    }, [])

    const nextPage = async() => {
       currentPageRef.current++; 
       loadUsers(currentPageRef.current);
       if (users.length > 0) {
           setUsers(users); 
       }else{
        currentPageRef.current--;
       }
    }

    const prevPage = async() => {
        if (currentPageRef.current < 1) return 
        currentPageRef.current--; 
        const users = await loadUsers(currentPageRef.current--)
        setUsers(users)
     }

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


