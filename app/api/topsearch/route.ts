import { products } from "@/data/Products";
import { topSearch } from "@/data/Topsearch";
import { NextResponse } from "next/server";

export async function GET() {
  const data = [...topSearch, ...products];

  // Delay 2s
  await delay(2000);
  return NextResponse.json(data);
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
