import React from 'react';
import Cater from '../../images/catering.png';
import './Catering.css';

const Catering = () => {
    return (
        <div className = 'catering_container'>
            <img src={Cater} width='500' height='400'/>
            <div className='catering_info'>
                <h3>CATERING</h3>
                <p>Contact us for catering options</p>
                <button className='contact_button'>Contact</button>
            </div>    
        </div>
    )
}

export default Catering;