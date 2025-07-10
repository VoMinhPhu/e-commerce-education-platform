"use client";

import Image from "next/image";
import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import { Carousel, CarouselItem, CarouselContent } from "./ui/carousel";

const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <div className="flex justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1200px] w-full">
        <div className="md:col-span-2">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            className="h-full"
          >
            <CarouselContent className="h-full">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="flex items-center justify-center w-full h-full md:pl-4.5"
                >
                  <Image
                    src={`/banner/banner${index + 1}.png`}
                    alt={`banner ${index + 1}`}
                    width={450}
                    height={200}
                    objectFit="cover"
                    className="w-full h-full md:h-110 rounded-[3px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="gap-3 hidden md:grid grid-cols-1 items-center h-110">
          <div className="flex">
            <Image
              src="/banner/banner1.png"
              alt="banner 1"
              width={420}
              height={200}
              className="rounded-[3px] h-52.75"
            />
          </div>
          <div className="flex">
            <Image
              src="/banner/banner3.png"
              alt="banner 3"
              width={420}
              height={200}
              className="rounded-[3px] h-52.75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
