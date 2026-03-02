"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Book, MessageCircle, Settings } from "lucide-react";

const NAV_ITEMS = [
    { href: "/", label: "홈", icon: Home },
    { href: "/read", label: "매일 성경", icon: Book },
    { href: "/community", label: "말씀 나눔", icon: MessageCircle },
    { href: "/settings", label: "설정", icon: Settings },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-0 pointer-events-none">
            <nav className="flex items-center justify-around w-full max-w-4xl bg-white/80 backdrop-blur-md border-t border-[#E5E0D8]/40 px-6 py-4 pointer-events-auto h-20 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-[#2d2a26]' : 'text-[#2d2a26]/30 hover:text-[#2d2a26]'}`}
                        >
                            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                            <span className={`text-[10px] font-bold tracking-tight ${isActive ? 'text-[#2d2a26]' : 'text-[#2d2a26]/40'}`}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
