"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [locationOpen, setLocationOpen] = useState(false);
    const [query, setQuery] = useState("");
    const router = useRouter();
    const handleSearch = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        router.push(`/search?q=${query}`);
    };
    const [aboutOpen, setAboutOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <div className="w-full bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            
            {/*Logo*/}
            <div className="text-xl font-bold text-gray-800">
                Raiyan Engineering BD
            </div>
            
            {/* Search Bar */}
            <form 
                onSubmit={handleSearch} 
                className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/3 focus-within:ring-blue-500 transition"
            >
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none w-full text-sm"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
            />
                <button 
                    type="submit"
                    className="ml-2 p-2 rounded-full hover:bg-gray-200 transition"
                >
                    <Search size={18} className="text-gray-600" />
                </button>
            </form>

            <div className="hidden md:flex items-center gap-6">

            {/* Menu */}
            <div className="flex items-center gap-6 text-gray-600 font-medium">
                <Link href="/" className="hover:text-black transition">
                    Home
                </Link>

                {/*About Dropdown*/}
                <div className="relative group">
                    <span className="cursor-pointer hover:text-black transition">
                        About
                    </span>

                    <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                            Company
                        </Link>
                        <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                            Careers
                        </Link>
                    </div>
                </div>

                {/*Services Dropdown*/}
                <div className="relative group">
                    <span className="cursor-pointer hover:text-black transition">
                        Services
                    </span>

                    <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <Link href="/services" className="block px-4 py-2 hover:bg-gray-100">
                            Web Development
                        </Link>
                        <Link href="/services" className="block px-4 py-2 hover:bg-gray-100">
                            UI/UX Design
                        </Link>
                        <Link href="/services" className="block px-4 py-2 hover:bg-gray-100">
                            SEO Optimization
                        </Link>
                    </div>
                </div>
                
                <Link href="/contact" className="hover:text-black transition">
                    Contact
                </Link>
            </div>

            {/* CTA */}
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition whitespace-nowrap">
                Get Quote
            </button>
        </div>

        {/* Hamburger Button */} 
            <button
                className="md:hidden text-2xl text-gray-700"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>
            </div>

            {/*Mobile Menu*/}
            {menuOpen && (
                <div className="fixed inset-0 z-50 md:hidden flex flex-col">

                    {/*Overlay*/}
                    {/*<div 
                        className="absolute inset-0 bg-black/60"
                        onClick={() => setMenuOpen(false)}
                    ></div>*/}

                    {/*Slide Menu*/}
                    <div className="absolute right-0 top-0 h-full w-80 bg-white text-black z-50 shadow-[0_0_40px_rgba(0,0,0,0.25)] p-6 flex flex-col space-y-6 animate-slide-in border border-gray-200">

                        {/*Close Button*/}
                        <button
                            className="text-2xl self-end"
                            onClick={() => setMenuOpen(false)}
                        >
                            ✕
                        </button>
                    
                    {/*Links*/}
                    <Link href="/" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-black bg-blue-500/20 hover:bg-blue-500/40 rounded-full">
                        Home
                    </Link>

                    {/*About Dropdown*/}
                    <div>
                        <button
                            onClick={() => setAboutOpen(!aboutOpen)}
                            className="w-full flex justify-between items-center text-lg font-medium text-black bg-blue-500/20 hover:bg-blue-500/40 rounded-full"
                        >
                            About
                            <span>{aboutOpen ? "-" : "+"}</span>
                        </button>

                        {aboutOpen && (
                            <div className="mt-2 ml-4 space-y-2 text-gray-800">
                                <Link 
                                    href="/about"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition"
                                >
                                    Company
                                </Link>
                                <Link 
                                    href="/about"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition"
                                >
                                    Team
                                </Link>
                                <Link 
                                    href="/about"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition"
                                >
                                    Careers
                                </Link>
                            </div>
                        )}
                        </div>

                        {/*Services Dropdown*/}
                        <div>
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className="w-full flex justify-between items-center text-lg font-medium text-black bg-blue-500/20 hover:bg-blue-500/40 rounded-full"
                            >
                                Services
                                <span>{servicesOpen ? "-" : "+"}</span>
                            </button>

                            {servicesOpen && (
                                <div className="mt-2 ml-4 space-y-2 text-gray-800">
                                    <Link 
                                        href="/services"
                                        className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition"
                                    >
                                        Web Development
                                    </Link>
                                    <Link 
                                        href="/services"
                                        className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition"
                                    >
                                        UI/UX Design
                                    </Link>
                                    <Link 
                                        href="/services"
                                        className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-black transition"
                                    >
                                        SEO Optimization
                                    </Link>
                                </div>
                            )}
                        </div>

                    <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-lg font-medium text-black bg-blue-500/20 hover:bg-blue-500/40 rounded-full">
                        Contact
                    </Link>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4">
                        Get Quote
                    </button>

                    {/* Our Locations Toggle */}
                    <div className="border-t pt-4">
                        <button
                            onClick={() => setLocationOpen(!locationOpen)}
                            className="w-full flex justify-between items-center font-medium text-black text-lg bg-blue-500/20 hover:bg-blue-500/40 rounded-full"
                        >
                            Our Location
                            <span>{locationOpen ? "-" : "+"}</span>
                        </button>

                        {/* Expandable Content */}
                        {locationOpen && (
                            <div className="mt-2 text-sm text-gray-800 space-y-1">
                                <p>Chattogram, Bangladesh</p>
                                <p>📞 +880 1234 567890</p>
                                <p>✉️ info@company.com</p>
                            </div>    
                        )}
                    </div>
                </div>
                </div>
            )}
    </div>
    );
}