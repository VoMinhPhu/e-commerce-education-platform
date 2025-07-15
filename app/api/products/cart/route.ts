import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "carts.json");

interface TokenPayload {
  id: number;
}

interface Cart {
  userId: number;
  productIds: { productId: string; count: number }[];
}

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
