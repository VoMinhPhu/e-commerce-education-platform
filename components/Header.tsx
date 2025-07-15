"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { useAuth } from "@/stores/useAuth";

import {
  MenuIcon,
  LogInIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

import UserMenu from "./UserMenu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const isLogin = useAuth((state) => state.isLogin);

  return (
    <div className="shadow h-16 w-full fixed top-0 flex justify-center bg-white z-50">
      <div className="max-w-[1200px] w-full h-16 flex justify-between px-1 lg:px-0">
        <div className="w-50 h-full flex items-center justify-center text-primary">
          <Link href="/">
            <Image
              src={"/logo-lg.svg"}
              width={300}
              height={100}
              alt="Logo"
              className="h-auto w-full"
            />
          </Link>
        </div>
        {/* Tablet and destop */}
        <div className="hidden md:flex items-center mx-12 flex-1 justify-end">
          <div className="w-3/4 h-3/5 relative">
            <Input placeholder="Search" className="h-full" />
            <SearchIcon
              className="absolute right-2 top-2 cursor-pointer text-primary"
              size={20}
            />
          </div>
          <Button variant="outline" className="h-3/5 ml-4">
            <ShoppingCartIcon className="text-primary" />
          </Button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-end flex-1 mr-4 h-full">
          <Button onClick={() => setOpenMenu(!openMenu)}>
            <MenuIcon />
          </Button>
          <div
            className={cn(
              `absolute top-full right-0 left-0 py-4 flex-col border bg-white shadow`,
              openMenu ? "flex" : "hidden"
            )}
          >
            <div className="w-full flex items-center justify-between px-6">
              <div className="flex-1 h-3/5 relative">
                <Input placeholder="Search" className="h-full" />
                <SearchIcon
                  className="absolute right-2 top-1.5 cursor-pointer text-primary"
                  size={20}
                />
              </div>
              <Button variant="outline" className="h-3/5 ml-4">
                <ShoppingCartIcon className="text-primary" />
              </Button>
            </div>
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
          </div>
        </div>
        <UserMenu />
      </div>
    </div>
  );
};

export default Header;
