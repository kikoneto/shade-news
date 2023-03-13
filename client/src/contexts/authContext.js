import { createContext, useContext, useEffect } from "react";

// import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from "../hooks/useLocalStorage";
import { login, register } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // const navigate = useNavigate();

    const [user, setUser] = useLocalStorage('auth', null);

    // Temporary Solution for keeping user info on refresh
    useEffect(() => {
        if (user) {
            onLogin(user, true)
        }
    }, [])

    const onLogin = (authData, remembered) => {
        login(authData)
            .then(res => {
                let user = {
                    accessToken: res.accessToken,
                    avatarUrl: res.avatarUrl,
                    email: res.email,
                    gender: res.gender,
                    username: res.username,
                    _createdOn: res._createdOn,
                    _id: res._id,
                    password: authData.password
                }
                setUser(user, remembered);
            })
            .catch(err => {
                alert(err);
            });
    }

    const onRegister = (authData) => {
        register(authData)
            .then(res => {
                let user = {
                    accessToken: res.accessToken,
                    avatarUrl: res.avatarUrl,
                    email: res.email,
                    gender: res.gender,
                    username: res.username,
                    _createdOn: res._createdOn,
                    _id: res._id,
                    password: res.password
                }
                setUser(user);
            })
            .catch(err => {
                alert(err);
            });
    }

    const onLogout = () => {
        setUser(null, true);
    }

    return (
        <AuthContext.Provider value={{ onLogin, user, onLogout, onRegister }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const authContent = useContext(AuthContext);

    return authContent;
}