"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";

import { useGetSuggest } from "@/utils/api/suggest";
import SuggestSkeleton from "./SuggestSkeleton";

const Suggest = () => {
  const { data, isLoading } = useGetSuggest();

  return (
    <div className="bg-primary-foreground flex justify-center pb-8">
      <div className="w-full max-w-[1200px] bg-primary-foreground text-center">
        <p className="pt-6 text-center text-2xl font-bold uppercase text-primary/60 sticky top-16 z-10 bg-white">
          Today's suggestion for you
          <span className="block mt-4 w-full h-1 bg-primary"></span>
        </p>
        {isLoading ? (
          <SuggestSkeleton />
        ) : (
          <div className="py-3 px-2 lg:px-0 grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {data?.map((item) => (
              <Link key={item.id} href={`/product/${item.id}`}>
                <Card className="rounded-sm p-0 gap-2 hover:-translate-y-1">
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
                      <span className="min-w-20">
                        {"đ " + item.price.toLocaleString("vi-VN")}
                      </span>
                      <span className="w-full flex justify-end">
                        <Button className="rounded-md cursor-pointer w-3/4">
                          Detail
                        </Button>
                      </span>
                    </CardDescription>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}
        <Link href={"/product"}>
          <Button className="min-w-96 mt-3 p-6 text-xl cursor-pointer font-thin">
            See more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Suggest;
