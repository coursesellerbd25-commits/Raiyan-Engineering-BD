"use client";

import { useEffect, useState } from "react";

function Counter({ target, label }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1500;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                {count}+
            </h3>
            <p className="text-gray-600 mt-1">{label}</p>
        </div>
    );
}

export default function Stats() {
    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                
                <Counter target={120} label="Projects Completed" />
                <Counter target={50} label="Happy Clients" />
                <Counter target={10} label="Services Offered" />
                <Counter target={5} label="Years Experience" />

            </div>
        </div>
    );
}