import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <div className='footer__container'>
            <div className='footer__left'>
                <p>Designed and Developed by David Yuen</p>
                <p>© 2022 David Yuen</p>
            </div>
            <div className='footer__center'>
                <p>Footer Center</p>
            </div>
            <div className='footer__right'>
                <p>Footer Right</p>
            </div>
        </div>
    )
}

export default Footer;