import React from 'react';
import Banner from '../Banner/Banner';
import ComprehensiveCare from './ComprehensiveCare';
import GetSoultions from './GetSoultions';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <div className="slider relative">
                <Banner />
                <ComprehensiveCare />
            </div>
            <GetSoultions />
            <Services />
            <Testimonial />
        </div>
    );
};

export default Home;
