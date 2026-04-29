"use client";

import Image from "next/image";
import { motion } from 'framer-motion';

export default function ContactCard({
    name,
    role,
    image,
    whatsapp, 
    messenger,
}) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#020617] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg hover: shadow-blue-500/10 transition"
        >
            {/*Profile Image*/}
            <div className="relative w-28 h-28 mb-4">
                <Image 
                    src={image}
                    alt={name}
                    fill
                    className="rounded-full object-cover border-2 border-blue-500/30"
                />
            </div>

            {/*Name*/}
            <h3 className="text-white text-lg font-semibold">
                {name}
            </h3>

            {/*Role*/}
            <p className="text-gray-400 text-sm mb-5">
                {role}
            </p>

            {/*Buttons*/}
            <div className="flex gap-3 w-full">
                
                {/*WhatsApp*/}
                <a 
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition text-sm font-medium"
                >
                    Let's Talk 
                </a>

            </div>
        </motion.div>
    );
}