"use client";

import { useUser } from "@/stores/useUser";

import {
  User,
  BellIcon,
  Edit3Icon,
  HistoryIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NavSiteUser = () => {
  const { name, username, id } = useUser();

  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <Avatar className="w-12 h-12 cursor-pointer">
          <AvatarImage src={"https://github.com/evilrabbit.png"} />
          <AvatarFallback className="uppercase font-bold">
            {username[0]}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">@{name !== "" ? name : username}</p>
          <span className="text-sm hover:text-primary text-slate-400/90 cursor-pointer flex items-center gap-2">
            <Edit3Icon size={16} />
            Update info
          </span>
        </div>
      </div>
      <Separator className="mt-3" />
      <div className="p-4">
        <p className="flex items-center gap-2 hover:text-primary text-[15px] mb-2">
          <BellIcon size={16} />
          Notification
        </p>
        <p className="flex items-center gap-2 hover:text-primary text-[15px] mb-2">
          <User size={16} />
          My account
        </p>
        <p className="flex items-center gap-2 hover:text-primary text-[15px] mb-2">
          <ShoppingCartIcon size={16} />
          Cart
        </p>
        <p className="flex items-center gap-2 hover:text-primary text-[15px] mb-2">
          <HistoryIcon size={16} />
          Purchase history
        </p>
      </div>
    </div>
  );
};

export default NavSiteUser;
