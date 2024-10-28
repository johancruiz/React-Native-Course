import { useEffect } from "react";
import { useAuthStore } from '../store/auth.store';

const LoginPage = () => {

    const authStatus = useAuthStore(state =>state.status);
    const login = useAuthStore(state =>state.login);
    const user = useAuthStore(state => state.user )
    const logout = useAuthStore(state =>state.logout);

    useEffect(() => {
        setTimeout(() => {
            logout()
        }, 1500)
    }, [])

    if (authStatus === 'checking') {
        return <h3>Loading...</h3>
    }

  return (
    <>
        <h3>Login Page</h3>
        {(authStatus === 'authenticated') 
            ? <div>Autenticado como: { JSON.stringify(user, null, 2) }</div>
            : <div>No autenticado</div>
        }
        {
            (authStatus === 'authenticated')
            ? (
                <button onClick={ logout } >Logout</button>
            )
            : (
                <button onClick={ () => login('Johancamilo0108', '123') } >
                    Login
                </button>
            )
        }
        
    </>
    
  )
}

export default LoginPage
