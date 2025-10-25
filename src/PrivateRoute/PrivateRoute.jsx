import React, { useContext } from 'react';
import AuthContext from '../Firebase + Authentication/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

const {user,loader}=useContext(AuthContext)

const location=useLocation();



if(loader){
    return <p>Loading....</p>
}

if(user){
    return children 
}

else{
    return <Navigate to={"/login"}  state={{from:location}}></Navigate>
}

  return (
    <div>
      Private Route 
    </div>
  );
}

export default PrivateRoute;
