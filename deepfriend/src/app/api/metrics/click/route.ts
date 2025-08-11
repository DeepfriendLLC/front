// src/app/api/external/route.ts
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = `https://api.dfbubbles.com`;
const API_KEY = `7bc1bf04-56f3-4321-a867-ce90e2873961`;

export async function POST(req: NextRequest) {
    const ip =
        req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
        req.headers.get('x-real-ip') ||
        'IP desconocida';
    const userAgent = req.headers.get('user-agent');

    const {
        sessionId,
        route,
        section,
        clickType,
        color,
        language,
    } = await req.json();

    const response = await fetch(`${BASE_URL}/metrics/789cfa081959/create/session`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": API_KEY,
        },
        body: JSON.stringify({
            ip,
            sessionId,
            route,
            section,
            type: "click",
            click: clickType,
            color,
            language,
            userAgent,
        })
    });

    if (response.status === 201) return NextResponse.json({ success: true });
    else return NextResponse.json({ success: false });
}
