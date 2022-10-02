import React from 'react';
import Banner from '../components/banner/Banner';
import Catering from '../components/catering/Catering';
import Footer from '../components/footer/Footer';
import Logo_Nav from '../components/logo_nav/Logo_Nav';
import Navbar from '../components/navbar/Navbar';

const Homepage = () => {

    return (
        <div className ='homepage_container'>
            <Logo_Nav />
            <Banner />
            <Catering />
            <Footer />
        </div>
    )
}

export default Homepage;