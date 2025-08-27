// src/app/api/external/route.ts
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = `https://staging.dfbubbles.com`;
const API_KEY = `48983f72-55f2-4973-bcd1-b6d9a3d601a8`;

export async function POST(req: NextRequest) {
    const {
        jwt,
        therapyType,
        tecniques,
    } = await req.json();

    const response = await fetch(`${BASE_URL}/df/update/admin/recommendedTecniques`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": API_KEY,
            'Authorization': `Bearer ${jwt}`,
        },
        body: JSON.stringify({
            therapyType,
            tecniques,
        })
    });

    if (response.status !== 201) return NextResponse.error();

    const rt = await response.json();

    return NextResponse.json({ rt });
}
