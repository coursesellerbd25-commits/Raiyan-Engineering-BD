"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductShowcase4() {
    return (
        <section className="w-full min-h-screen bg-black text-white flext items-center justify-center px-6 py-16">
            
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/*Left side - images*/}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative w-full h-[420px]"
                >

                    {/*Back image*/}
                    <motion.div 
                        variants={{
                            hidden: { x: -150, opacity: 0 },
                            visible: { x:0, opacity: 1 }
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

                    {/*Front Image*/}
                    <motion.div 
                        variants={{
                            hidden: { x: -250, opacity: 0 },
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

                {/*Right side-text*/}
                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Smart Energy Storage 
                    </h2>

                    <p className="text-gray-400 mb-6 text-lg">
                        Store smarter. Use anytime. Power without limits.
                    </p>

                    <ul className="space-y-3">
                        <li>Advanced lithium storage system</li>
                        <li>Fast charging & discharge cycles</li>
                        <li>Compact and modern design</li>
                        <li>Seamless solar integration</li>
                    </ul>
                </motion.div>

            </div>
        </section>

    );
}