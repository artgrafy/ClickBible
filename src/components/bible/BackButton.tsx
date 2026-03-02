"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <button onClick={() => router.back()} className="p-2 -ml-2 text-[#2d2a26]/60 hover:text-[#2d2a26] transition-colors">
            <ChevronLeft size={24} />
        </button>
    );
}
