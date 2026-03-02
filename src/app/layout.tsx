import type { Metadata } from "next";
import { Inter, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/layout/BottomNav";
import TopNav from "@/components/layout/TopNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "말씀 한조각 - 매일의 묵상과 평안",
  description: "당신의 마음을 보듬어주는 말씀 한조각과 묵상",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="light">
      <body
        className={`${inter.variable} ${notoSerif.variable} antialiased min-h-screen bg-[#F8F6F2] pb-24 lg:pb-0 font-sans text-[#2D2A26]`}
      >
        <div className="min-h-screen relative flex flex-col items-center">

          {/* Main Frame Container */}
          <main className="w-full max-w-4xl min-h-screen bg-white shadow-2xl border-x border-[#E5E0D8]/40 overflow-hidden relative">
            <TopNav />
            {children}

            <footer className="py-12 px-10 flex flex-col items-center gap-6 border-t border-[#E5E0D8]/40 bg-white">
              <div className="flex gap-8 text-[11px] text-[#2d2a26]/40 font-medium">
                {["개인정보 처리방침", "이용약관", "고객 지원"].map(t => <span key={t}>{t}</span>)}
              </div>
              <p className="text-[10px] text-[#2d2a26]/20 font-serif">© 2024 말씀 한조각. All rights reserved.</p>
            </footer>
          </main>

          {/* Nav stays fixed below main content on PC for cleaner look */}
          <BottomNav />

        </div>
      </body>
    </html>
  );
}
