import React from 'react';
import image from '../../assets/Rectangle 24.png'
import { IoArrowUpSharp } from 'react-icons/io5';

const GetSoultions = () => {
    return (
        <div className='container py-20 px-0 font-Inter'>
            <div className="grid grid-cols-6 gap-7">
                <div className="col-span-3">
                    <button className="text-base font-semibold border border-PrimaryColor px-7 py-2 rounded-xl flex items-center gap-2 hover:bg-yellow-400 hover:border-yellow-400 mb-5">
                        Who we are
                    </button>

                    <h2 className="text-4xl font-semibold mb-4">We Help To Get <br />Soultions</h2>
                    <p className="text-base font-normal mb-11">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                    </p>

                    <button className="text-base font-semibold border bg-yellow-400 border-yellow-400 px-7 py-3 rounded-xl flex items-center gap-2 hover:bg-yellow-500 hover:border-yellow-500">
                        Learn more<span className="rotate-45"><IoArrowUpSharp /></span>
                    </button>
                </div>
                <div className="col-span-3 relative">
                    <div className="w-96 bg-[#343268] px-6 py-9 text-white rounded-3xl absolute -bottom-10 left-0">
                        <h3 className="text-2xl font-medium mb-3">Our mission is simple</h3>
                        <p className="text-base font-normal text-">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                    <img src={image} className="w-[500px] ml-auto" alt="" />
                </div>

            </div>
        </div>
    );
};

export default GetSoultions;