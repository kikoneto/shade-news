import './Login.css';

import { useContext, useState } from 'react';
import { AuthIntContext } from '../../../contexts/userInteractionContext';

export const Login = () => {

    const { changeAuth, currAuth } = useContext(AuthIntContext)
    const [remembered, setRemembered] = useState(false);

    const removeLogin = () => {
        changeAuth('');
    }

    const redirectToRegister = (e) => {
        e.preventDefault();
        changeAuth('register');
    }

    const changeRemeber = () => {
        if (remembered == true) {
            setRemembered(false);
        } else {
            setRemembered(true)
        }
    }



    return (
        <section className={currAuth === 'login' ? 'login-section dark' : 'login-section '}>
            <div className="login">
                <div className={currAuth === 'login' ? 'login-panel active' : 'login-panel '}>
                    <i className="fa-solid fa-arrow-left" onClick={removeLogin}></i>
                    <h1>Sign In</h1>
                    <form className="login-form">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <input type="submit" value="Sign in" />
                    </form>
                    <div className="login-additional">
                        <div className="options-container">

                            <div className="remember-container">
                                <div className={remembered ? 'remember active' : 'remember'} onClick={changeRemeber}></div>
                                <p>Remember me</p>
                            </div>

                            <div className="sign-later">
                                <p>New to Shade<span>News</span>?</p>
                                <a href="" onClick={redirectToRegister}>Sign Up Now.</a>
                            </div>

                        </div>

                        <div className="help-container">
                            <a href="#help">Need Help?</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}