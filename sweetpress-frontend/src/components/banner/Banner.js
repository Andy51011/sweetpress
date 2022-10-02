import React from 'react';
import './Banner.css';

const Banner = () => {
    
    return (
        <div className ='banner_container'>
        <div className ='center_container'>
            <div className = 'chinese_letters'>
                <p>甘</p>
                <p>蔗</p>
                <p>汁</p>
            </div>
            <div className = 'banner_content'>
                <p className = 'subtitle'>sugarcane juice</p>
                <p className='info'> natural · cold pressed · healthy</p>
                <p className='based'> oakland, ca</p>
            </div>
            </div>
        </div>
    )
}

export default Banner;