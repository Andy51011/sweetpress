import React from 'react';
import Footer from '../components/footer/Footer';
import Sophia from '../images/sophia.jpeg';
import './Pages.css'

const About = () => {

    return (
        <div>
            <div className='about_container'>
            <h2>Our Team</h2>
            <hr height= '100px' />
            <div className='RD'>
                <h2>R&D</h2>
                <h5>Sophia Feng</h5>
                <p>lacking R&D specialist</p>
                <img src={Sophia} width='300px' height='300px' />
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;