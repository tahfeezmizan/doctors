import React from 'react';
import Banner from '../Banner/Banner';
import Appointment from './Appointment';
import ComprehensiveCare from './ComprehensiveCare';
import FaqSection from './FaqSection';
import Footes from './Footes';
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
            <FaqSection />
            <Appointment />
            <Footes />
        </div>
    );
};

export default Home;
