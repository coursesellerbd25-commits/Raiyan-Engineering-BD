"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductShowcase() {
    return (
        <section className="w-full bg-black text-white flex items-center justify-center px-6 py-10">

            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/*Left side - text*/}
                <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Solar Smart Panel
                    </h2>

                    <p className="text-gray-400 mb-6 text-lg">
                        Efficient. Sustainable. Built for the future.
                    </p>

                    <ul className="space-y-3">
                        <li>High energy conversion efficiency</li>
                        <li>Eco-friendly & durable materials</li>
                        <li>Long-lasting battery performance</li>
                        <li>Optimized for all weather conditions</li>
                    </ul>
                </motion.div>

                {/*Right Side - images*/}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative w-full h-[420px]"
                >

                    {/*Image 1*/}
                    <motion.div 
                        variants={{
                            hidden: { x: 150, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.8 }}
                        className="absolute top-0 left-0 w-[70%] h-full rounded-2xl overflow-hidden z-10"
                    >
                        <Image 
                            src="/products/product1.jpg"
                            alt="product"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/*Image 2*/}
                    <motion.div 
                        variants={{
                            hidden: { x: 250, opacity: 0 },
                            visible: { x: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="absolute top-10 right-0 w-[70%] h-full rounded-2xl overflow-hidden z-20 shadow-2xl"
                    >
                        <Image 
                            src="/products/product2.jpg"
                            alt="product"
                            fill 
                            className="object-cover"
                        />
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}