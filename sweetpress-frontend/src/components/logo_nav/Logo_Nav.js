import React from 'react';
import Logo from '../logo/Logo';
import Navbar from '../navbar/Navbar';
import './Logo_Nav.css';

const Logo_Nav = () => {

    return(
        <div className = 'logo_nav_container'>
            <Logo />
            <Navbar />
        </div>
    )
}

export default Logo_Nav;