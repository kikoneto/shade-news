import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export const isAuth = (Component) => {

    const RedirectComponent = () => {

        const { user } = useAuth();

        if (user) {
            return <Component />
        } else {
            return <Navigate to={'/'} />
        }
    }

    return RedirectComponent;
}