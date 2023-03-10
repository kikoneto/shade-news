import './Logout.css';

import { useAuthInt } from '../../../contexts/userInteractionContext';
import { useAuth } from '../../../contexts/authContext';

export const Logout = () => {

    const { onLogout } = useAuth();
    const { changeAuth, currAuth } = useAuthInt();

    const removeLogout = () => {
        changeAuth('');
        onLogout();
    }

    return (
        <div className={currAuth == 'logout' ? 'logout-section dark' : 'logout-section'}>
            <div className={currAuth == 'logout' ? 'logout-panel active' : 'logout-panel'}>
                <h2>Sign Out</h2>
                <h3>Are you sure you want to sign out?</h3>
                <div className="button-container">
                    <button id="approve" onClick={removeLogout}>Yes</button>
                    <button id="decline" onClick={() => changeAuth('')}>No</button>
                </div>
            </div>
        </div>
    );
}