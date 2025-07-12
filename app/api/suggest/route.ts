import { NextResponse } from "next/server";

import { books } from "@/data/Books";
import { courses } from "@/data/Course";
import { topSearch } from "@/data/Topsearch";

export async function GET() {
  const data = [...books, ...courses];

  const topSearchIds = topSearch.map((item) => item.id);

  const filteredData = data.filter((item) => !topSearchIds.includes(item.id));

  const res = [...topSearch, ...filteredData].splice(0, 20);

  return NextResponse.json(res);
}
