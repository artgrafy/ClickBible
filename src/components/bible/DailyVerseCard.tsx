"use client";

import { Quote, Share2, Heart, Music } from "lucide-react";

export default function DailyVerseCard() {
    return (
        <div className="flex flex-col gap-6 py-12 px-8 lg:px-12 animate-in slide-in-from-bottom duration-1000">
            {/* Decorative Quote Mark */}
            <div className="flex justify-center flex-col items-center gap-8 relative">
                <div className="absolute top-0 opacity-10 -mt-12 text-[#11d452]">
                    <Quote size={80} fill="currentColor" />
                </div>

                {/* Main Verse */}
                <div className="flex flex-col gap-10 text-center relative z-10">
                    <p className="font-serif text-2xl lg:text-3xl font-[500] leading-[1.8] text-[#2d2a26] md:max-w-[18ch]">
                        "하늘이 하나님의 영광을 <br /> 선포하고 <br />
                        궁창이 그의 손으로 하신 일을 나타내는도다"
                    </p>
                    <p className="text-[#11d452] font-black tracking-[0.3em] text-sm uppercase">— 시편 19:1 —</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 items-center justify-center mt-4">
                    <button className="btn btn-ghost btn-circle btn-lg text-[#2d2a26]/20 hover:text-red-500 hover:bg-red-50 hover:border-transparent transition-all">
                        <Heart size={20} />
                    </button>

                    <button className="btn h-14 px-12 bg-[#11d452] hover:bg-[#0fb845] text-white border-transparent rounded-full shadow-[0_15px_30px_-5px_rgba(17,212,82,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(17,212,82,0.4)] transition-all font-bold tracking-widest uppercase">
                        묵상하기
                    </button>

                    <button className="btn btn-ghost btn-circle btn-lg text-[#2d2a26]/20 hover:text-[#11d452] hover:bg-[#effaf2] hover:border-transparent transition-all">
                        <Share2 size={20} />
                    </button>
                </div>

                {/* Praise Recommendation / Worship Suggestion */}
                <div className="w-full mt-12 p-6 rounded-3xl bg-white border border-[#e5e0d8] flex items-center gap-4 group cursor-pointer hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-2xl bg-[#effaf2] flex items-center justify-center text-[#11d452] group-hover:scale-110 transition-transform">
                        <Music size={24} />
                    </div>
                    <div className="flex-1 flex flex-col">
                        <p className="text-[10px] font-bold text-[#11d452] tracking-widest uppercase mb-0.5">함께 듣기 좋은 찬양</p>
                        <p className="font-bold text-sm text-[#2d2a26]/80 group-hover:text-[#11d452] transition-colors">주 하나님 지으신 모든 세계</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
