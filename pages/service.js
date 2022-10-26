import React from 'react';
import Footer from '../components/Footer/Footer';
import AllService from '../components/Services/AllService';
import Banner from '../components/Services/Banner';

const services = () => {
    return (
        <div>
            <Banner />
            <AllService />
            <Footer />
        </div>
    );
};

export default services;