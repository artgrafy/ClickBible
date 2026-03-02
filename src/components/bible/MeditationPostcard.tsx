"use client";

import Image from "next/image";
import { Heart, Quote } from "lucide-react";

interface MeditationPostcardProps {
    verse: string;
    refText: string;
}

export default function MeditationPostcard({ verse, refText }: MeditationPostcardProps) {
    return (
        <section className="relative mt-4">
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#E1DCD3] rounded-md z-20 shadow-sm border border-white/50">
                <span className="text-[9px] font-bold text-[#2d2a26]/60 uppercase tracking-widest">Today's Card</span>
            </div>

            <div className="bg-white rounded-[2.5rem] p-4 pb-8 shadow-xl border border-[#E5E0D8]/60 flex flex-col items-center gap-6 relative group overflow-hidden">
                {/* Image Container with Text Overlay */}
                <div className="w-full aspect-[4/5] relative rounded-[2rem] overflow-hidden border border-[#E5E0D8]/20 shadow-inner">
                    {/* Background Fallback */}
                    <div className="absolute inset-0 bg-[#F4F1EA]" />

                    {/* Background Image */}
                    <Image
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
                        alt="Meditative Background"
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 640px"
                    />

                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-white/10" />

                    {/* Floating Motif */}
                    <div className="absolute top-4 right-4 opacity-10 text-[#2D2A26]">
                        <Heart size={16} />
                    </div>

                    {/* Verse Overlay Content with High Readability */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="bg-white/85 backdrop-blur-xl border border-white/60 p-8 rounded-[2rem] shadow-2xl flex flex-col items-center text-center max-w-[90%] transform transition-all group-hover:scale-[1.02] duration-500">
                            <div className="mb-4 opacity-20 text-[#2D2A26]">
                                <Quote size={28} fill="currentColor" />
                            </div>

                            <p className="font-serif text-[15px] md:text-[18px] leading-relaxed font-bold text-[#2D2A26] break-keep">
                                "{verse}"
                            </p>

                            <div className="mt-6 flex flex-col items-center gap-2 w-full">
                                <div className="w-10 h-[1.5px] bg-[#2D2A26]/10" />
                                <p className="text-[10px] font-black text-[#8B5E3C] uppercase tracking-[0.4em]">
                                    {refText}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="absolute bottom-4 left-6 py-1 px-3 bg-white/20 backdrop-blur-md rounded-full border border-white/20">
                        <span className="text-[9px] text-[#2D2A26]/60 font-serif italic">Created for you</span>
                    </div>
                </div>

                {/* Interaction Button */}
                <div className="absolute bottom-12 right-10 z-30">
                    <button className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-[#E5E0D8]/40 flex items-center justify-center text-[#EF4444] hover:scale-110 transition-all hover:bg-white active:scale-95 group/btn">
                        <Heart size={24} className="group-hover/btn:fill-[#EF4444] transition-colors" />
                    </button>
                </div>

                {/* Bottom Caption */}
                <div className="px-6 text-center">
                    <p className="text-[11px] text-[#2d2a26]/40 font-serif italic">
                        그의 말씀은 내 발의 등이요 내 길의 빛이니이다
                    </p>
                </div>
            </div>
        </section>
    );
}
