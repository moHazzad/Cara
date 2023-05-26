import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase/Firebase";

export const AuthContext = createContext(null);

function AuthProviders({ children }) {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)


  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
        setUser(CurrentUser);
        setLoading(false)

      });
    // stop observing while unmounting
    return () => {
      return unsubscribe();
    };
  }, []);

  const userLogOut = ()=>{
    return signOut(auth)
    
  }

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    userLogOut
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProviders;
