import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { id } = await request.json();
  console.log("req", id);
  return NextResponse.json(
    { data: "123" },
    {
      status: 201,
    }
  );
}
