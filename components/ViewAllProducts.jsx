"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ViewAllProducts() {
    return (
        <section className="w-full bg-black py-20 px-6 flex justify-center">
        
            <div className="max-w-7xl w-full relative">
            
                {/*Image (Slides in from left)*/}
                <motion.div 
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[420px] rounded-2xl overflow-hidden"
                >
                    <Image 
                        src="/products/product2.jpg"
                        alt="all products"
                        fill
                        className="object-cover"
                    />

                    {/*Optional dark overlay for readability*/}
                    <div className="absolute inset-0 bg-black/40"></div>
                </motion.div>

                {/*Text panel (attached to right)*/}
                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="
                        absolute top-1/2 right-6
                        -translate-y-1/2
                        bg-white text-black
                        p-8 md:p-10
                        rounded-2xl shadow-2xl
                        w-[90%] md:w-[420px]
                    "
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Explore Our Full Product Range 
                    </h2>

                    <p className="text-gray-600 mb-6">
                        From advanced solar solutions to smart energy systems, 
                        our products are designed to deliver efficiency, reliability,
                        and sustainability for modern needs.
                    </p>

                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                        View All →
                    </button>
                </motion.div>

            </div>
        </section>
    );
}