import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export async function POST(req: NextRequest) {
  const {
    username,
    password,
    name,
    phone,
    gender,
    address,
    dateOfBirth,
    admin = false,
  } = await req.json();

  if (!username || !password) {
    return NextResponse.json(
      { error: "Username and password are required." },
      { status: 400 }
    );
  }

  try {
    const usersRef = collection(db, "users");

    // Kiểm tra trùng username
    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return NextResponse.json(
        { error: "Username is already taken." },
        { status: 409 }
      );
    }

    // Tự tính id tăng dần
    const allUsersSnap = await getDocs(usersRef);
    const ids = allUsersSnap.docs.map((doc) => (doc.data().id as number) ?? 0);
    const nextId = ids.length ? Math.max(...ids) + 1 : 1;

    // Tạo user mới (loại bỏ các field undefined)
    const newUser: User = {
      id: nextId,
      username,
      password,
      ...(name && { name }),
      ...(phone && { phone }),
      ...(gender && { gender }),
      ...(address && { address }),
      ...(dateOfBirth && { dateOfBirth }),
      admin,
    };

    await addDoc(usersRef, newUser);

    return NextResponse.json({ message: "Register successful!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
