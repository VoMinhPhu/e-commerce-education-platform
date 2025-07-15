"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Carousel,
  CarouselNext,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent, CardHeader } from "../ui/card";
import TopsearchSkeleton from "../skeleton/TopsearchSkeleton";

import { ChevronRightIcon } from "lucide-react";

import { useGetTopSearch } from "@/utils/api/products";

const TopSearch = () => {
  const { data } = useGetTopSearch();

  return (
    <div className="flex items-center justify-center pt-0 md:py-8 w-full bg-primary-foreground">
      <div className="max-w-[1200px] border rounded-md w-full bg-white">
        <p className="font-medium text-3xl flex items-center justify-between text-primary/60 mt-2 ml-2">
          <span>TOP SEARCH</span>
          <Link
            href={"/product"}
            className="text-primary text-sm mr-5 flex items-center hover:underline cursor-pointer"
          >
            All products
            <ChevronRightIcon size={20} />
          </Link>
        </p>
        <div>
          <div className="px-16 md:py-6 lg:py-12">
            {!data ? (
              <TopsearchSkeleton />
            ) : (
              <Carousel
                opts={{
                  loop: true,
                }}
                className="w-full max-w-[1200px]"
              >
                <CarouselContent className="-ml-1">
                  {data.map((item) => (
                    <CarouselItem
                      key={item.id}
                      className="pl-1 md:basis-1/3 lg:basis-1/5"
                    >
                      <Link href={`/product/${item.id}`}>
                        <div className="p-1">
                          <Card className="p-0 pb-8 gap-3 rounded-sm">
                            <CardHeader className="p-0 relative flex items-center justify-center">
                              <Image
                                src={item.image}
                                width={300}
                                height={300}
                                alt="Product image"
                                className="h-50 rounded-sm"
                              />
                              <div className="absolute -top-0.5 -right-0.5 w-24 h-16 flex justify-end overflow-hidden">
                                <span className="absolute top-0 -right-7 font-bold flex items-center justify-center w-24 h-9 rotate-45 bg-linear-to-b from-red-500 to-red-300 text-white">
                                  TOP
                                </span>
                              </div>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center h-12">
                              <span className="text-[18px] line-clamp-2">
                                {item.name}
                              </span>
                            </CardContent>
                          </Card>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSearch;
