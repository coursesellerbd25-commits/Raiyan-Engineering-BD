"use client";

import { motion } from "framer-motion";
import { address } from "framer-motion/client";

const offices = [
    {
        title: "Corporate Office",
        address: "Chittagong, Bangladesh",
        phone: "+8801234567890",
        email: "info@company.com",
    },
];

export default function OfficeMap() {
    return (
        <section className="w-full bg-black py-16 px-6 flex justify-center">
            <div className="max-w-7xl w-full space-y-16">

                {/*Heading*/}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                        Our Office 
                    </h2>
                    <p className="text-gray-400 mt-4 text-sm sm:text-base">
                        Visit us or reach out anytime. We're always open to talk. 
                    </p>
                </motion.div>

                {/*Content: Cards + Maps*/}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/*Left - Office Cards*/}
                    <div className="grid gap-6">
                        {offices.map((office, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#020617] border border-white/10 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-2 transition"
                            >
                                <h3 className="text-white text-lg font-semibold mb-4">
                                    {office.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-2">
                                    {office.address}
                                </p>
                                <p className="text-gray-400 text-sm mb-2">
                                    {office.phone}
                                </p>
                                <p className="text-gray-400 text-sm">
                                    {office.email}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/*Right - Map*/}
                    <motion.div 
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
                    >
                        <iframe 
                            src="https://maps.google.com/maps?q=Chittagong,Bangladesh&z=13&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                        />
                    </motion.div>

                </div>

            </div>
        </section>
    );
}