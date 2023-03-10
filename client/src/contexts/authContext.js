import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login, register } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const initialState = {
        _id: '',
        email: '',
        gender: '',
        username: '',
        avatarUrl: '',
        accessToken: '',
    }

    const [user, setUser] = useLocalStorage('auth', { ...initialState });
    

    const onLogin = (authData) => {
        login(authData)
            .then(res => {
                let user = {
                    accessToken: res.accessToken,
                    avatarUrl: res.avatarUrl,
                    email: res.email,
                    gender: res.gender,
                    username: res.username,
                    _createdOn: res._createdOn,
                    _id: res._id
                }

                setUser(user);
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
                    _id: res._id
                }
                setUser(user)
            })
            .catch(err => {
                alert(err);
            });
    }

    const onLogout = () => {
        setUser(null);
    }


    return (
        <AuthContext.Provider value={{ onLogin, user, onLogout, onRegister }}>
            {children}
        </AuthContext.Provider>
    );
}