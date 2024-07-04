import React from 'react';
import chart from '../../assets/chart.png'
import book from '../../assets/book.png'
import qoin from '../../assets/qoin.png'
import people from '../../assets/people.png'
import meeting from '../../assets/meeting.png'

const ComprehensiveCare = () => {
    return (
        <div className='container py-10'>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                <div className="col-span-1">
                    <div className=" bg-white p-6 rounded-3xl">
                        <h3 className="text-4xl font-Inter font-semibold mb-2">90%</h3>
                        <p className="text-base font-Inter font-normal pb-6">Patient satisfaction rate, reflecting our commitment.</p>
                        <img src={chart} className="ml-auto md:ml-0" alt="" />
                    </div>
                </div>
                <div className="col-span-3 title">
                    <h2 className="text-4xl md:text-5xl font-Inter font-semibold text-center px-20 mb-5">Comprehensive Care for Every Patient</h2>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-5 items-end">
                        <div className="col-span-2">
                            <div className=" bg-yellow-50 p-6 rounded-3xl flex flex-col">
                                <h3 className="text-4xl font-Inter font-semibold mb-2">500+</h3>
                                <p className="text-base font-Inter font-normal">                               Board-certified doctors</p>
                                <img src={book} className="self-end" alt="" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className=" bg-white p-6 rounded-3xl ">
                                <h3 className="text-4xl font-Inter font-semibold mb-2">4.5 </h3>
                                <p className="text-base font-Inter font-normal mb-4">Over 20,000 Patient</p>
                                <img src={people} alt="" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="bg-yellow-50 p-6 rounded-3xl flex flex-col">
                                <h3 className="text-4xl font-Inter  font-semibold mb-2">$5000</h3>
                                <p className="text-base font-Inter font-normal">Money spend for poor patient</p>
                                <img src={qoin} className="self-end" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="bg-white p-6 rounded-3xl ">
                        <h3 className="text-4xl font-Inter font-semibold mb-2">$5000</h3>
                        <p className="text-base font-Inter font-normal pb-11">Money spend for poor patient</p>
                        <img src={meeting} className="ml-auto md:ml-0" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComprehensiveCare;