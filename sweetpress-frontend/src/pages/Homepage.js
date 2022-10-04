import React from 'react';
import Banner from '../components/banner/Banner';
import Catering from '../components/catering/Catering';
import Footer from '../components/footer/Footer';
import Visit_Us from '../components/visit_us/Visit_Us';

const Homepage = () => {

    return (
        <div className ='homepage_container'>
            <Banner />
            <Catering />
            <Visit_Us />
            <Footer />
        </div>
    )
}

export default Homepage;