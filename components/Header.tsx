"use client";

import Link from "next/link";
import { useState } from "react";

import {
  LogInIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <div className="shadow h-16 w-full fixed top-0 flex justify-center">
      <div className="max-w-[1200px] w-full h-16 flex justify-between">
        <div className="w-32 h-full flex items-center justify-center text-primary">
          <Link href="/">LOGO</Link>
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
        <div className="md:hidden flex items-center justify-end flex-1 mr-6 h-full">
          <Button onClick={() => setOpenMenu(!openMenu)}>
            <MenuIcon />
          </Button>
          <div
            className={cn(
              `absolute top-full right-0 left-0 py-4 flex-col border bg-white shadow`,
              openMenu ? "flex" : "hidden"
            )}
          >
            <div className="w-full flex items-center justify-between px-4">
              <div className="w-3/4 h-3/5 relative">
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
            <div className="flex items-center justify-center mt-2 gap-4 px-6 w-full">
              <Button className="cursor-pointer h-3/5 w-1/2">Register</Button>
              <Button className="cursor-pointer h-3/5 w-1/2">
                Login
                <LogInIcon />
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 mr-2 lg:mr-0">
          <Button className="cursor-pointer h-3/5">Register</Button>
          <Button className="cursor-pointer h-3/5">
            Login
            <LogInIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
