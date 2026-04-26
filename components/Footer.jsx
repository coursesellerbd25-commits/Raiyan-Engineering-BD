"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0a0a0a] text-gray-400 pt-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/*Top Section*/}
                <div className="grid md:grid-cols-3 gap-10 pb-12">

                    {/*Column 1 - Company*/}
                    <div className="-mt-4">
                        <Image src="/logos/raiyan.png" width={140} height={50} alt="logo" />
                        <p className="text-sm leading-relaxed">
                            We deliver innovation and sustainable solutions to empower businesses
                            and communities. Our mission is to create impactful projects that
                            shape a better future.
                        </p>
                        <p className="text-xs mt-4 text-gray-500">
                            Trusted by 50+ clients across Bangladesh
                        </p>
                    </div>

                    {/*Column 2 - Links*/}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">
                            Important Links 
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Our Services", href: "/services" },
                                { name: "Contact Us", href: "/contact" }
                            ].map((link, i) => (
                                <li key={i}>
                                    <a 
                                        href={link.href}
                                        className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/*Column 3 - Contact*/}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">
                            Get In Touch 
                        </h3>

                        <div className="space-y-4 text-sm">

                            <div className="flex items-center gap-3 group">
                                <MapPin className="w-5 h-5 group-hover:text-white transition" />
                                <span>Chittagong, Bangladesh</span>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <Phone className="w-5 h-5 group-hover:text-white transition" />
                                <span>+880 1234 567 890</span>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <Mail className="w-5 h-5 group-hover:text-white transition" />
                                <span>info@company.com</span>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/*Bottom Section*/}
                <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    {/*© Text*/}
                    <p className="text-sm text-center md:text-left">
                       © Copyright 2026 MyCompany. All Rights Reserved  
                    </p>

                    {/*Social Icons*/}
                    <div className="flex gap-5">
                        <a href="#" className="hover:text-white transition">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <FaWhatsapp size={18} />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <FaLinkedin size={18} />
                        </a>
                        <a href="#" className="hover:text-white transition">
                            <FaTwitter size={18} />
                        </a>
                    </div>

                </div>
            </div>
        </footer> 
    );
}