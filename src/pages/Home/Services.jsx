import React from 'react';
import { IoArrowUpSharp } from 'react-icons/io5';
import technozly from '../../assets/Rectangle 27-2.png'

const Services = () => {
    return (
        <div className='container py-20 px-0 font-Inter'>
            <div className="grid grid-cols-6 gap-7">
                <div className="col-span-3">
                    <button className="text-base font-semibold border border-PrimaryColor px-7 py-2 rounded-xl flex items-center gap-2 hover:bg-yellow-400 hover:border-yellow-400 mb-5">
                        Services
                    </button>

                    <h2 className="text-4xl font-semibold mb-4">Empowering Health, <br /> Enriching Lives</h2>
                    <p className="text-base font-normal pr-20 mb-11">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>

                    <button className="text-base font-semibold border bg-yellow-400 border-yellow-400 px-7 py-3 rounded-xl flex items-center gap-2 hover:bg-yellow-500 hover:border-yellow-500">
                        Learn more <span className="rotate-45"><IoArrowUpSharp /></span>
                    </button>
                </div>
                <div className="col-span-3 relative">
                    <div className="w-96 bg-[#343268b7] px-6 py-9 text-white rounded-3xl absolute bottom-5 left-5">
                        <h3 className="text-2xl font-medium mb-3">Advanced Technology</h3>
                        <div className="flex items-end">
                            <p className="text-sm font-normal pr-7 text-gray-300">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <p className="w-12 h-12 text-3xl rotate-45 ml-auto bg-yellow-400 p-2 rounded-full"><IoArrowUpSharp /></p>
                        </div>

                    </div>
                    <img src={technozly} className="w-full rounded-3xl" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Services;