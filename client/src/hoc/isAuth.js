import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export const isAuth = (Component) => {

    const RedirectComponent = (props) => {

        const { user } = useAuth();

        if (user) {
            return <Component {...props} />
        } else {
            return <Navigate to={'/'} />
        }
    }

    return RedirectComponent;
}