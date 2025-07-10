import { NextResponse } from "next/server";
import { topSearch } from "@/data/Topsearch";

export async function GET() {
  // Delay 2s
  await delay(2000);
  return NextResponse.json(topSearch);
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
