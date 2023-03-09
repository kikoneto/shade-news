import './Logout.css';

import { useContext } from 'react';
import { AuthIntContext } from '../../../contexts/userInteractionContext';

export const Logout = () => {

    const { changeAuth, currAuth } = useContext(AuthIntContext)

    const removeLogout = () => {
        changeAuth('');
    }

    return (
        <div className={currAuth == 'logout' ? 'logout-section dark' : 'logout-section'}>
            <div className={currAuth == 'logout' ? 'logout-panel active' : 'logout-panel'}>
                <h2>Sign Out</h2>
                <h3>Are you sure you want to sign out?</h3>
                <div className="button-container">
                    <button id="approve" onClick={removeLogout}>Yes</button>
                    <button id="decline" onClick={removeLogout}>No</button>
                </div>
            </div>
        </div>
    );
}