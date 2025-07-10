import { NextResponse } from "next/server";

import { books } from "@/data/Books";
import { products } from "@/data/Products";
import { topSearch } from "@/data/Topsearch";

export async function GET() {
  const data = [...books, ...products];

  const topSearchIds = topSearch.map((item) => item.id);

  const filteredData = data.filter((item) => !topSearchIds.includes(item.id));

  const res = [...topSearch, ...filteredData].splice(0, 55);

  return NextResponse.json(res);
}
