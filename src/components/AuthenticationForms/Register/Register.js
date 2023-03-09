import './Register.css';

import { useContext } from 'react';
import { AuthIntContext } from '../../../contexts/userInteractionContext';

export const Register = () => {

    const { changeAuth, currAuth } = useContext(AuthIntContext)

    const removeRegister = () => {
        changeAuth('');
    }

    const redirectToLogin = (e) => {
        e.preventDefault();
        changeAuth('login');
    }

    return (
        <section className={currAuth === 'register' ? 'register-section dark' : 'register-section'}>
            <div className="register">
                <div className={currAuth === 'register' ? 'register-panel active' : 'register-panel'}>
                    <i className="fa-solid fa-arrow-left" onClick={removeRegister}></i>
                    <h1>Create an account</h1>
                    <form className="register-form">
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Email Adress" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Re-Password" />
                        <input type="submit" value="Sign Up" />
                    </form>
                    <div className="register-additional">
                        <div className="sign-now">
                            <p>Already have an <span>Account</span>?</p>
                            <a href="" onClick={redirectToLogin}>Sign In Now.</a>
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