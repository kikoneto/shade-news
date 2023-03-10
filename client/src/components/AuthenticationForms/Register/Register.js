import './Register.css';

import { useContext } from 'react';

import { AuthIntContext } from '../../../contexts/userInteractionContext';
import { AuthContext } from '../../../contexts/authContext';

export const Register = () => {

    const { changeAuth, currAuth } = useContext(AuthIntContext)
    const { onRegister } = useContext(AuthContext)

    const removeRegister = () => {
        changeAuth('');
    }

    const redirectToLogin = (e) => {
        e.preventDefault();
        changeAuth('login');
    }

    const registerHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let username = form.get('username');
        let email = form.get('email');
        let password = form.get('password');
        let rePassword = form.get('re-password');
        let gender = form.get('gender');
        let avatarUrl = form.get('gender');


        let user = {
            username,
            email,
            password,
            rePassword,
            gender,
            avatarUrl
        }

        if (email && password && rePassword && username) {
            onRegister(user);
            changeAuth('');

        } else {
            alert('Empty Fields!')
        }
    }

    return (
        <section className={currAuth === 'register' ? 'register-section dark' : 'register-section'}>
            <div className="register">
                <div className={currAuth === 'register' ? 'register-panel active' : 'register-panel'}>
                    <i className="fa-solid fa-arrow-left" onClick={removeRegister}></i>
                    <h1>Create an account</h1>
                    <form className="register-form" onSubmit={registerHandler}>
                        <input type="text" name='username' placeholder="Username" />
                        <input type="text" name='email' placeholder="Email Adress" />
                        <input type="password" name='password' placeholder="Password" />
                        <input type="password" name='re-password' placeholder="Re-Password" />
                        <select name="gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <input type="submit" value="Sign Up" />
                    </form>
                    <div className="register-additional">
                        <div className="sign-now">
                            <p>Already have an <span>Account</span>?</p>
                            <a onClick={redirectToLogin}>Sign In Now.</a>
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