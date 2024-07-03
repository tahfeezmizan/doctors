import React from 'react';
import AppointmentBanner from "../../assets/Rectangle 32.png";
import { IoArrowUpSharp } from 'react-icons/io5';
import logo from "../../assets/logo light.png";

const Appointment = () => {
    return (
        <div className="container w-full my-20">
            <div className="h-[500px] rounded-3xl flex items-center relative" style={{
                backgroundImage: `linear-gradient(90.00deg, #020043, #0200434D 100%), url(${AppointmentBanner})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className='absolute top-10 right-10'>
                    <img src={logo} alt="Logo" className="w-28 h-auto" />
                </div>
                <div className='flex items-center justify-between gap-20 px-20'>
                    <div className="">
                        <h1 className='text-white text-4xl font-semibold mb-6' style={{ lineHeight: '55px' }}>Get Your <br />
                            First Appointment <br />
                            at 50% Off!</h1>
                        <div className="flex gap-3 items-center">
                            <button className="text-base font-semibold bg-yellow-400 border border-yellow-400 px-7 py-2 rounded-xl flex items-center gap-2 hover:bg-yellow-400 hover:border-yellow-400 mb-5">
                                Appointment <span className="rotate-45"><IoArrowUpSharp /></span>
                            </button>
                            <button className="text-base font-semibold text-white border border-white px-7 py-2 rounded-xl flex items-center gap-2 hover:bg-yellow-400 hover:border-yellow-400 mb-5">
                                Learn More <span className="rotate-45"><IoArrowUpSharp /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
    