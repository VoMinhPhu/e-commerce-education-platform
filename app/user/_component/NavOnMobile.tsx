"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BellIcon,
  HistoryIcon,
  MenuIcon,
  ShoppingCartIcon,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavOnMobile = () => {
  const path = usePathname();

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="lg:hidden absolute col-span-5">
      <div className="relative px-2">
        <Button
          onClick={() => setOpenMenu(true)}
          className="rounded-full w-10 h-10"
        >
          <MenuIcon />
        </Button>
      </div>
      <div
        className={cn(
          "fixed z-10 hidden top-16 right-0 left-0 bottom-0 bg-black/30",
          openMenu && "block"
        )}
      >
        <div className="p-2 bg-white">
          <Button
            onClick={() => setOpenMenu(false)}
            className="rounded-full w-10 h-10"
          >
            <MenuIcon />
          </Button>
        </div>

        <div className="lg:block py-4 px-8 bg-white">
          <p
            onClick={() => setOpenMenu(false)}
            className="flex items-center gap-2 h-8 hover:text-primary text-[15px] mb-2"
          >
            <BellIcon size={16} />
            Notification
          </p>
          <Link
            onClick={() => setOpenMenu(false)}
            href={"/user"}
            className={cn(
              "flex items-center gap-2 h-8 hover:text-primary text-[15px] mb-2",
              path === "/user" && "text-primary font-semibold"
            )}
          >
            <User size={16} />
            My account
          </Link>
          <Link
            onClick={() => setOpenMenu(false)}
            href={"/user/cart"}
            className={cn(
              "flex items-center gap-2 h-8 hover:text-primary text-[15px] mb-2",
              path === "/user/cart" && "text-primary font-semibold"
            )}
          >
            <ShoppingCartIcon size={16} />
            Cart
          </Link>
          <p
            onClick={() => setOpenMenu(false)}
            className="flex items-center gap-2 h-8 hover:text-primary text-[15px] mb-2"
          >
            <HistoryIcon size={16} />
            Purchase history
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavOnMobile;
