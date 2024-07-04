import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);

    return (
        <div className='container font-Inter py-20'>
            <div className="pb-8">
                <button className="text-base font-semibold border border-PrimaryColor px-7 py-2 rounded-xl flex items-center gap-2 hover:bg-yellow-400 hover:border-yellow-400 mb-5">
                    Testimonial
                </button>
                <h2 className="text-4xl font-semibold mb-4">What they say about us</h2>
            </div>

            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: { // small screens
                        slidesPerView: 1,
                    },
                    768: { // medium screens
                        slidesPerView: 2,
                    },
                    1024: { // large screens
                        slidesPerView: 3,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    review.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-72 p-10 overflow-hidden bg-yellow-50 bg-opacity-50 rounded-sm font-Roboto">
                                <div>
                                    <h2 className="font-semibold pb-4">{review?.title}</h2>
                                    <p className="text-sm font-normal pb-4">{review?.description}</p>
                                </div>
                                <div className="flex items-start gap-4 mb-4">
                                    <img className="w-12 h-12 border rounded-full" src={review?.image} alt="" />
                                    <div>
                                        <h2 className="font-semibold text-sm pb-1">{review?.name}</h2>
                                        <div>
                                            <Rating
                                                className='text-yellow-400'
                                                style={{ maxWidth: 100 }}
                                                value={review?.rating}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;
