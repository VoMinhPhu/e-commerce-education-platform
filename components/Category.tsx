import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const Category = () => {
  return (
    <div className="flex items-center justify-center py-8 w-full bg-primary-foreground">
      <div className="max-w-[1200px] border rounded-md w-full bg-white">
        <p className="font-medium text-3xl text-primary/60 mt-2 ml-2">
          PRODUCT CATEGORY
        </p>
        <div className="p-12 grid grid-cols-2 w-full">
          <div className="flex justify-center">
            <Card className="rounded-md w-3/4 p-8 cursor-pointer">
              <CardContent className="flex items-center justify-center gap-8">
                <Image
                  src="/category/course.svg"
                  alt="course"
                  width={40}
                  height={40}
                />
                <p className="text-lg font-medium">Courses</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Card className="rounded-md w-3/4 p-8 cursor-pointer">
              <CardContent className="flex items-center justify-center gap-8">
                <Image
                  src="/category/books.svg"
                  alt="books"
                  width={40}
                  height={40}
                />
                <p className="text-lg font-medium">Books</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
