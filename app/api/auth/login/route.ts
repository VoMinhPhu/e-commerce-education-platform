import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json<ErrorResponse>(
      { error: "Username and password are required." },
      { status: 400 }
    );
  }

  try {
    const usersRef = collection(db, "users");
    const q = query(
      usersRef,
      where("username", "==", username),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return NextResponse.json<ErrorResponse>(
        { error: "Username or password is invalid" },
        { status: 401 }
      );
    }

    const user = querySnapshot.docs[0].data();

    const payload: TokenPayload = {
      id: user.id,
      username: user.username,
      name: user.name || "",
      phone: user.phone || "",
      gender: user.gender || "",
      address: user.address || "",
      dateOfBirth: user.dateOfBirth || "",
      admin: user.admin || false,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    const response: LoginResponse = {
      message: "Login is successful!",
      token,
      user: {
        username: payload.username,
        name: payload.name,
        phone: payload.phone,
        gender: payload.gender,
        address: payload.address,
        dateOfBirth: payload.dateOfBirth,
        admin: payload.admin,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.json<ErrorResponse>(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
