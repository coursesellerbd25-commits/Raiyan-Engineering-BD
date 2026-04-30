"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import SearchContent from "./SearchContent";


export default function SearchPage() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <SearchContent />
        </Suspense>
    );
}
