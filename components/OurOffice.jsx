"use client";

import { motion } from "framer-motion";

const offices = [
    {
        title: "Corporate Office",
        address: "Chittagong, Bangladesh",
        phone: "+8801234567890",
        email: "info@company.com",
    },
    /*{
        title: "Head Office",
        address: "Dhaka, Bangladesh",
        phone: "+8801234567890",
        email: "headoffice@company.com",
    },
    {
        title: "Branch Office",
        address: "Sylhet, Bangladesh",
        phone: "+8801234567890",
        email: "sylhet@company.com",
    },*/
];

export default function OurOffice() {
    return (
        <section className="bg-black py-4 px-6">

            {/*Heading*/}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                    Our Office 
                </h2>
                <p className="text-gray-400 mt-4 text-sm sm:text-base">
                    Visit us or reach out anytime. We're always open to talk.
                </p>
            </motion.div>

            {/*Cards*/}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                {offices.map((office, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[#020617] border border-white/10 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition"
                    >
                        {/*Title*/}
                        <h3 className="text-white text-lg font-semibold mb-4">
                            {office.title}
                        </h3>

                        {/*Address*/}
                        <p className="text-gray-400 text-sm mb-2">
                            {office.address}
                        </p>

                        {/*Phone*/}
                        <p className="text-gray-400 text-sm mb-2">
                            {office.phone}
                        </p>

                        {/*Email*/}
                        <p className="text-gray-400 text-sm">
                            {office.email}
                        </p>
                    </motion.div>
                ))}

            </div>
        </section>
    );
}