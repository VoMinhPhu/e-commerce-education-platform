import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
const jwt = require("jsonwebtoken");

const filePath = path.join(process.cwd(), "data", "users.json");

const JWT_SECRET = process.env.JWT_SECRET || "kshdks@ss";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      { error: "Username, password is require" },
      { status: 400 }
    );
  }

  const fileData = fs.readFileSync(filePath, "utf-8");
  const users = JSON.parse(fileData);

  const user = users.find(
    (u: any) => u.username === username && u.password === password
  );
  if (!user) {
    return NextResponse.json(
      { error: "Username or password is invalid" },
      { status: 401 }
    );
  }

  const token = jwt.sign({ username: user.username }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });

  return NextResponse.json({
    message: "Login is successful !",
    token,
    user: { username: user.username },
  });
}
