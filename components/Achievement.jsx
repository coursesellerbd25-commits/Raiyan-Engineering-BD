"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Achievement() {
    return (
        <section className="w-full bg-black py-20 px-6 flex flex-col items-center overflow-hidden">

            {/*Title*/}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
                Achievement Corner 
            </h2>

            <div className="w-full max-w-6xl flex flex-col gap-16">

                {/*Awards(slide from left)*/}
                <motion.div 
                    initial={{ x: -150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-10"
                >
                    <Image 
                        src="/awards/award1.jpg"
                        alt="Award 1"
                        width={220}
                        height={160}
                        className="rounded-xl object-cover"
                    />
                    <Image 
                        src="/awards/award2.jpg"
                        alt="Award 2"
                        width={220}
                        height={160}
                        className="rounded-xl object-cover"
                    />
                    <Image 
                        src="/awards/award3.jpg"
                        alt="Award 3"
                        width={220}
                        height={160}
                        className="rounded-xl object-cover"
                    />
                </motion.div>

                {/*Certificates(slide from right)*/}
                <motion.div 
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-10"
                >
                    <Image 
                        src="/certs/cert1.jpg"
                        alt="Certificate 1"
                        width={240}
                        height={170}
                        className="rounded-xl object-cover"
                    />
                    <Image 
                        src="/certs/cert2.jpg"
                        alt="Certificate 2"
                        width={240}
                        height={170}
                        className="rounded-xl object-cover"
                    />
                    <Image 
                        src="/certs/cert3.jpg"
                        alt="Certificate 3"
                        width={240}
                        height={170}
                        className="rounded-xl object-cover"
                    />
                </motion.div>

            </div>
        </section>
    );
} 