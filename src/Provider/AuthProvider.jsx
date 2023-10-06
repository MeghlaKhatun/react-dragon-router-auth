
import PropTypes from 'prop-types'
import { useState } from 'react';
import { createContext } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext=createContext(null);
const auth = getAuth(app);
const AuthProvider =({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser=>{
            console.log("user in the auth change",currentUser); 
            setLoading(false); 
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo={
        user,
        createUser,
        loading,
        logIn,
        logOut
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children:PropTypes.node,
}

export default AuthProvider