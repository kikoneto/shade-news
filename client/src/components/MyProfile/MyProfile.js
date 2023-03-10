import './MyProfile.css';
import { useState } from 'react';

import { useAuth } from '../../contexts/authContext';
import { isAuth } from '../../hoc/isAuth';


const MyProfile = () => {

    const { user } = useAuth();

    console.log(user)

    const [emailChange, setEmailChange] = useState(false);
    const [usernameChange, setUsernameChange] = useState(false);
    const [genderChange, setGenderChange] = useState(false);


    return (
        <section className="my-profile-section">
            <div className="profile-container">
                <h1>My Profile</h1>

                <div className="profile-content">

                    <div className="avatar">
                        <img src={user.avatarUrl} />
                    </div>

                    <div className="profile-box profile-email">
                        <h4>Email</h4>
                        <p>{user.email}</p>
                    </div>

                    <div className="profile-box profile-username">
                        <h4>Username</h4>
                        <p>{user.username}</p>
                    </div>

                    <div className="profile-box profile-gender">
                        <h4>Gender</h4>
                        <p>{user.gender}</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export const ProtectedRoute = isAuth(MyProfile);