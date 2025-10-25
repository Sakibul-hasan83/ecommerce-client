import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase.config';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // create user 
  const createUser =(email,password)=>{
    setLoader(true);
    return createUserWithEmailAndPassword(auth ,email,password)
  }

  // sign in user 
  const signInUser=(email,password)=>{
    setLoader(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  // sign out user 
  const logout =()=>{
    setLoader(true);
    return signOut(auth)
  }

  // state change listener
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      setLoader(false);
    });
    return ()=> unSubscribe();
  },[]);

  const authInfo = {
    createUser,
    signInUser,
    logout,
    user,
    loader
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
