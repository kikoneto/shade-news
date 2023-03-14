import './Logout.css';

import { useAuthInt } from '../../../contexts/userInteractionContext';
import { useAuth } from '../../../contexts/authContext';

export const Logout = () => {

    const { onLogout } = useAuth();
    const { logout, changeToLogout, changeToNone } = useAuthInt();

    const removeLogout = () => {
        changeToNone();
        onLogout();
    }

    return (
        <div className={logout ? 'logout-section dark' : 'logout-section'}>
            <div className={logout ? 'logout-panel active' : 'logout-panel'}>
                <h2>Sign Out</h2>
                <h3>Are you sure you want to sign out?</h3>
                <div className="button-container">
                    <button id="approve" onClick={removeLogout}>Yes</button>
                    <button id="decline" onClick={changeToNone}>No</button>
                </div>
            </div>
        </div>
    );
}