import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { books } from "@/data/Books";
import { courses } from "@/data/Course";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(request: Request) {
  const { id, count } = await request.json();

  const authHeader = request.headers.get("authorization");
  const token = authHeader?.split(" ")[1];
  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    const userId = decoded.id;

    const cartsRef = collection(db, "carts");
    const q = query(cartsRef, where("userId", "==", userId));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const cartDoc = snapshot.docs[0];
      const cart = cartDoc.data() as Cart;

      const index = cart.productIds.findIndex((p) => p.productId === id);
      if (index !== -1) {
        cart.productIds[index].count += count;
      } else {
        cart.productIds.push({ productId: id, count });
      }

      await updateDoc(doc(db, "carts", cartDoc.id), {
        productIds: cart.productIds,
      });
    } else {
      const newCart: Cart = {
        userId,
        productIds: [{ productId: id, count }],
      };
      await addDoc(cartsRef, newCart);
    }

    return NextResponse.json(
      { message: "Add product to cart successfully!" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.split(" ")[1];
  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    const userId = decoded.id;

    const cartsRef = collection(db, "carts");
    const q = query(cartsRef, where("userId", "==", userId));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return NextResponse.json([], { status: 200 });
    }

    const cart = snapshot.docs[0].data() as Cart;

    const listProduct = cart.productIds.map((p) => {
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
    console.error(err);
    return NextResponse.json({ error: "Token expired" }, { status: 401 });
  }
}
