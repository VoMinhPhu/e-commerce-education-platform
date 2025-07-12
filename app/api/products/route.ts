import { books } from "@/data/Books";
import { courses } from "@/data/Course";
import { NextResponse } from "next/server";

export async function GET() {
  const data = [...courses, ...books];
  const products = shuffleArray(data);

  return NextResponse.json(products);
}

function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
