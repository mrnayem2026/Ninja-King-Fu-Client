import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider,GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,updateProfile, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';



export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const createUser = (email, password) =>{
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () =>{
        // setLoading(true)
        return signInWithPopup(auth, googleAuthProvider);
    }

    const singInWithGithub = () => {
        // setLoading(true)
        return signInWithPopup(auth,githubAuthProvider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    // observe auth state change
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        singInWithGithub,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;