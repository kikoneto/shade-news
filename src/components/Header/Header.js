import './Header.css';
import { Link } from 'react-router-dom';

import { useContext, useState, useEffect } from 'react';
import { AuthIntContext } from '../../contexts/userInteractionContext';

export const Header = ({ setSkinColor }) => {

    const { currAuth, changeAuth } = useContext(AuthIntContext);

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

    const userNav = (
        <ul className="nav home-nav main-nav">
            <li className="my-profile"><Link to='/my-profile'>My Profile</Link></li>
            <li className="logout" onClick={() => changeAuth('logout')} >Logout</li>
        </ul>
    )

    return (
        <header>
            <div className="header">
                <h1>Shade<span>News</span></h1>

                <ul className="menu main-nav">
                    <li className="home"><Link to='/'>Home</Link></li>
                    <li className="create"><Link to='/create'>Create</Link></li>
                </ul>

                {guestNav}

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
                <ul className="nav guest-nav">
                    <li className="sign-in" onClick={() => changeAuth('login')}>Sign In</li>
                    <li className="sign-up" onClick={() => changeAuth('register')}>Sign Up</li>
                </ul>
                <ul className="nav home-nav">
                    <li className="my-profile"><Link to='/my-profile'>My Profile</Link></li>
                    <li className="logout" onClick={() => changeAuth('logout')}>Logout</li>
                </ul>
            </div>
        </header >
    );
}