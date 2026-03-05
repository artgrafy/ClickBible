import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    // Vercel Cron Secret 확인 (보안을 위해 설정 가능)
    // const authHeader = request.headers.get('authorization');
    // if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    //     return new Response('Unauthorized', { status: 401 });
    // }

    try {
        console.log('Supabase Keep-alive 작업 시작...');

        // 아주 가벼운 쿼리를 날려 데이터베이스를 활성화 상태로 유지합니다.
        // 특정 테이블이 없어도 에러 자체가 Supabase와의 통신이므로 활성화에 도움이 됩니다.
        const { data, error } = await supabase
            .from('_connection_test')
            .select('*')
            .limit(1);

        if (error && error.code !== '42P01') { // 42P01은 테이블이 없는 경우이나 연결은 시도된 것
            throw error;
        }

        return NextResponse.json({ 
            success: true, 
            message: 'Supabase keep-alive signal sent successfully',
            timestamp: new Date().toISOString()
        });
    } catch (error: any) {
        console.error('Keep-alive 에러:', error.message);
        return NextResponse.json({ 
            success: false, 
            error: error.message 
        }, { status: 500 });
    }
}
