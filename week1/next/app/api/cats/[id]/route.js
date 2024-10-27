import { NextResponse } from "next/server";
import { CatsData } from "@/app/api/cats/data";

export async function GET(request, { params }) {
    const catId = (await params).id;
    const cat = CatsData.find(cat => cat.id.toString() === catId);

    if (!cat) {
        return NextResponse.json({
            error: "Cat not found"
        });
    }

    return NextResponse.json(cat);
}
