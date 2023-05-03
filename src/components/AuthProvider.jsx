import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth , email, password)
    };
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth , email, password)
    };
    const logOut = () => {
        return signOut(auth);
    }
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // setLoading(false);
        });

        // stop observing while unmounting 
        return () =>{
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createuser,
        signIn,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;