import { FilterIcon } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Filter = () => {
  return (
    <div>
      <Card className="gap-2 rounded-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-xl uppercase text-primary/80 gap-1">
            <FilterIcon size={20} />
            Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p>Category</p>
            <div className="py-4 flex flex-col gap-2 pl-2">
              <div className="flex items-center gap-2">
                <Checkbox id="all" />
                <Label
                  className="font-normal cursor-pointer w-full"
                  htmlFor="all"
                >
                  All
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="course" />
                <Label
                  className="font-normal cursor-pointer w-full"
                  htmlFor="course"
                >
                  Course
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="book" />
                <Label
                  className="font-normal cursor-pointer w-full"
                  htmlFor="book"
                >
                  Book
                </Label>
              </div>
            </div>
            <Button className="w-full rounded-sm" size={"sm"}>
              Apply
            </Button>
            <Separator className="my-6" />
          </div>
          <div>
            <p>Price</p>
            <div className="py-4 flex flex-col gap-2 pl-2">
              <div className="flex items-center gap-2">
                <Checkbox id="low" />
                <Label
                  className="font-normal cursor-pointer w-full"
                  htmlFor="low"
                >
                  {"<"} 500.000
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="medium" />
                <Label
                  className="font-normal cursor-pointer w-full"
                  htmlFor="medium"
                >
                  500.000 - 1.000.000
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="hight" />
                <Label
                  className="font-normal cursor-pointer w-full"
                  htmlFor="hight"
                >
                  {">"} 1.000.000
                </Label>
              </div>
            </div>
            <Button className="w-full rounded-sm" size={"sm"}>
              Apply
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Filter;
