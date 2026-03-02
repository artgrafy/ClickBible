"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, PenTool } from "lucide-react";

export default function JournalPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen bg-white animate-in slide-in-from-right duration-500">
            <header className="px-6 py-6 flex items-center gap-4 border-b border-[#e5e0d8] sticky top-0 bg-white/80 backdrop-blur-md z-50">
                <button onClick={() => router.back()} className="btn btn-ghost btn-circle btn-sm">
                    <ChevronLeft size={24} />
                </button>
                <h1 className="font-serif font-bold text-xl">말씀 필사 & 일기</h1>
            </header>

            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center gap-6">
                <div className="w-20 h-20 rounded-3xl bg-[#FDFBF7] border border-[#e5e0d8] flex items-center justify-center text-[#11d452]">
                    <PenTool size={40} />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-serif text-2xl font-bold">마음에 새기는 말씀</h2>
                    <p className="text-sm text-[#2d2a26]/40 leading-relaxed font-medium">
                        말씀을 한 글자씩 적어내려가는 필사 일기장 서비스가 <br /> 정교하게 준비 중입니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
