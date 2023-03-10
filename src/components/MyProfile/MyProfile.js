import { useState } from 'react';
import './MyProfile.css';

export const MyProfile = () => {

    const [emailChange, setEmailChange] = useState(false);
    const [usernameChange, setUsernameChange] = useState(false);
    const [genderChange, setGenderChange] = useState(false);


    return (
        <section className="my-profile-section">
            <div className="profile-container">
                <h1>My Profile</h1>
                <div className="profile-content">
                    <div className="avatar">
                        <img src="images/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg" />
                        <p className='avatar-change'>Change</p>
                    </div>
                    <div className="profile-box profile-email">
                        <h4>Email</h4>
                        <p>kikoner81@gmail.com</p>
                        <button className="profile-change email-change" onClick={() => setEmailChange(true)}>Change</button>

                        {
                            emailChange ?
                                <div className="profile-changing email">
                                    <input type="text" />
                                    <i className="fa-solid fa-check change-approve" onClick={() => setEmailChange(false)}></i>
                                    <i className="fa-solid fa-x" onClick={() => setEmailChange(false)}></i>
                                </div>

                                : null
                        }


                    </div>
                    <div className="profile-box profile-username">
                        <h4>Username</h4>
                        <p>Kikoneto</p>
                        <button className="profile-change username-change" onClick={() => setUsernameChange(true)}>Change</button>
                        {
                            usernameChange ?
                                <div className="profile-changing username">
                                    <input type="text" />
                                    <i className="fa-solid fa-check change-approve" onClick={() => setUsernameChange(false)}></i>
                                    <i className="fa-solid fa-x" onClick={() => setUsernameChange(false)}></i>
                                </div>
                                : null
                        }
                    </div>
                    <div className="profile-box profile-gender">
                        <h4>Gender</h4>
                        <p>Male</p>
                        <button className="profile-change username-change" onClick={() => setGenderChange(true)}>Change</button>

                        {
                            genderChange ?
                                <div className="profile-changing gender">
                                    <select name="gender-change">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Female">Other</option>
                                    </select>
                                    <i className="fa-solid fa-check change-approve" onClick={() => setGenderChange(false)}></i>
                                    <i className="fa-solid fa-x" onClick={() => setGenderChange(false)}></i>
                                </div>
                                : null
                        }
                    </div>
                    <button className="my-profile-save">Save</button>
                </div>
            </div>
        </section>
    );
}