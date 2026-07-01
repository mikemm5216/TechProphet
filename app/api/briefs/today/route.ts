import { NextResponse } from "next/server";
import { todayBrief } from "../../../../lib/briefs";

export async function GET() {
  return NextResponse.json(todayBrief, {
    headers: {
      "Cache-Control": "s-maxage=300, stale-while-revalidate=3600"
    }
  });
}
