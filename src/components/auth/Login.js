import { useAuth0 } from '@auth0/auth0-react';

function Login() {

    let { isAuthenticated, loginWithRedirect, error } = useAuth0();
    console.log(isAuthenticated, error);
    
    return !isAuthenticated && <button onClick={loginWithRedirect}>Login</button>
}

export default Login;