import './Header.css';

export const Header = () => {

    return (
        <header>
            <div className="header">
                <h1>Shade<span>News</span></h1>

                <ul className="menu main-nav">
                    <li className="home">Home</li>
                    <li className="create">Create</li>
                </ul>
                <ul className="nav guest-nav main-nav">
                    <li className="sign-in">Sign In</li>
                    <li className="sign-up">Sign Up</li>
                </ul>
                <ul className="nav home-nav main-nav">
                    <li className="my-profile">My Profile</li>
                    <li className="logout">Logout</li>
                </ul>

                <div className="color-switcher">
                    {/* <div className="pink color" onclick="setActiveStyle(event,'color-1')"></div> */}
                    {/* <div className="green color" onclick="setActiveStyle(event,'color-2')"></div> */}
                    {/* <div className="orange color" onclick="setActiveStyle(event,'color-3')"></div> */}
                    {/* <div className="red color" onclick="setActiveStyle(event,'color-4')"></div> */}
                </div>

                <div className="burger-nav">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            <div className="responsive-menu">
                <ul className="menu">
                    <li className="home">Home</li>
                    <li className="create">Create</li>
                </ul>
                <ul className="nav guest-nav">
                    <li className="sign-in">Sign In</li>
                    <li className="sign-up">Sign Up</li>
                </ul>
                <ul className="nav home-nav">
                    <li className="my-profile">My Profile</li>
                    <li className="logout">Logout</li>
                </ul>
            </div>
        </header>
    );
}