"use client"; 

import { Phone, Mail } from "lucide-react";

export default function TopBar() {
    return (
        <div className="w-full bg-gray-900 text-gray-300 text-xs md:text-sm py-2 px-6 flex items-center justify-between">
            
            {/*Left: Contact*/}
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 hover:text-white transition">
                    <Phone size={14} />
                        +880 1234 567890
                </span>
                <span className="hidden sm:inline text-gray-500">|</span>
                <span className="items-center gap-2 hover:text-white transition hidden sm:flex">
                <Mail size={14} className="shrink-0 "/>
                     info@company.com
                </span>
            </div>

            {/*Right: Socials*/}
            {/*<div className="flex items-center gap-4">
                <a
                 href="#"
                 className="hover:text-blue-400 transition"
                >
                    Facebook
                </a>
                <a
                 href="#"
                 className="hover:text-blue-400 transition"
                >
                    LinkedIn
                </a>
            </div>*/}
        </div>
    );
}