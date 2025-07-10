import { products } from "@/data/Products";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(products);
}
