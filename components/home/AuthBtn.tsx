"use client";

import Link from "next/link";
import { useEffect } from "react";

import { useAuth } from "@/stores/useAuth";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { LogInIcon } from "lucide-react";

const AuthBtn = () => {
  const isLogin = useAuth((state) => state.isLogin);

  return (
    <div
      className={cn(
        "grid grid-cols-2 mt-2 gap-4 px-6 w-full",
        isLogin && "hidden"
      )}
    >
      <Link className="w-full" href={"/register"}>
        <Button className="w-full">Register</Button>
      </Link>
      <Link className="w-full" href={"/login"}>
        <Button className="w-full">
          Login
          <LogInIcon />
        </Button>
      </Link>
    </div>
  );
};

export default AuthBtn;
