"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";

export default function FloatingContact() {
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const closeTimeout = useRef(null);
    const handleOpen = () => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
        }
        setOpen(true);
    };

    const handleClose= () => {
        closeTimeout.current = setTimeout(() => {
            setOpen(false);
        }, 200);
    };

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <div 
            className="fixed bottom-6 right-6 flex flex-col items-end space-y-3 z-50 pointer-events-none"
        >
            {/*Buttons (appear on hover)*/}
            <div 
                onMouseEnter={() => !isMobile && handleOpen()}
                onMouseLeave={() => !isMobile && handleClose()}
                className={`flex flex-col items-end space-y-3 transition-all duration-300 ${
                    open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
            >

                {/*WhatsApp*/}
                <a 
                    href="https://wa.me/8801234567890"
                    target="_blank"
                    className="flex items-center gap-3 bg-green-500 text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-200"
                >
                    <MessageCircle size={18} />
                     <span className="text-sm font-medium">Chat With WhatsApp</span>
                </a>

                {/*Call*/}
                <a 
                    href="tel:+8801234567890"
                    className="flex items-center gap-3 bg-blue-500 text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-200"
                >
                    <Phone size={18} />
                    <span className="text-sm font-medium">Call</span>
                </a>

                {/*Email*/}
                <a 
                    href="mailto:info@company.com"
                    className="flex items-center gap-3 bg-gray-700 text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-200"
                >
                    <Mail size={18} />
                    <span className="text-sm font-medium">Email</span>
                </a>
            </div>

            {/*Main Floating Button*/}
            <button
                onMouseEnter={() => !isMobile && handleOpen()}
                onMouseLeave={() => !isMobile && handleClose()}
                onClick={() => setOpen(!open)}
                className="pointer-events-auto bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition"
            >
                <MessageCircle size={24} />
            </button>

        </div>
    );
}