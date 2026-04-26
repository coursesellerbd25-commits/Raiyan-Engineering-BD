"use client";

import { motion } from "framer-motion";

export default function BannerContact() {
    return (
        <section className="relative w-full bg-[#020617] py-24 px-6 flex justify-center items-center overflow-hidden">

            {/*Background Glow*/}
            <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full top-[-120px] left-[-120px]" />
            <div className="absolute w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

            {/*Gradient Overlay*/}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-blue-500/10" />

            {/*Content*/}
            <motion.div 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.8 }}
                className="relative max-w-5xl text-center"
            >
                <h1 className="
                    text-white
                    font-bold
                    leading-tight
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg-text-6xl
                ">
                    Start Your Conversation,
                    <br className="hidden sm:block" />
                    Talk About Your Next Project
                    <br className="hidden sm:block" />
                    And{" "}
                        <a
                            href="https://wa.me/8801234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-block group text-white"
                        >
                            Get A Quote.
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                </h1>

                <p className="
                    mt-6
                    text-blue-200 
                    text-base
                    sm:text-lg
                    md:text-xl
                    max-w-2xl
                    mx-auto
                ">
                    We Are Always Ready To Reply You Within 24 Hours.
                </p>
            </motion.div>

        </section>
    );
}