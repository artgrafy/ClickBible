"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, BookOpen } from "lucide-react";

export default function BibleReadPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col min-h-screen bg-white animate-in slide-in-from-right duration-500">
            <header className="px-6 py-6 flex items-center gap-4 border-b border-[#e5e0d8] sticky top-0 bg-white/80 backdrop-blur-md z-50">
                <button onClick={() => router.back()} className="btn btn-ghost btn-circle btn-sm">
                    <ChevronLeft size={24} />
                </button>
                <h1 className="font-serif font-bold text-xl">매일 성경</h1>
            </header>

            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center gap-6">
                <div className="w-20 h-20 rounded-3xl bg-[#FDFBF7] border border-[#e5e0d8] flex items-center justify-center text-[#5E4D44]">
                    <BookOpen size={40} />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-serif text-2xl font-bold">궁구하는 자에게 복이 있나니</h2>
                    <p className="text-sm text-[#2d2a26]/40 leading-relaxed font-medium">
                        미리 정해놓은 오늘의 구절을 읽고 <br /> 깊이 있게 묵상하는 공간입니다. 곧 준비됩니다.
                    </p>
                </div>
            </div>
        </div>
    );
}
