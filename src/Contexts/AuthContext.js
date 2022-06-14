import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

import { auth } from '../firebase-config';

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState();

    function logIn(email, password) {
        return signInWithEmailAndPassword( auth, email, password);
    }

    function signUp(email, password) {
        return createUserWithEmailAndPassword( auth, email, password);
    }

    function logOut() {
        return signOut( auth );
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup( auth, googleAuthProvider );
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider
            value={{ user, logIn, signUp, logOut, googleSignIn }}
        >
            {children}
        </AuthContext.Provider>
    );
}