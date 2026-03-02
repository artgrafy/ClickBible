"use client";

import { Music, Play, ExternalLink } from "lucide-react";

interface PraiseCardProps {
    praise: {
        title: string;
        artist: string;
        lyric: string;
        time: string;
        searchUrl: string; // Video ID 대신 확실한 검색 URL을 사용합니다.
    };
}

export default function PraisePlayer({ praise }: PraiseCardProps) {
    return (
        <section className="flex flex-col gap-5">
            <div className="flex items-center justify-between px-2">
                <h3 className="font-serif font-bold text-[#2d2a26] flex items-center gap-2">
                    <Music size={18} className="text-[#92400E]" />
                    추천 찬양
                </h3>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#E5E0D8]/40 flex flex-col gap-5 hover:shadow-md transition-all active:scale-[0.99]">
                <div className="flex items-center gap-5">
                    {/* 곡 정보 영역 */}
                    <div className="flex-1 flex flex-col gap-2 overflow-hidden">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-bold text-[#F59E0B] uppercase tracking-widest leading-relaxed">
                                {praise.artist} — Today's Worship
                            </span>
                            <h4 className="font-serif font-bold text-[#2d2a26] text-xl leading-tight truncate">
                                {praise.title}
                            </h4>
                        </div>
                        <p className="text-[12px] text-[#2d2a26]/50 line-clamp-2 leading-relaxed italic border-l-2 border-[#FDE68A] pl-3 py-1">
                            "{praise.lyric}"
                        </p>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E5E0D8]/20">
                            <a
                                href={praise.searchUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 bg-[#5E4D44] text-white rounded-xl text-[11px] font-bold hover:bg-[#4A3C35] transition-all shadow-lg active:scale-95 group"
                            >
                                <Play size={12} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                                유튜브에서 지금 듣기
                                <ExternalLink size={10} className="opacity-40" />
                            </a>
                            <span className="text-[10px] font-mono text-[#2d2a26]/40">{praise.time}</span>
                        </div>
                    </div>
                </div>

                <p className="text-[9px] text-[#2d2a26]/30 text-center leading-relaxed">
                    유튜브로 이동하여 선택하신 찬양의 공식 영상을 감상하세요.
                </p>
            </div>
        </section>
    );
}
