// src/app/api/external/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { API_KEY, BASE_URL } from '../utils';

export async function POST(req: NextRequest) {
    const {
        email,
        password,
    } = await req.json();

    const response = await fetch(`${BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": API_KEY,
        },
        body: JSON.stringify({
            email,
            password,
        })
    });

    if (response.status !== 201) return NextResponse.error();

    const jwt = await response.text();

    return NextResponse.json({ jwt });
}
