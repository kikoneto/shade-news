import './Login.css';
import '../Authentication.css';

export const Login = () => {
    return (
        <section className="login-section ">
            <div className="login">
                <div className="login-panel ">
                    <i className="fa-solid fa-arrow-left"></i>
                    <h1>Sign In</h1>
                    <form className="login-form">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <input type="submit" value="Sign in" />
                    </form>
                    <div className="login-additional">
                        <div className="options-container">

                            <div className="remember-container">
                                <div className="remember"></div>
                                <p>Remember me</p>
                            </div>

                            <div className="sign-later">
                                <p>New to Shade<span>News</span>?</p>
                                <a href="#register">Sign Up Now.</a>
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