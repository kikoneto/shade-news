import './Logout.css';

import { useContext } from 'react';
import { AuthIntContext } from '../../../contexts/userInteractionContext';
import { AuthContext } from '../../../contexts/authContext';

export const Logout = () => {

    const { onLogout } = useContext(AuthContext);
    const { changeAuth, currAuth } = useContext(AuthIntContext)

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