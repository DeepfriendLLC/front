// src/app/api/external/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      req.headers.get('x-real-ip') ||
      'IP desconocida';

    const externalResponse = await fetch("https://api.dfbubbles.com/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    console.log("HERE SERVER", ip, externalResponse.status);

    const data = await externalResponse.json();
    return NextResponse.json({ ip });
}

/*

      "Authorization": `Bearer ${process.env.EXTERNAL_API_SECRET}` // Seguro
      */