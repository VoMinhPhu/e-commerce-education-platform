"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";

import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddToCartBtn from "./_component/AddToCartBtn";
import CountProduct from "./_component/CountProduct";
import NotFoundPage from "./_component/NotFoundPage";

import { useGetDetailProduct } from "@/utils/api/products";

const Page = () => {
  const [count, setCount] = useState<number>(1);
  const params = useParams<{ id: string }>();
  const { data } = useGetDetailProduct(params.id);

  if (!data) return <NotFoundPage />;

  return (
    <div className="mt-16 flex justify-center">
      <div className="max-w-300 mb-8 w-full grid grid-cols-5 gap-x-4">
        <div className="col-span-5 mt-2">
          <Link
            href={"/product"}
            className="underline text-primary flex items-center h-10 text-[18px]"
          >
            <ArrowLeftIcon size={18} className="mr-2" />
            Product
          </Link>
        </div>
        <div className="w-full h-100 relative p-2 col-span-5 md:col-span-2">
          <Image
            src={data.image}
            alt={data.name}
            width={400}
            height={400}
            priority
            className="w-full h-full rounded-lg object-contain"
          />
          <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-emerald-100/90 rounded-sm"></div>
        </div>
        <div className="col-span-5 md:col-span-3">
          <p className="font-medium text-2xl min-h-12 text-primary">
            {data.name}
          </p>
          <p className="p-4 pt-1 text-black/70 text-justify">{data.desc}</p>
          <p className="h-14 mt-2 py-2 bg-primary-foreground/75 rounded-sm flex items-center text-red-500/90 font-medium px-8 text-xl">
            <span className="mr-1 text-sm h-full align-text-top pt-1 underline">
              đ
            </span>

            {(data.price * count).toLocaleString("vi-VN")}
          </p>
          <CountProduct
            count={count}
            setCount={setCount}
            category={data.category}
          />
          <div className="mt-4 grid grid-cols-2 gap-4 px-4 md:px-0">
            <AddToCartBtn productId={params.id} count={count} />
            <Button className="w-full cursor-pointer rounded-sm" size={"lg"}>
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
