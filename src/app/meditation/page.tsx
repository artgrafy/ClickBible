import { getPersonalizedMeditation } from "@/lib/bible/daily-theme";
import BackButton from "@/components/bible/BackButton";
import PraisePlayer from "@/components/bible/PraisePlayer";
import { Heart, Quote, Sparkles, BookOpen, Download, Share2 } from "lucide-react";
import Image from "next/image";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface PageProps {
    searchParams: Promise<{ emotion?: string; memo?: string }>;
}

export default async function MeditationPage({ searchParams }: PageProps) {
    // 1. URL 파라미터를 서버에서 안전하게 가져오기 (Next.js 16 규칙)
    const { emotion = "calm", memo = "" } = await searchParams;

    // 2. AI에게 개인화된 묵상 데이터 요청 (서버에서 수행)
    const data = await getPersonalizedMeditation(emotion, memo);

    return (
        <div className="flex flex-col min-h-screen animate-in fade-in duration-700 bg-[#F8F6F2]/30 text-[#2D2A26]">
            {/* Top Navigation */}
            <header className="px-6 h-16 flex items-center justify-between bg-white border-b border-[#E5E0D8]/40 sticky top-0 z-50 shadow-sm">
                <BackButton />
                <h1 className="text-sm font-serif font-bold text-[#2d2a26]/80 tracking-tight">당신을 위한 말씀 한조각</h1>
                <div className="flex items-center gap-2">
                    <button className="p-2 text-[#EF4444] transition-colors hover:text-[#D11A2A]">
                        <Heart size={20} fill="#EF4444" />
                    </button>
                    <div className="w-8 h-8 bg-[#5E4D44] rounded-lg flex items-center justify-center text-white border border-[#4A3C35]/20 shadow-sm">
                        <BookOpen size={16} />
                    </div>
                </div>
            </header>

            <div className="flex-1 flex flex-col py-8 px-6 gap-8 max-w-2xl mx-auto w-full pb-32">
                {/* Topic Badge */}
                <div className="flex justify-center">
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-[#FFF9E5] border border-[#FDE68A] rounded-full shadow-sm">
                        <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold text-[#92400E] tracking-tight whitespace-nowrap">오늘의 묵상 주제: {data.topic}</span>
                    </div>
                </div>

                {/* 1. Verse Card */}
                <section className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-[#E5E0D8]/40 relative overflow-hidden group">
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[#FDE68A]/20">
                        <Quote size={48} fill="currentColor" />
                    </div>
                    <div className="relative z-10 flex flex-col items-center text-center gap-6 py-4">
                        <p className="font-serif text-[20px] md:text-[24px] leading-[1.6] text-[#2d2a26] font-medium break-keep">
                            "{data.verse}"
                        </p>
                        <p className="text-[11px] font-bold text-[#92400E]/40 uppercase tracking-[0.4em]">
                            — {data.ref} —
                        </p>
                    </div>
                    <div className="absolute bottom-6 right-8 text-[#E5E0D8]">
                        <BookOpen size={28} strokeWidth={1.5} />
                    </div>
                </section>

                {/* 2. Word Sharing Section */}
                <section className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-[#E5E0D8]/40 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FFF9E5] flex items-center justify-center text-[#F59E0B]">
                            <Sparkles size={20} />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-serif font-bold text-[#2d2a26]">말씀 나눔</h3>
                            <span className="text-[10px] text-[#2d2a26]/40 uppercase tracking-wider font-bold">Daily Meditation</span>
                        </div>
                    </div>
                    <p className="font-serif text-[15px] leading-[1.8] text-[#2d2a26]/70 whitespace-pre-line text-justify break-keep">
                        {data.meditation}
                    </p>
                </section>

                {/* 3. Recommended Praise & Player (Client Component) */}
                <PraisePlayer praise={data.praise} />

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <button className="h-14 bg-[#8B5E3C] hover:bg-[#6F4A30] text-white rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95">
                        <Download size={18} />
                        <span className="font-bold text-[14px]">묵상 저장하기</span>
                    </button>
                    <button className="h-14 bg-[#FDE68A]/30 border border-[#FDE68A] text-[#92400E] hover:bg-[#FDE68A]/50 rounded-2xl shadow-sm flex items-center justify-center gap-2 transition-all active:scale-95">
                        <Share2 size={18} />
                        <span className="font-bold text-[14px]">말씀 공유하기</span>
                    </button>
                </div>

                <p className="text-[10px] text-[#2d2a26]/20 text-center mt-12 mb-8 font-serif">
                    © 2026 말씀 한조각. All rights reserved.
                </p>
            </div>
        </div>
    );
}
