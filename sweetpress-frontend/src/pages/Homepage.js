import React from 'react';
import Banner from '../components/banner/Banner';
import Catering from '../components/catering/Catering';
import Footer from '../components/footer/Footer';
import MidBanner from '../components/midBanner/MidBanner';
import Visit_Us from '../components/visit_us/Visit_Us';
import WhiteSpace from '../components/whitespace/Whitespace';

const Homepage = () => {

    return (
        <div className ='homepage_container'>
            <Banner />
            <Catering />
            <Visit_Us />
            <MidBanner />
            <Footer />
        </div>
    )
}

export default Homepage;