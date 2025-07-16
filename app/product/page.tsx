"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { MenuIcon } from "lucide-react";
import Filter from "./_component/Filter";
import { Button } from "@/components/ui/button";
import ListProducts from "./_component/ListProducts";

const page = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <main className="mt-16">
      <div className="bg-primary-foreground w-full flex justify-center">
        <div className="max-w-300 w-full lg:py-6 grid grid-cols-6 gap-4">
          <div className="hidden lg:block">
            <Filter />
          </div>
          <div className="lg:hidden fixed top-18 z-20 col-span-5">
            <div className="relative px-2">
              <Button
                onClick={() => setOpenMenu(true)}
                className="rounded-full w-10 h-10"
              >
                <MenuIcon />
              </Button>
            </div>
            <div>
              <div
                className={cn(
                  "fixed z-10 hidden top-16 right-0 left-0 bottom-0",
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
                <div className="lg:block pb-10 md:pb-0 md:py-4 px-8 bg-white">
                  <Filter />
                </div>
                <div
                  onClick={() => setOpenMenu(false)}
                  className="h-full bg-black/30"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-5 mx-2 lg:mx-0">
            <ListProducts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
