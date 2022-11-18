import { createContext, useContext } from "react";

import { createUserWithEmailAndPassword } from 'firebase/auth';

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export function AuthProvider({ children }) {

    const signup = (email, password) => {
        console.log(email, password);
    }
    return <authContext.Provider value={{ signup }}>{children}</authContext.Provider>;
}