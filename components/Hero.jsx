"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
    return (
        <div className="w-full h-[50vh] md:h-[60vh">

            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="h-full"
            >

                {/*Slide 1*/}
                <SwiperSlide>
                    <div
                        className="h-full w-full bg-cover bg-center relative"
                        style={{ backgroundImage: "url('swiper/slide1.jpg')" }}
                    >
                        {/* Dark overlay*/}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/*Text*/}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                            <h1 className="text-3xl md:text-5xl font-bold">
                                Engineering Excellence
                            </h1>
                            <p className="mt-4 max-w-xl">
                                Building reliable solutions for modern industries.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/*Slide 2*/}
                <SwiperSlide>
                    <div 
                        className="h-full w-full bg-cover bg-center relative"
                        style={{ backgroundImage: "url('swiper/slide2.jpg')" }}
                    >
                        <div className="absolute inset-0 bg-black/50"></div>

                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                            <h1 className="text-3xl md:text-5xl font-bold">
                                Innovative & Trusted
                            </h1>
                            <p className="mt-4 max-w-xl">
                                Delivering quality services with precision and care.
                            </p>
                            {/*Read More Button*/}
                            <a   
                                href="/about"
                                className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-full text-white font-medium hover:bg-blue-700 transition"
                            >
                                Read More
                            </a>
                            
                        </div>
                    </div>
                    </SwiperSlide>

            </Swiper>
        </div> 
    );
}