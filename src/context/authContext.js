import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../ConfigFirebase';

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};



export function AuthProvider({ children }) {

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const signup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    return <authContext.Provider value={{ signup, login }}>{children}</authContext.Provider>;
}