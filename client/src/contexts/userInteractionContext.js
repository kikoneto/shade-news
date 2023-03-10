import { useState, createContext, useContext } from "react";

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

export const useAuthInt = () => {
    const authInt = useContext(AuthIntContext);

    return authInt;
}