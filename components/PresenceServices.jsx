"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PresenceServices() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/*Left - Map*/}
                <div 
                    className={`transition-all duration-700 ${
                        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                >
                    <Image  
                        src="/map2.jpg"
                        alt="Our Location"
                        width={1600}
                        height={1000}
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>

                {/*Right - Services*/}
                <div 
                    className={`transition-all duration-700 delay-200 ${
                        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Our Presence & Expertise
                    </h2>

                    <p className="text-gray-600 mt-4">
                        We proudly operate across Bangladesh, delivering high-quality engineering and digital solutions tailored to your business needs.
                    </p>

                    {/*Services List*/}
                    <div className="mt-6 space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <p className="text-gray-700">Web Development</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <p className="text-gray-700">UI/UX Design</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <p className="text-gray-700">Engineering Solutions</p>
                        </div>
                    </div>

                    {/*CTA*/}
                    <div className="mt-8 flex flex-wrap gap-4">

                        <Link 
                            href="/supply"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                        >
                            Explore Services →
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
}