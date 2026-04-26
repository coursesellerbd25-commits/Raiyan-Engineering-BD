"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Zap, Users, Award } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Reliable & Secure",
        desc: "We ensure high-quality, safe, and dependable solutions for every project.",
    },
    {
        icon: Zap,
        title: "Fast Delivery",
        desc: "Quick turnaround without compromising quality or performance.",
    },
    {
        icon: Users,
        title: "Exper Team",
        desc: "Skilled professionals with real-world experience and innovation.",
    },
    {
        icon: Award,
        title: "Proven Results", 
        desc: "Successful projects and satisfied clients across industries.",
    },
];

export default function WhyChoose() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">

                {/*Heading*/}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Why Choose Us
                </h2>

                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    We combine expertise, innovation, and commitment to deliver exceptional
                    results that drive your business forward.
                </p>

                {/*Cards*/}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">

                    {features.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div 
                                key={index}
                                className={`p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                                    visible 
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10" 
                                }`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="w-12 h-12 mx-auto flex items-center rounded-full bg-blue-100 text blue-600 mb-4">
                                    <Icon size={24} />
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 mt-2 text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}