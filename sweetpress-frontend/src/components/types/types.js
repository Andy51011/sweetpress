import React from 'react';
import './types.css';
import Purple from '../../images/purple_sugarcane.jpg';
import Viet from '../../images/vietnam_sugarcane.jpg';
import Florida from '../../images/florida_sugarcane.jpg';

const Types = () => {

    return (
        <div className='type__container'>
        <div className='sub__container'>
        <div className='info__container'>
            <p className='type__title'>House sugarcane</p>
            <p className='type__sub'>Sourced from Vietnam</p>
            <img src={Viet} className='round__image' />
            <p className='type__info'>
                Our house sugarcane sourced from Vietnam,
                refreshingly sweet without much of the strong
                sugarcane taste.
            </p>
        </div>
        </div>
        <div className='sub__container'>
        <div className='info__container'>
            <p className='type__title'>Purple sugarcane</p>
            <p className='type__sub'>Sourced from somewhere</p>
            <img src={Purple} className='round__image' />
            <p className='type__info'>
                Our house sugarcane sourced from Vietnam,
                refreshingly sweet without much of the strong
                sugarcane taste.
            </p>
            </div>
        </div>
        <div className='sub__container'>
        <div className='info__container'>
            <p className='type__title'>Florida Green sugarcane</p>
            <p className='type__sub'>Sourced from Florida</p>
            <img src={Florida} className='round__image' />
            <p className='type__info'>
                Our house sugarcane sourced from Vietnam,
                refreshingly sweet without much of the strong
                sugarcane taste.
            </p>
        </div>
        </div>
        
        </div>
    )
}

export default Types;