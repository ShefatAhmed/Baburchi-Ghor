import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();
const googleAuthProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth , email, password)
    };
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password)
    };
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }
    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createuser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;