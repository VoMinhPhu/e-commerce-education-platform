import { NextRequest } from "next/server";

import { books } from "@/data/Books";
import { courses } from "@/data/Course";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/").pop();

  const book = books.find((b) => b.id === id);
  const course = courses.find((c) => c.id === id);

  const result = book || course;

  if (!result) {
    return new Response(JSON.stringify({ error: "Không tìm thấy sản phẩm" }), {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return Response.json(result);
}
