"use client";

import { useEffect, useState } from "react";

export default function ClientSlider() {
    const logos = [
        "/logos/cp.png",
        "/logos/google.png",
        "/logos/nestle.png",
        "/logos/raiyan.png",
        "/logos/uniliver.png",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev+1) % logos.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-gray-50 py-16 overflow-hidden">

            {/*Heading*/}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Our Valuable Clients
                </h2>
                <p className="text-gray-500 mt-2">
                    Trusted by leading companies
                </p>
            </div>

            {/*Slide*/}
            <div className="max-w-5xl mx-auto overflow-hidden">
                <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${index * 20}%)`, 
                    }}
                >
                    {logos.map((logo, i) => (
                        <div 
                            key={i}
                            className="w-1/5 flex justify-center items-center px-4"
                        >
                            <img 
                                src={logo}
                                alt="client logo"
                                className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition"
                            />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}