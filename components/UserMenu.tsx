import Link from "next/link";
import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "@/stores/useAuth";
import { useUser } from "@/stores/useUser";

import { cn } from "@/lib/utils";
import { LogInIcon, LogOutIcon, SettingsIcon, UserPenIcon } from "lucide-react";

import { Separator } from "./ui/separator";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLogout } from "@/utils/api/auth";

const UserMenu = () => {
  const [user, setUser] = useState<TokenPayload | null>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const isLogin = useAuth((state) => state.isLogin);
  const handleLogout = useLogout();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const decoded = jwtDecode<TokenPayload>(token);
        useUser.getState().setUserData(decoded);
        useAuth.getState().setIsLogin(true);
        setUser(decoded);
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [isLogin]);

  return (
    <div className="flex items-center h-full">
      {user ? (
        <div className="flex items-center relative">
          <Avatar
            onClick={() => setOpenMenu(!openMenu)}
            className="w-10 h-10 cursor-pointer"
          >
            <AvatarImage src={"https://github.com/evilrabbit.png"} />
            <AvatarFallback className="uppercase font-bold">
              {user.username[0]}
            </AvatarFallback>
          </Avatar>
          <div
            className={cn(
              "fixed z-10 top-16 right-0 left-0 h-full flex justify-end items-start",
              openMenu && "hidden"
            )}
          >
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className="w-full h-full bg-slate-400/30"
            ></div>
            <div className="absolute rounded-sm bg-white max-w-100 min-w-50 shadow-sm py-4">
              <p className="font-semibold text-primary border-b px-4 pb-2 mb-1">
                @{user.username}
              </p>
              <div className="grid grid-cols-1 gap-1">
                <Link
                  onClick={() => setOpenMenu(!openMenu)}
                  href={"/user"}
                  className="py-2 pl-7 hover:bg-primary-foreground hover:text-primary flex items-center gap-2 opacity-75"
                >
                  <UserPenIcon size={20} />
                  Profile
                </Link>
                <Link
                  onClick={() => setOpenMenu(!openMenu)}
                  href={"/#"}
                  className="py-2 pl-7 hover:bg-primary-foreground hover:text-primary flex items-center gap-2 opacity-75"
                >
                  <SettingsIcon size={20} />
                  Setting
                </Link>
                <Separator className="mb-2" />
                <Button
                  onClick={() => {
                    setOpenMenu(!openMenu);
                    handleLogout();
                  }}
                  variant={"ghost"}
                  size={"lg"}
                  className="justify-start cursor-pointer text-base hover:bg-primary-foreground hover:text-primary flex items-center gap-2 opacity-75"
                >
                  <LogOutIcon size={20} />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex items-center gap-4 mr-2 lg:mr-0">
          <Link href={"/register"}>
            <Button className="cursor-pointer h-3/5">Register</Button>
          </Link>
          <Link href={"/login"}>
            <Button className="cursor-pointer h-3/5">
              Login
              <LogInIcon />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
