"use client";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q")?.toLowerCase() || "";

    const data = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
        { title: "Supply", link: "/supply" },
        { title: "Contact", link: "/contact" },
    ];

    const results = data.filter(item => 
        item.title.toLowerCase().includes(query)
    );

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-6">
                Search Results for: {query}
            </h1>

            {results.length === 0 ? (
                <p className="text-gray-500">
                    No results found
                </p>
            ) : (
                <div className="space-y-3">
                    {results.map((item, i) => (
                        <div 
                            key={i}
                            className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                            onClick={() => window.location.href = item.link}
                        >
                            {item.title}
                        </div>
                    ))}
            </div>
            )}
        </div>
    );
}