import './Header.css';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';

import { useAuthInt } from '../../contexts/userInteractionContext';
import { useAuth } from '../../contexts/authContext';


export const Header = ({ setSkinColor }) => {

    const { user } = useAuth();
    const { currAuth, changeAuth } = useAuthInt();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        changeAuth('');
    };

    const guestNav = (
        <ul className="nav guest-nav main-nav">
            <li className="sign-in" onClick={() => changeAuth('login')} >Sign In</li>
            <li className="sign-up" onClick={() => changeAuth('register')} >Sign Up</li>
        </ul>
    )

    const resGuestNav = (
        <ul className="nav guest-nav">
            <li className="sign-in" onClick={() => changeAuth('login')} >Sign In</li>
            <li className="sign-up" onClick={() => changeAuth('register')} >Sign Up</li>
        </ul>
    )

    const userNav = (
        <ul className="nav home-nav main-nav">
            <li className="my-profile"><Link to='/my-profile'>My Profile</Link></li>
            <li className="logout" onClick={() => changeAuth('logout')} >Logout</li>
        </ul>
    )

    const resUserNav = (
        <ul className="nav home-nav">
            <li className="my-profile"><Link to='/my-profile'>My Profile</Link></li>
            <li className="logout" onClick={() => changeAuth('logout')} >Logout</li>
        </ul>
    );

    return (
        <header>
            <div className="header">
                <h1>Shade<span>News</span></h1>

                <ul className="menu main-nav">
                    <li className="home"><Link to='/'>Home</Link></li>
                    <li className="create"><Link to='/create'>Create</Link></li>
                </ul>

                {
                    user ?
                        userNav
                        : guestNav
                }

                <div className="color-switcher">
                    <div className="pink color" onClick={() => setSkinColor('#ca2e55')}></div>
                    <div className="green color" onClick={() => setSkinColor('#28afb0')}></div>
                    <div className="orange color" onClick={() => setSkinColor('#ff8c42')}></div>
                    <div className="red color" onClick={() => setSkinColor('#ff0000')}></div>
                </div>

                <div className="burger-nav" onClick={() => changeAuth('res-menu')}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            <div className={currAuth !== 'res-menu' ? 'responsive-menu' : 'responsive-menu open'}>
                <ul className="menu">
                    <li className="home"><Link to='/'>Home</Link></li>
                    <li className="create"><Link to='/create'>Create</Link></li>
                </ul>
                {
                    user ?
                        resUserNav
                        : resGuestNav
                }
            </div>
        </header >
    );
}