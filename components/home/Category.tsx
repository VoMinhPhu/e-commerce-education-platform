import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "../ui/card";
import { ChevronRightIcon } from "lucide-react";

const Category = () => {
  return (
    <div className="flex items-center justify-center py-8 w-full bg-primary-foreground">
      <div className="max-w-[1200px] border rounded-md w-full bg-white">
        <p className="font-medium text-2xl md:text-3xl text-primary/60 mt-2 ml-2 flex items-center justify-between">
          <span>PRODUCT CATEGORY</span>
          <Link
            href={"/product"}
            className="text-primary text-sm mr-5 flex items-center hover:underline cursor-pointer"
          >
            All products
            <ChevronRightIcon size={20} />
          </Link>
        </p>
        <div className="p-6 lg:p-12 grid grid-cols-2 w-full">
          <div className="flex justify-center gap-2">
            <Link
              href={"/product"}
              className="border shadow-sm rounded-md md:w-3/4 md:p-8"
            >
              <Card className="border-none shadow-none">
                <CardContent className="flex items-center justify-center gap-2 md:gap-8">
                  <Image
                    src="/category/course.svg"
                    alt="course"
                    width={40}
                    height={40}
                  />
                  <p className="text-lg font-medium gap-1">Courses</p>
                </CardContent>
              </Card>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link
              href={"/product"}
              className="border shadow-sm rounded-md md:w-3/4 md:p-8"
            >
              <Card className="border-none shadow-none">
                <CardContent className="flex items-center justify-center gap-2 md:gap-8">
                  <Image
                    src="/category/books.svg"
                    alt="books"
                    width={40}
                    height={40}
                  />
                  <p className="text-lg font-medium gap-1">Books</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
