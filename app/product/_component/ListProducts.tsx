"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

import { useGetProducts } from "@/utils/api/products";

import ListProductsMenu from "./ListProductsMenu";
import ListProductsSkeleton from "./ListProductsSkeleton";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import PaginationControl from "./PaginationControl";

const ListProducts = () => {
  const [page, setPage] = useState<number>(1);
  const [arrange, setArrange] = useState<string | null>(null); //A: Ascending, D : Descending

  const { data, isLoading } = useGetProducts();

  const itemShow = 15; // Số lượng item mỗi trang

  const currentPageData = useMemo(() => {
    if (!data) return [];

    let sortedData = [...data];

    if (arrange === "Ascending") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (arrange === "Descending") {
      sortedData.sort((a, b) => b.price - a.price);
    }

    const startIndex = (page - 1) * itemShow;
    const endIndex = startIndex + itemShow;

    return sortedData.slice(startIndex, endIndex);
  }, [data, arrange, page]);

  const totalPage = data ? Math.ceil(data.length / itemShow) : 0;

  if (isLoading || !data) return <ListProductsSkeleton />;
  return (
    <>
      <ListProductsMenu
        page={page}
        setPage={setPage}
        totalPage={totalPage}
        arrange={arrange}
        setArrange={setArrange}
      />
      <div className="mt-4 grid grid-cols-5 gap-x-2 gap-y-3">
        {currentPageData &&
          currentPageData.map((item) => (
            <Link key={item.id} href={`/product/${item.id}`}>
              <Card className="rounded-md p-0 gap-3 hover:-translate-y-0.5 animate-fade-in duration-300">
                <div className="w-full h-52">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <CardContent className="px-1">
                  <p className="text-sm h-10 line-clamp-2 font-medium">
                    {item.name}
                  </p>
                  <CardDescription className="line-clamp-2 px-2 mt-1">
                    {item.desc}
                  </CardDescription>
                  <div className="flex items-center justify-between px-1 py-4">
                    <p className="min-w-20 text-sm text-red-500">
                      {"đ " + item.price.toLocaleString("vi-VN")}
                    </p>
                    <Button className="rounded-md cursor-pointer">
                      Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>
      <PaginationControl page={page} setPage={setPage} totalPage={totalPage} />
    </>
  );
};

export default ListProducts;
