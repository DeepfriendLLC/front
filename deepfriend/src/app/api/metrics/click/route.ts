// src/app/api/external/route.ts
import { NextRequest, NextResponse } from 'next/server';

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
        type,
        color,
        language,
    } = await req.json();

    const externalResponse = await fetch("https://api.dfbubbles.com/metrics/789cfa081959/create/session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ip,
            sessionId,
            route,
            section,
            type,
            //click,
            color,
            language,
            userAgent,
        })
    });

    console.log("HERE SERVER", ip, userAgent);

    const data = await externalResponse.json();
    return NextResponse.json({ ip });
}

/*

      "Authorization": `Bearer ${process.env.EXTERNAL_API_SECRET}` // Seguro
      */