"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function OurStory() {
    return (
        <section className="w-full bg-black py-20 px-6 flex justify-center">

            <div className="max-w-7xl w-full relative">

                {/*Image (slides from right)*/}
                <motion.div 
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[450px] rounded-2xl overflow-hidden"
                >
                    <Image 
                        src="/team/wideImage.jpg"
                        alt="team"
                        fill
                        className="object-cover"
                    />

                    {/*Overlay*/}
                    <div className="absolute inset-0 bg-black/50"></div>
                </motion.div>

                {/*Text Panel (with swiper)*/}
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="
                        absolute top-[30%] left-0 md:left-10
                        -translate-y-1/2
                        bg-white/90 backdrop-blur-md text-black 
                        p-10 md:p-14
                        rounded-2xl shadow-2xl
                        w-[95%] md:w-[700px] lg:w-[850px]
                        min-h-[380px]
                        flex flex-col justify-center
                    "
                >
                    <Swiper spaceBetween={20} slidesPerView={1}
                            modules={[ Autoplay ]}
                            autoplay={{ delay: 3000 }}
                            loop={true}
                    >
                        {/*Leader1*/}
                        <SwiperSlide>
                            <div className="flex items-center gap-4 mb-4">
                                <img src="/team/leader1.jpg" className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36  rounded-full object-cover border-4 border-white shadow-xl" />
                            <h3 className="text-2xl font-bold mb-2">
                                CEO - John Doe 
                            </h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                With over a decade in renewable energy, John has led the company 
                                toward innovation and sustainability.
                            </p>
                            <p className="text-lg italic text-gray-700 border-1-4 border-black pl-4">
                                "Our mission is to power the future responsibly."
                            </p>
                        </SwiperSlide>

                        {/*Leader2*/}
                        <SwiperSlide>
                            <div className="flex items-center gap-4 mb-4">
                                <img src="/team/leader2.jpg" className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg-h-36 rounded-full object-cover border-4 border-white shadow-xl" />
                            <h3 className="text-2xl font-bold mb-2">
                                CTO - Sarah Khan 
                            </h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Sarah specializes in smart energy systems and leads product innovation.
                            </p>
                            <p className="text-lg italic text-gray-700 border-1-4 border-black pl-4">
                                "Technology should serve both people and planet."
                            </p>
                        </SwiperSlide>

                        {/*Leader3*/}
                        <SwiperSlide>
                            <div className="flex items-center gap-4 mb-4">
                                <img src="/team/leader3.jpg" className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover border-4 border-white shadow-xl" />
                            <h3 className="text-2xl font-bold mb-2">
                                COO - Ahmed Rahman 
                            </h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Ahmed ensures operational excellence and seamless project delivery.
                            </p>
                            <p className="text-lg italic text-gray-700 border-1-4 border-black pl-4">
                                "Execution is where vision becomes reality."
                            </p>
                        </SwiperSlide>

                    </Swiper>

                </motion.div>

            </div>
        </section>
    );
}