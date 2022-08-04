import { useAuth0 } from '@auth0/auth0-react';


function Login() {

    const { isAuthenticated, loginWithRedirect, error, logout } = useAuth0();
    return !isAuthenticated 
    ? <button onClick={loginWithRedirect}>Login</button>
    : <button onClick={logout}>Logout</button>
}

export default Login;
