import React from 'react';
import Footer from '../Footer/Footer';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import Clients from './Clients/Clients';
import GrowTraffic from './GrowTraffic.jsx/GrowTraffic';
import Pricing from './Pricing/Pricing';
import Service from './Service/Service';
import Solution from './Solution.jsx/Solution';
import Testimonial from './Testimonial/Testimonial';
import Workflow from './Workflow/Workflow';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <GrowTraffic />
            <Solution />
            <Service />
            <Workflow />
            <Clients />
            <Pricing />
            <Testimonial />
            <Blog />
            <Footer />
        </div>
    );
};

export default Homepage;