import React from 'react';
import DrinkImage from '../../images/kim_drinks.jpeg';
import Coconut from '../../images/coconut.jpeg';
import './MidBanner.css';

const MidBanner = () => {
    return (
        <div className = 'mid_container'>
            <div className='mid_info'>
                <h3>we are a sugarcane juice company that is based in oakland, ca</h3>
                <p>Gotta change the image => </p>
            </div>
                <img src={Coconut} width='750px' height='400'/>    
        </div>
    )
}

export default MidBanner;