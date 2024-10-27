import { NextResponse } from 'next/server';
import { CatsData } from "@/app/api/cats/data";

export async function GET(request) {
    return NextResponse.json(CatsData);
}
