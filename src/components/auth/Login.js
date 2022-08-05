import { useAuth0 } from '@auth0/auth0-react';



function Login() {

    const { isAuthenticated, loginWithRedirect, error, logout } = useAuth0();
    return !isAuthenticated 
    ? <button onClick={loginWithRedirect} type="button" className="inline-flex mt-5 items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cyan-900 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >Login</button>
    : <button onClick={logout} type="button" className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-cyan-900 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >Logout</button>
}

export default Login;
