"use client";

import { motion } from "framer-motion";

const team = [
    {
        name: "John Doe",
        role: "CEO & Founder",
        image: "/meetteam/member1.jpg",
        whatsapp: "https://wa.me/8801234567890",
        messenger: "https://m.me/username",
    },
    {
        name: "Jane Smith",
        role: "Creative Director",
        image: "/meetteam/member2.jpg",
        whatsapp: "https://wa.me/8801234567890",
        messenger: "https://m.me/username",
    },
    {
        name: "Michael Lee",
        role: "Lead Developer",
        image: "/meetteam/member3.jpg",
        whatsapp: "https://wa.me/8801234567890",
        messenger: "https://m.me/username",
    },
];

export default function MeetTeam() {
    return (
        <section className="w-full bg-black py-20 px-6 flex flex-col items-center">
            
            {/*Heading*/}
            <div className="mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white relative inline-block group">
                    Meet Our Team 

                    {/*Hover underline*/}
                    <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </h2>
            </div>

            {/*Team Grid*/}
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl w-full">
                {team.map((member, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-white/10 transition"
                    >

                        {/*Image*/}
                        <div className="overflow-hidden">
                            <img 
                                src={member.image}
                                alt={member.name}
                                className="w-full h-[320px] object-cover hover:scale-110 transition duration-500"
                            />
                        </div>

                        {/*Info*/}
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold text-white">
                                {member.name}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4">
                                {member.role}
                            </p>

                            {/*Button*/}
                            <div className="flex gap-3 justify-center">

                                {/*WhatsApp*/}
                                <a href={member.whatsapp} target="_blank">
                                    <button className="bg-green-500/30 hover:bg-green-600/50 text-white px-4 py-2 rounded-lg text-sm transition">
                                        Let's Talk 
                                    </button>
                                </a>

                                {/*Messenger*/}
                                <a href={member.messenger} target="_blank">
                                    <button className="bg-blue-500/30 hover:bg-blue-600/50 text-white px-4 py-2 rounded-lg text-sm transition">
                                        Let's Talk 
                                    </button>
                                </a>

                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}