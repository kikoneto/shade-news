import { useState, createContext, useContext } from "react";

export const AuthIntContext = createContext();

export const AuthIntProvider = ({ children }) => {

    const [logout, setLogout] = useState(false);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [menu, setMenu] = useState(false);
    const [none, setNone] = useState(false);

    const changeToNone = () => {
        setNone(true);
        setLogout(false);
        setLogin(false);
        setRegister(false);
        setMenu(false);
    }

    const changeToLogout = () => {
        setNone(false);
        setLogout(true);
        setLogin(false);
        setRegister(false);
        setMenu(false);
    }

    const changeToLogin = () => {
        setNone(false);
        setLogout(false);
        setLogin(true);
        setRegister(false);
        setMenu(false);
    }

    const changeToRegister = () => {
        setNone(false);
        setLogout(false);
        setLogin(false);
        setRegister(true);
        setMenu(false);
    }

    const changeToMenu = () => {
        setNone(false);
        setLogout(false);
        setLogin(false);
        setRegister(false);
        setMenu(true);
    }

    return (
        <AuthIntContext.Provider value={{ changeToNone, changeToLogout, changeToLogin, changeToRegister, changeToMenu, login, register, menu, logout, none }}>
            {children}
        </AuthIntContext.Provider >
    )
}

export const useAuthInt = () => {
    const authInt = useContext(AuthIntContext);

    return authInt;
}