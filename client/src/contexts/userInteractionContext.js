import { useState, createContext } from "react";

export const AuthIntContext = createContext();

export const AuthIntProvider = ({ children }) => {

    const [currAuth, setCurrAuth] = useState('');

    const changeAuth = (auth) => {
        setCurrAuth(auth);
    }

    return (
        <AuthIntContext.Provider value={{ currAuth, changeAuth }}>
            {children}
        </AuthIntContext.Provider >
    )
}