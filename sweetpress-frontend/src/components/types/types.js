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
            <p className='type__title'>house sugarcane</p>
            <p className='type__sub'>Sourced from Vietnam</p>
            <img src={Viet} className='round__image' />
            <p className='type__info'>
                our house sugarcane sourced from Vietnam,
                refreshingly sweeter with a mild
                sugarcane taste compared to our other varieties. this is our go to sugarcane on our menu 
                and what works best with other flavor combos. We only use certified NonGmo sugarcane and 
                sometimes we have organic available.
            </p>
        </div>
        </div>
        <div className='sub__container'>
        <div className='info__container'>
            <p className='type__title'>purple sugarcane</p>
            <p className='type__sub'>Sourced from somewhere</p>
            <img src={Purple} className='round__image' />
            <p className='type__info'>
                we juice the purple sugarcane with some of the skin on 
                to provide that distinct color and a medium sugarcane taste. 
                We don't do any flavors for this variety. We only use NonGMO for this variety.
                <p className='label'>preorder only</p>
            </p>
            </div>
        </div>
        <div className='sub__container'>
        <div className='info__container'>
            <p className='type__title'>florida green sugarcane</p>
            <p className='type__sub'>Sourced from Florida</p>
            <img src={Florida} className='round__image' />
            <p className='type__info'>
                we juice our florida sugarcane with the skin on and
                it provides a potent sugarcane taste that some will enjoy and others do not.
                we don't do any flavors for this variety. We only use NonGmo for this variety.
                <p className='label'>preorder only</p>

            </p>
        </div>
        </div>
        
        </div>
    )
}

export default Types;