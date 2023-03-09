import './Logout.css';

export const Logout = () => {
    return (
        <div className="logout-section">
            <div className="logout-panel">
                <h2>Sign Out</h2>
                <h3>Are you sure you want to sign out?</h3>
                <div className="button-container">
                    <button id="approve">Yes</button>
                    <button id="decline">No</button>
                </div>
            </div>
        </div>
    );
}