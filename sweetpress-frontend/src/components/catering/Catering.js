import React from 'react';
import Cater from '../../images/catering.png';
import Lime from '../../images/lime.jpeg';
import Dragonfruit from '../../images/dragonfruit.jpeg';
import './Catering.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';


const Catering = () => {
    library.add(faEnvelope, faKey);
    return (
        <div className = 'catering_container'>
            <img src={Dragonfruit} width='750' height='400'/>
            <div className='catering_info'>
                <h3>CATERING</h3>
                <p>Contact us for catering options</p>
                <a href='mailto:sweetpress.sugarcane@gmail.com' className='mail__social'>
                    <FontAwesomeIcon icon={faEnvelope} size='5x' color='darkslategray' />
                </a>
            </div>    
        </div>
    )
}

export default Catering;