"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselApi,
} from "./ui/carousel";

const Banner = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!api) return;

    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [api]);
  return (
    <div className="flex justify-center p-8">
      <div className="grid grid-cols-3 max-w-[1200px] w-full">
        <div className="col-span-2">
          <Carousel
            opts={{
              loop: true,
            }}
            setApi={setApi}
          >
            <CarouselContent className="w-full h-110">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="pl-4.5">
                  <Image
                    src={`/banner/banner${index + 1}.png`}
                    alt={`banner ${index + 1}`}
                    width={450}
                    height={200}
                    objectFit="fill"
                    className="w-full h-110 rounded-[3px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="gap-3 grid grid-cols-1 items-center">
          <Image
            src="/banner/banner1.png"
            alt="banner 1"
            width={450}
            height={200}
            className="object-cover h-52 rounded-[3px]"
          />
          <Image
            src="/banner/banner3.png"
            alt="banner 3"
            width={450}
            height={200}
            className="object-cover h-52 rounded-[3px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
