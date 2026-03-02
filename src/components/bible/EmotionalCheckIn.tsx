"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    CloudSun, Smile, Heart, Sparkles, Sun,
    Droplets, Cloud, Moon, Wind, Repeat,
    Waves, Zap, Snowflake, Activity, Telescope,
    BatteryLow, Flame, ShieldAlert, HelpCircle, Star,
    ChevronRight, NotebookPen
} from "lucide-react";

// 전문가 제안 기반 20가지 정밀 감정 데이터
export const emotionGroups = [
    {
        title: "기쁨과 평안",
        emotions: [
            { id: "calm", icon: CloudSun, label: "평온", color: "#10B981" },
            { id: "happy", icon: Smile, label: "기쁨", color: "#F59E0B" },
            { id: "grateful", icon: Heart, label: "감사", color: "#EC4899" },
            { id: "flutter", icon: Sparkles, label: "설렘", color: "#FACC15" },
            { id: "satisfied", icon: Sun, label: "만족", color: "#FBBF24" },
        ]
    },
    {
        title: "슬픔과 그리움",
        emotions: [
            { id: "sad", icon: Droplets, label: "슬픔", color: "#3B82F6" },
            { id: "depressed", icon: Cloud, label: "우울", color: "#64748B" },
            { id: "lonely", icon: Moon, label: "외로움", color: "#94A3B8" },
            { id: "empty", icon: Wind, label: "허무함", color: "#CBD5E1" },
            { id: "longing", icon: Repeat, label: "그리움", color: "#94A3B8" },
        ]
    },
    {
        title: "불안과 아픔",
        emotions: [
            { id: "anxious", icon: Waves, label: "불안", color: "#94A3B8" },
            { id: "nervous", icon: Zap, label: "초조", color: "#FBBF24" },
            { id: "scared", icon: Snowflake, label: "두려움", color: "#93C5FD" },
            { id: "painful", icon: Activity, label: "아픔", color: "#EF4444" },
            { id: "blind", icon: Telescope, label: "막막함", color: "#64748B" },
        ]
    },
    {
        title: "지침과 갈망",
        emotions: [
            { id: "tired", icon: BatteryLow, label: "지침", color: "#71717A" },
            { id: "angry", icon: Flame, label: "화남", color: "#EF4444" },
            { id: "guilty", icon: ShieldAlert, label: "죄책감", color: "#64748B" },
            { id: "doubt", icon: HelpCircle, label: "의심", color: "#94A3B8" },
            { id: "earnest", icon: Star, label: "간절함", color: "#F59E0B" },
        ]
    }
];

export default function EmotionalCheckIn() {
    const router = useRouter();
    const [selectedId, setSelectedId] = useState<string | null>("calm");
    const [memo, setMemo] = useState("");

    const handleStart = () => {
        if (selectedId || memo.trim()) {
            router.push(`/meditation?emotion=${selectedId || 'calm'}&memo=${encodeURIComponent(memo)}`);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4 -mt-16 relative z-20 pb-20">
            <div className="bg-[#FFFBEB]/80 backdrop-blur-xl rounded-[40px] p-6 md:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-white/40 flex flex-col gap-10 items-center">

                {/* Section Title */}
                <div className="text-center space-y-2">
                    <h2 className="font-serif text-[22px] md:text-[28px] text-[#2d2a26] font-medium">
                        오늘 당신의 마음은 어디에 머무나요?
                    </h2>
                    <p className="text-[11px] text-[#2d2a26]/40 uppercase tracking-widest font-bold">Deep Emotional Analysis</p>
                </div>

                {/* Emotion Groups */}
                <div className="w-full flex flex-col gap-6 md:gap-8">
                    {emotionGroups.map((group, groupIdx) => (
                        <div key={groupIdx} className="space-y-3">
                            <h3 className="text-[12px] font-black text-[#92400E]/60 px-2 uppercase tracking-tight flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                                {group.title}
                            </h3>
                            <div className="grid grid-cols-5 gap-3 md:gap-4 w-full">
                                {group.emotions.map((emotion) => {
                                    const Icon = emotion.icon;
                                    const isActive = selectedId === emotion.id;

                                    return (
                                        <button
                                            key={emotion.id}
                                            onClick={() => setSelectedId(emotion.id)}
                                            className={`flex flex-col items-center justify-center gap-3 p-4 md:p-6 rounded-[2rem] transition-all duration-300 border ${isActive
                                                ? 'bg-[#FDE68A]/40 border-[#FDE68A] shadow-md transform scale-105 z-10'
                                                : 'bg-white/50 border-white/20 hover:bg-white/80 hover:shadow-sm'
                                                }`}
                                        >
                                            <Icon
                                                size={32}
                                                strokeWidth={1.8}
                                                className={`${isActive ? 'text-[#92400E]' : 'text-[#2d2a26]/30'}`}
                                            />
                                            <span className={`text-[11px] md:text-[14px] font-bold tracking-tight whitespace-nowrap ${isActive ? 'text-[#92400E]' : 'text-[#2d2a26]/50'}`}>
                                                {emotion.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Textarea Area */}
                <div className="w-full relative group">
                    <textarea
                        className="w-full bg-white/50 border border-[#E5E0D8]/60 focus:border-[#FDE68A] text-base font-serif leading-relaxed h-[160px] placeholder:text-[#2d2a26]/20 p-8 rounded-[2.5rem] shadow-inner focus:shadow-sm transition-all outline-none resize-none"
                        placeholder="지금 마음의 소리를 짧게라도 적어보세요. AI가 그 마음에 귀를 기울입니다."
                        value={memo}
                        onChange={(e) => setMemo(e.target.value)}
                    />
                </div>

                {/* Action Button */}
                <button
                    onClick={handleStart}
                    className="group h-16 px-10 bg-[#5E4D44] hover:bg-[#4A3C35] text-white rounded-2xl shadow-xl transition-all flex items-center gap-3 active:scale-95"
                >
                    <span className="font-bold text-base">말씀 붙잡기</span>
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
