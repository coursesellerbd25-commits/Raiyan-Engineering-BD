"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Solar Power Installation",
        subtitle: "Industrial Energy Solution",
        img: "/successGallary/project1.jpg",
    },
    {
        title: "Smart Irrigation System",
        subtitle: "AI-Based Farming",
        img: "/successGallary/project2.jpg",
    },
    {
        title: "Green Building Design",
        subtitle: "Eco-friendly Architecture",
        img: "/successGallary/project3.jpg",
    },
    {
        title: "Water Treatment Plant",
        subtitle: "Sustainable Water System",
        img: "/successGallary/project4.jpg",
    },
];

export default function SuccessGallary() {
    return (
        <section className="w-full bg-black py-20 px-6 flex justify-center">

            <div className="max-w-7xl w-full">

                {/*Section title*/}
                <motion.h2 
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-4xl md:text-5xl font-bold text-center mb-16"
                >
                    Our Successful Project Gallary
                </motion.h2>

                {/*Gallary Grid*/}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative overflow-hidden rounded-2xl group cursor-pointer"
                        >

                            {/*Image*/}
                            <Image 
                                src={project.img}
                                alt={project.title}
                                width={500}
                                height={400}
                                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/*Overlay*/}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            {/*Hover Content*/}
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <h3 className="text-white text-xl font-semibold">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    {project.subtitle}
                                </p>
                            </div>

                            {/*Y-axis lift effect*/}
                            <div className="absolute inset-0 rounded-2xl transition-transform duration-300 group-hover:-translate-y-3"></div>

                            </motion.div>                         
                    ))}
                    </div>
                </div>
            </section>
    );
}