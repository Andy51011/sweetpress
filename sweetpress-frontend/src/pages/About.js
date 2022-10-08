import React from 'react';
import Footer from '../components/footer/Footer';
import Sophia from '../images/sophia.jpeg';
import Andy from '../images/andy.jpeg';
import './Pages.css'

const About = () => {

    return (
        <div>
            <div className='about_container'>
            <h2 className='menu_title'>OUR TEAM</h2>
            <div className='positioning'>
            <div className='RD'>
                <h2>R&D</h2>
                <h5>Sophia Feng</h5>
                <p>lacking R&D specialist</p>
                <img src={Sophia} width='300px' height='300px' />
            </div>
            <div className='about_info'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>
            </div>
            </div>
            <div className='positioning'>
            <div className='about_info'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>
            </div>
            <div className='RD'>
                <h2>juicer</h2>
                <h5>Andy Yuen</h5>
                <p>Lead Juicer</p>
                <img src={Andy} width='300px' height='300px' />
            </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;