import Header from "@/components/bible/Header";
import EmotionalCheckIn from "@/components/bible/EmotionalCheckIn";

export default function Home() {
    return (
        <div className="flex flex-col animate-in fade-in duration-1000">
            {/* 1. Hero Section (Header) */}
            <Header />

            {/* 2. Main Feed Content */}
            <div className="px-6 lg:px-12 py-12 flex flex-col gap-16 lg:gap-24 relative z-10 -mt-8">

                {/* Emotion Section - Focusing on choosing emotion first */}
                <section className="flex flex-col gap-6 mb-24 lg:mb-12">
                    <EmotionalCheckIn />
                </section>

            </div>
        </div>
    );
}
