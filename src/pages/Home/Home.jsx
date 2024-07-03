import React from 'react';
import Banner from '../Banner/Banner';
import ComprehensiveCare from './ComprehensiveCare';
import GetSoultions from './GetSoultions';

const Home = () => {
    return (
        <div>
            <div className="slider relative">
                <Banner />
                <ComprehensiveCare />
            </div>
            <GetSoultions />
        </div>
    );
};

export default Home;
