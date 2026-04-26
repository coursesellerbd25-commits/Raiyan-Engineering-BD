"use client";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    return (
        <div className="p-10">
            <h1>Search Reasults for: {query}</h1>
        </div>
    );
}