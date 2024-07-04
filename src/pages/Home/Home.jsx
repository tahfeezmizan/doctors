import React from 'react';
import Banner from '../Banner/Banner';
import ComprehensiveCare from './ComprehensiveCare';
import GetSoultions from './GetSoultions';
import Services from './Services';
import Testimonial from './Testimonial';
import FaqSection from './FaqSection';
import Appointment from './Appointment';
import Footer from './Footer';
import Footes from './Footes';

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
            {/* <Footer /> */}
            <Footes />
        </div>
    );
};

export default Home;
