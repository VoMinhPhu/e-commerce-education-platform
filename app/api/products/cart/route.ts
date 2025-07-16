import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";
import { books } from "@/data/Books";
import { courses } from "@/data/Course";

const filePath = path.join(process.cwd(), "data", "carts.json");

export async function POST(request: Request) {
  const { id, count } = await request.json();

  const authHeader = request.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;

    const fileData = fs.readFileSync(filePath, "utf-8");
    const carts: Cart[] = fileData ? JSON.parse(fileData) : [];

    const userCart = carts.find((c) => c.userId === decoded.id);

    if (userCart) {
      const index = userCart.productIds.findIndex((c) => c.productId === id);
      if (index !== -1) {
        userCart.productIds[index].count += count;
      } else {
        userCart.productIds.push({ productId: id, count });
      }
    } else {
      carts.push({
        userId: decoded.id,
        productIds: [{ productId: id, count }],
      });
    }
    fs.writeFileSync(filePath, JSON.stringify(carts, null, 2), "utf-8");

    return NextResponse.json(
      { message: "Add product to cart successfully!" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // decoded to get userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as TokenPayload;

    const fileData = fs.readFileSync(filePath, "utf-8");
    const carts: Cart[] = fileData ? JSON.parse(fileData) : [];

    const resData = carts.find((c) => c.userId === decoded.id);

    if (!resData) {
      return NextResponse.json({ data: [] }, { status: 200 });
    }

    const listProduct = resData.productIds.map((p) => {
      const book = books.find((b) => b.id === p.productId);
      const course = courses.find((c) => c.id === p.productId);
      const product = book || course;

      return {
        ...product,
        count: p.count,
      };
    });

    return NextResponse.json(listProduct, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Token expired" }, { status: 401 });
  }
}
