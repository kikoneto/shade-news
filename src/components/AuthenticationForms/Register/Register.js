import './Register.css';
import '../Authentication.css';

export const Register = () => {
    return (
        <section className="register-section ">
            <div className="register">
                <div className="register-panel ">
                    <i className="fa-solid fa-arrow-left"></i>
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
                            <a href="#login">Sign In Now.</a>
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