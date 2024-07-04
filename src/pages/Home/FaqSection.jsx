import React, { useState } from 'react';

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='container py-20'>
            <div className="pb-8">
                <button className="text-base font-semibold border border-PrimaryColor px-7 py-2 rounded-xl flex items-center gap-2 hover:bg-yellow-400 hover:border-yellow-400 mb-5">
                    FAQ
                </button>
                <h2 className="text-4xl font-semibold mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="relative mb-3">
                <h6 className="mb-0">
                    <button
                        className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer bg-yellow-50 border-slate-100 text-slate-700 rounded-t-1 group"
                        onClick={() => toggleAccordion(1)}
                    >
                        <span> What are your office hours?</span>
                        <i className={`absolute right-0 pt-1 text-xs fa ${activeIndex === 1 ? 'fa-minus' : 'fa-plus'}`}></i>
                    </button>
                </h6>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 1 ? 'max-h-screen' : 'max-h-0'}`}
                >
                    <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                    Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                    </div>
                </div>
            </div>

            <div className="relative mb-3">
                <h6 className="mb-0">
                    <button
                        className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group"
                        onClick={() => toggleAccordion(2)}
                    >
                        <span>How can I schedule an appointment?</span>
                        <i className={`absolute right-0 pt-1 text-xs fa ${activeIndex === 2 ? 'fa-minus' : 'fa-plus'}`}></i>
                    </button>
                </h6>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 2 ? 'max-h-screen' : 'max-h-0'}`}
                >
                    <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                        Material Tailwind is a free and open-source framework based on Tailwind CSS.
                        It allows you to create beautiful and responsive user interfaces with ease.
                    </div>
                </div>
            </div>
            <div className="relative mb-3">
                <h6 className="mb-0">
                    <button
                        className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group"
                        onClick={() => toggleAccordion(3)}
                    >
                        <span>Do you accept insurance?</span>
                        <i className={`absolute right-0 pt-1 text-xs fa ${activeIndex === 3 ? 'fa-minus' : 'fa-plus'}`}></i>
                    </button>
                </h6>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 3 ? 'max-h-screen' : 'max-h-0'}`}
                >
                    <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                        Material Tailwind is a free and open-source framework based on Tailwind CSS.
                        It allows you to create beautiful and responsive user interfaces with ease.
                    </div>
                </div>
            </div>
            <div className="relative mb-3">
                <h6 className="mb-0">
                    <button
                        className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group"
                        onClick={() => toggleAccordion(4)}
                    >
                        <span>What should I bring to my appointment?</span>
                        <i className={`absolute right-0 pt-1 text-xs fa ${activeIndex === 4 ? 'fa-minus' : 'fa-plus'}`}></i>
                    </button>
                </h6>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 4 ? 'max-h-screen' : 'max-h-0'}`}
                >
                    <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                        Material Tailwind is a free and open-source framework based on Tailwind CSS.
                        It allows you to create beautiful and responsive user interfaces with ease.
                    </div>
                </div>
            </div>
            <div className="relative mb-3">
                <h6 className="mb-0">
                    <button
                        className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group"
                        onClick={() => toggleAccordion(5)}
                    >
                        <span>Do you offer telemedicine appointments?</span>
                        <i className={`absolute right-0 pt-1 text-xs fa ${activeIndex === 5 ? 'fa-minus' : 'fa-plus'}`}></i>
                    </button>
                </h6>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 5 ? 'max-h-screen' : 'max-h-0'}`}
                >
                    <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                        Material Tailwind is a free and open-source framework based on Tailwind CSS.
                        It allows you to create beautiful and responsive user interfaces with ease.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
