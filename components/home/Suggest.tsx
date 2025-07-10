"use client";

import Image from "next/image";

import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";

import { useGetSuggest } from "@/utils/suggest";
import { Button } from "../ui/button";
import Link from "next/link";

const Suggest = () => {
  const { data, isLoading } = useGetSuggest();

  return (
    <div className="bg-primary-foreground flex justify-center pb-8">
      <div className="w-full max-w-[1200px] bg-primary-foreground text-center">
        <p className="pt-6 text-center text-2xl font-bold uppercase text-primary/60 sticky top-16 bg-white">
          Today's suggestion for you
          <span className="block mt-4 w-full h-1 bg-primary"></span>
        </p>
        <div className="py-3 grid grid-cols-5 gap-4">
          {isLoading ? (
            <div>isloading</div>
          ) : (
            data?.map((item) => (
              <Card key={item.id} className="rounded-sm p-0 gap-2">
                <CardContent className="p-0">
                  <Image
                    src={item.image}
                    alt={item.desc}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-sm"
                  />
                </CardContent>
                <CardFooter className="flex-col px-2 pb-4">
                  <p className="line-clamp-2 w-full h-12">{item.name}</p>
                  <CardDescription className="flex items-center justify-between pt-2 w-full px-2">
                    <span>{"đ " + item.price.toLocaleString("vi-VN")}</span>
                    <Link href={`/product/${item.id}`}>
                      <Button className="rounded-md cursor-pointer">
                        Detail
                      </Button>
                    </Link>
                  </CardDescription>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
        <Button className="min-w-96 mt-3 p-6 text-xl font-thin">
          See more
        </Button>
      </div>
    </div>
  );
};

export default Suggest;
