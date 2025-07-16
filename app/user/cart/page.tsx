"use client";

import Image from "next/image";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import NoProductInCart from "./_component/NoProductInCart";
import { CreditCardIcon, MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";

import { useGetCart } from "@/utils/api/cart";
import LoadingCart from "./_component/LoadingCart";
const page = () => {
  const { data, isLoading } = useGetCart();

  return (
    <div className="col-span-5 mt-12 lg:mt-0 lg:col-span-4 mx-2 lg:mx-0">
      <div className="bg-white h-19 grid grid-cols-5 px-8">
        <div className="col-span-2 rounded-sm flex items-center">Products</div>
        <div className="hidden md:flex items-center justify-center">Count</div>
        <div className="hidden md:flex items-center justify-center">Price</div>
        <div className="hidden md:flex items-center justify-center">Action</div>
      </div>
      <div className="bg-white rounded-sm">
        <div className="border-y rounded-b-sm">
          {isLoading ? (
            <LoadingCart />
          ) : data && data.length > 0 ? (
            data.map((p) => (
              <div
                key={p.id}
                className="m-2 md:m-4 p-4 border rounded-md grid grid-cols-5 gap-y-2"
              >
                <Label className="col-span-5 md:col-span-2 cursor-pointer">
                  <Checkbox className="mr-1" />
                  <div className="h-40">
                    <Image
                      src={p.image}
                      alt=""
                      width={500}
                      height={100}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <p>{p.name}</p>
                </Label>
                <div className="flex items-center justify-between col-span-3 md:col-span-1">
                  <span className="border py-2 px-5 rounded-sm cursor-pointer hover:bg-primary-foreground">
                    <MinusIcon className="" size={14} />
                  </span>
                  <span className="text-sm">{p.count}</span>
                  <span className="border py-2 px-5 rounded-sm cursor-pointer hover:bg-primary-foreground">
                    <PlusIcon className="" size={14} />
                  </span>
                </div>
                <p className="flex items-center justify-center col-span-2 md:col-span-1 text-red-400 font-semibold">
                  {p.price.toLocaleString("vi-VN")}
                </p>
                <p className="flex md:flex-col md:justify-center justify-between items-center col-span-5 md:col-span-1">
                  <Button
                    className="max-w-30 w-full cursor-pointer my-1 justify-start"
                    variant={"destructive"}
                  >
                    <Trash2Icon />
                    <p>Delete</p>
                  </Button>
                  <Button className="max-w-30 w-full cursor-pointer my-1 justify-start">
                    <CreditCardIcon />
                    <p>Buy</p>
                  </Button>
                </p>
              </div>
            ))
          ) : (
            <NoProductInCart />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
