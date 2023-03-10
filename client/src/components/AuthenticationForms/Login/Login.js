import './Login.css';

import { useState } from 'react';
import { useAuthInt } from '../../../contexts/userInteractionContext';
import { useAuth } from '../../../contexts/authContext';

export const Login = () => {

    const { changeAuth, currAuth } = useAuthInt();
    const { onLogin } = useAuth();

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

    const loginHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let email = form.get('email');
        let password = form.get('password');

        if (email && password) {
            onLogin({ email, password });
            changeAuth('');

        } else {
            alert('Empty Fields!')
        }
    }

    return (
        <section className={currAuth === 'login' ? 'login-section dark' : 'login-section '}>
            <div className="login">
                <div className={currAuth === 'login' ? 'login-panel active' : 'login-panel '}>
                    <i className="fa-solid fa-arrow-left" onClick={removeLogin}></i>
                    <h1>Sign In</h1>
                    <form className="login-form" onSubmit={loginHandler}>
                        <input type="text" name='email' placeholder="Email" />
                        <input type="password" name='password' placeholder="Password" />
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
                                <a onClick={redirectToRegister}>Sign Up Now.</a>
                            </div>

                        </div>

                        <div className="help-container">
                            <a>Need Help?</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}