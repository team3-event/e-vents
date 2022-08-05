import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const User = (props) => {
  const  {user, isAuthenticated} = useAuth0();

  const help = () => {
    if(isAuthenticated) props.handleUser(user.email);
  } 
  useEffect(() => {
    help();

  }, [])


  return (
    <div>
    </div>
  )


}

export default User;