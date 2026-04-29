"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
        if (results.length > 0) {
            router.push(results[0].link);
            setQuery("");
            setResults([]);
            return;
        }
        
        router.push(`/search?q=${query}`);
    };
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const delayDebounce = setTimeout(async () => {
            setLoading(true);

            try {
                const res = await fetch(`/api/search?q=${query}`);
                const data = await res.json();
                setResults(data);
            } catch(err) {
                console.error(err);
            } finally {
            setLoading(false);
            }
        }, 120);

        return () => clearTimeout(delayDebounce);
    }, [query]);
    
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

                {query && (
                    <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-xl mt-2 shadow-lg z-50 max-h-64 overflow-y-auto">

                        {loading && (
                            <div className="p-3 text-sm text-gray-500">Searching...</div>
                        )}

                        {!loading && results.length === 0 && (
                            <div className="p-3 text-sm text-gray-500">No results found</div>
                        )}

                        {results.map((item, i) => (
                            <div 
                                key={i}
                                onClick={() => {
                                    router.push(item.link);
                                    setQuery("");
                                    setResults([]);
                                }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                )}
                
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

                <Link href="/about" className="hover:text-black transition">
                    About 
                </Link>

                <Link href="/supply" className="hover:text-black transiton">
                    Supply
                </Link>
                
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
                className="md:hidden w-8 h-8 relative flex justify-center items-center"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span 
                    className={`absolute w-6 h-[2px] bg-gray-800 transition-all duration-300 ease-in-out ${
                        menuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                    }`}
                ></span>

                <span 
                    className={`absolute w-6 h-[2px] bg-gray-800 transition-all duration-200 ease-in-out ${
                        menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                    }`}
                ></span>

                <span 
                    className={`absolute w-6 h-[2px] bg-gray-800 transition-all duration-300 ease-in-out ${
                        menuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                    }`}
                ></span>
            </button>
            </div>

            {/*Mobile Menu*/}
                <div className={`fixed inset-0 z-50 md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>

                    {/*Overlay*/}
                    <div 
                        className={`absolute inset-0 bg-black/30 backdrop-sm transition-opacity duration-300
                            ${menuOpen ? "opacity-100" : "opacity-0"}`}
                        onClick={() => setMenuOpen(false)}
                    ></div>

                    {/*Slide Menu*/}
                    <div 
                        className={`fixed right-0 top-0 h-screen w-80 bg-white text-black z-50 shadow-2xl p-6 flex flex-col space-y-6 border-l border-gray-200 transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                                    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
                    >

                        {/*Close Button*/}
                        <button
                            className="text-2xl self-end font-bold text-black hover:opacity-70 transition transform hover:rotate-90 duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            ✕
                        </button>
                    
                    {/*Links*/}
                    <div className="flex flex-col gap-3 mt-4">

                        <Link href="/" onClick={() => setMenuOpen(false)} className="text-lg font-semibold px-4 py-2 rounded-lg">
                            Home
                        </Link>

                        <Link href="/about" onClick={() => setMenuOpen(false)} className="text-lg font-semibold px-4 py-2 rounded-lg">
                            About 
                        </Link>
                    
                        <Link href="/supply" onClick={() => setMenuOpen(false)} className="text-lg font-semibold px-4 py-2 rounded-lg">
                            Supply
                        </Link>

                        <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-lg font-semibold px-4 py-2 rounded-lg">
                            Contact
                        </Link>

                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition mt-4">
                        Get Quote
                    </button>

                    {/* Our Locations Toggle */}
                    <div className="border-t pt-4 mt-4">
                        <button
                            onClick={() => setLocationOpen(!locationOpen)}
                            className="w-full flex justify-between items-center font-semibold text-black text-lg px-2"
                        >
                            Our Location
                            <span
                                className={`text-xl transition-all duration-300 ${
                                    locationOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"
                                }`}
                            >
                                {locationOpen ? "-" : "+"}
                            </span>
                        </button>

                        {/* Expandable Content */}
                        <div 
                            className={`overflow-hidden transition-all duration-300 ${
                                locationOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                            }`}
                        >
                            <div className="text-sm text-gray-700 space-y-2 px-2">
                                <p className="font-medium">Chattogram, Bangladesh</p>
                                <p>📞 +880 1234 567890</p>
                                <p>✉️ info@company.com</p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
}