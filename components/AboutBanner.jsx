"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutBanner() {
    return (
        <section 
            className="relative w-full h-[70vh] flex items-center justify-center text-center text-white"
            style={{
                backgroundImage: `url("/aboutBanner/aboutbanner.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/*Dark Overlay*/}
            <div className="absolute inset-0 bg-black/70"></div>

            {/*Content*/}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-2xl px-6"
            >
                {/*Heading*/}
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
                    About Us      
                </h1>

                {/*Description*/}
                <p className="text-sm md:text-lg text-gray-300 mb-8 leading-relaxed">
                    We are a passionate team dedicated to delivering innovative solutions
                    and high-quality services. Our mission is to create impactful digital 
                    experiences that help businesses grow and succeed in a modern world.
                </p>

                {/*Button*/}
                <Link href="/contact">
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
                        Contact Now
                    </button>
                </Link>
            </motion.div>
        </section>
    );
}