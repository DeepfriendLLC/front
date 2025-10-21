// src/app/api/external/route.ts
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = `https://staging.dfbubbles.com`;
const API_KEY = `48983f72-55f2-4973-bcd1-b6d9a3d601a8`;

export async function POST(req: NextRequest) {
    const {
        jwt,
        type,
        instructions,
        level,
    } = await req.json();

    const response = await fetch(`${BASE_URL}/df/update/admin/systemMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": API_KEY,
            'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify({
            type,
            instructions,
            level,
        })
    });

    if (response.status !== 201) return NextResponse.error();

    const sm = await response.json();

    return NextResponse.json({ sm });
}
