import { Sun, CloudSnow, Wind, CloudRain, CloudSun } from "lucide-react";
import { getDailyTheme } from "@/lib/bible/daily-theme";
import DynamicBgImage from "@/components/bible/DynamicBgImage";

const ICON_MAP: Record<string, any> = {
    Sun, CloudSnow, Wind, CloudRain, CloudSun, Snow: CloudSnow
};

export default async function Header() {
    const theme = await getDailyTheme();
    const WeatherIcon = ICON_MAP[theme.weatherIcon] || Sun;

    return (
        <header className="relative w-full h-[450px] md:h-[550px] flex flex-col items-center justify-center overflow-hidden px-6 text-center text-[#2D2A26]">
            {/* Background with dynamic image and overlay */}
            <div className="absolute inset-0 z-0 bg-[#F8F6F2]">
                <DynamicBgImage
                    src={theme.bgImage}
                    fallbackSrc='/images/header-bg.png'
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F6F2]/40 to-[#F8F6F2]" />
            </div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col items-center gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">

                {/* Dynamic Weather/Context Badge */}
                <div className="flex items-center gap-2 px-4 py-1.5 bg-[#FFF9E5]/60 backdrop-blur-sm border border-[#FDE68A] rounded-full shadow-sm">
                    <WeatherIcon size={14} className="text-[#F59E0B]" />
                    <span className="text-[10px] md:text-xs font-bold text-[#92400E] tracking-tight">{theme.weather}</span>
                </div>

                {/* Main Dynamic Title */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-[28px] md:text-[42px] lg:text-[52px] font-serif font-medium leading-[1.2] tracking-tight break-keep">
                        {theme.title} <br />
                        <span className="text-[#9C714D]">{theme.highlightText}</span>
                    </h1>

                    {/* Dynamic Verse Snippet */}
                    <p className="font-serif italic text-sm md:text-base text-[#2d2a26]/60 max-w-[28ch] md:max-w-[40ch] mx-auto leading-relaxed mt-2 break-keep">
                        "{theme.verse}" <br className="hidden md:block" />
                        <span className="not-italic opacity-80 mt-1 inline-block">— {theme.verseRef}</span>
                    </p>
                </div>
            </div>
        </header>
    );
}
