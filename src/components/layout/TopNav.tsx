"use client";

import Link from "next/link";
import { Bell, User, BookOpen } from "lucide-react";

export default function TopNav() {
    return (
        <nav className="w-full max-w-4xl flex items-center justify-between px-6 py-4 bg-white/50 backdrop-blur-sm border-b border-[#E5E0D8]/40 sticky top-0 z-50">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-[#5E4D44] rounded-lg flex items-center justify-center text-white group-hover:bg-[#4A3C35] transition-colors">
                    <BookOpen size={18} />
                </div>
                <span className="font-serif font-bold text-[#2d2a26] text-lg">말씀 한조각</span>
            </Link>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-8">
                {[
                    { label: "홈", href: "/" },
                    { label: "매일 성경", href: "/read" },
                    { label: "말씀 나눔", href: "/community" },
                    { label: "설정", href: "/settings" }
                ].map((item) => (
                    <Link key={item.label} href={item.href} className="text-sm font-bold text-[#2d2a26]/60 hover:text-[#2D2A26] transition-colors tracking-tight">
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <button className="p-2 text-[#2d2a26]/40 hover:text-[#2d2a26] transition-colors">
                    <Bell size={20} />
                </button>
                <div className="w-8 h-8 rounded-full bg-[#E5E0D8] overflow-hidden border border-[#E5E0D8]">
                    <div className="w-full h-full bg-[#D1C9BC] flex items-center justify-center text-[#2d2a26]/40">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </nav>
    );
}
