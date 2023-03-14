import './Register.css';

import { useAuthInt } from '../../../contexts/userInteractionContext';
import { useAuth } from '../../../contexts/authContext';

export const Register = () => {

    const { register, changeToLogin, changeToNone } = useAuthInt();
    const { onRegister } = useAuth();

    const removeRegister = () => {
        changeToNone();
    }

    const redirectToLogin = (e) => {
        e.preventDefault();
        changeToLogin();
    }

    const registerHandler = (e) => {
        e.preventDefault();

        let form = new FormData(e.currentTarget);

        let username = form.get('username');
        let email = form.get('email');
        let password = form.get('password');
        let rePassword = form.get('re-password');
        let gender = form.get('gender');
        let avatarUrl = 'https://robohash.org/sapientenihilquaerat.png?size=50x50&set=set1';


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
            changeToNone();

        } else {
            alert('Empty Fields!')
        }
    }

    return (
        <section className={register ? 'register-section dark' : 'register-section'}>
            <div className="register">
                <div className={register ? 'register-panel active' : 'register-panel'}>
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