import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      { error: "Username, password is require" },
      { status: 400 }
    );
  }

  const fileData = fs.readFileSync(filePath, "utf-8");
  const users: User[] = JSON.parse(fileData);

  const isExist = users.find((u) => u.username === username);
  if (isExist) {
    return NextResponse.json({ error: "Username is already" }, { status: 409 });
  }

  const idNewUser = Math.max(0, ...users.map((u) => u.id ?? 0)) + 1;

  const newUser: User = { id: idNewUser, username, password };
  users.push(newUser);

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");

  return NextResponse.json({
    message: "Register is successful !",
  });
}
