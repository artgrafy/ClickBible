import { GoogleGenerativeAI } from "@google/generative-ai";

export interface DailyTheme {
    weather: string;
    weatherIcon: string;
    title: string;
    highlightText: string;
    verse: string;
    verseRef: string;
    bgImage: string;
    bgColor: string;
}

export interface MeditationData {
    topic: string;
    verse: string;
    ref: string;
    meditation: string;
    praise: {
        title: string;
        artist: string;
        lyric: string;
        time: string;
        searchUrl: string; // Video ID 대신 확실한 검색 URL을 사용합니다.
    };
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

import { unstable_cache } from 'next/cache';

const getDailyThemeInternal = async (): Promise<DailyTheme> => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `기독교 묵상 앱 '말씀 한조각' 히어로 섹션 JSON 생성. 
    - { "weather", "weatherIcon", "title", "highlightText", "verse", "verseRef", "bgImage", "bgColor" }
    - 모든 필드는 반드시 비어두지 말고 한글로 채워주세요.
    - "weather": '맑음', '흐림' 같은 단조로운 단어 대신, 감성적이고 시적이며 따뜻한 한 문장으로 작성. 
      단, '아침', '오늘', '저녁', '하루'와 같은 특정 시간대나 날짜를 지칭하는 단어는 피하고, 언제 접속해도 어색하지 않은 보편적인 평안의 문구를 작성(예: '언제나 따스한 성령의 햇살', '포근한 안식이 깃든 순간', '은혜의 빗줄기가 스며드는 시간' 등).
    - "bgImage": "/images/header-bg.png" 또는 "/images/header-bg-snow.png" 중에서 상황에 따라 골라주세요. 
    - JSON만 출력.`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();
        const cleanJson = text.replace(/```json|```/g, "").trim();
        const data = JSON.parse(cleanJson);

        // 데이터 유효성 검사: 필수 필드가 비어있으면 에러를 던져서 catch 블록(기본값)으로 유도
        if (!data.title || !data.verse) throw new Error("Invalid AI response");

        return data;
    } catch (error: any) {
        return {
            weather: "언제나 따스한 햇살처럼", weatherIcon: "Sun", title: "평안한 순간,", highlightText: "당신을 위한 축복이 가득합니다.",
            verse: "평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라", verseRef: "요한복음 14:27",
            bgImage: "/images/header-bg.png", bgColor: "#F8F6F2"
        };
    }
};

export const getDailyTheme = unstable_cache(
    async () => getDailyThemeInternal(),
    ['daily-theme', new Date().toISOString().split('T')[0]], // 날짜별로 캐시 키 분리
    { revalidate: 86400, tags: ['daily-theme'] }
);

export async function getPersonalizedMeditation(emotion: string, memo: string): Promise<MeditationData> {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
    당신은 묵상 에디터입니다. 사용자의 상태에 맞춰 개인화된 묵상 데이터와 가장 어울리는 찬양을 추천하세요.
    - 감정: ${emotion}
    - 고민/생각: ${memo || "평온한 하루"}

    [JSON 형식]
    {
      "topic": "주제",
      "verse": "성경구절(개역개정)",
      "ref": "출처",
      "meditation": "사용자의 고민을 위로하는 3문단 글",
      "praise": { 
        "title": "찬양 제목", 
        "artist": "가수/팀",
        "lyric": "가장 은혜로운 가사 한 줄", 
        "time": "재생 시간",
        "searchUrl": "유튜브 검색 URL (형식: https://www.youtube.com/results?search_query=찬양제목+가수이름)"
      }
    }
    반드시 JSON만 출력하세요.
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();
        const cleanJson = text.replace(/```json|```/g, "").trim();
        const data = JSON.parse(cleanJson);
        return data as MeditationData;
    } catch (error: any) {
        const title = "주님은 산 같아서";
        const artist = "마커스 워십";
        return {
            topic: "함께하시는 하나님",
            verse: "내가 너를 지명하여 불렀나니 너는 내 것이라",
            ref: "이사야 43:1",
            meditation: `현재 AI 서비스 연결 중 일시적인 오류가 발생했습니다.`,
            praise: {
                title, artist,
                lyric: "안개 속에 주님 가려져도 주님은 산 같아서 여전하시네",
                time: "5:20",
                searchUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(title + " " + artist)}`
            }
        };
    }
}
