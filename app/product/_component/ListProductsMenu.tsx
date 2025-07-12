import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import React from "react";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
  arrange: string | null;
  setArrange: React.Dispatch<React.SetStateAction<string | null>>;
};

const ListProductsMenu = (props: Props) => {
  const handleControlPage = (status: string) => {
    if (status == "next" && props.page < props.totalPage)
      props.setPage(props.page + 1);
    if (status == "previous" && props.page > 1) props.setPage(props.page - 1);
  };

  const handleArrangePrice = (value: string) => {
    props.setArrange(value);
    props.setPage(1);
  };
  return (
    <div className="bg-green-100 p-3 rounded-sm flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <p className="text-sm mr-1">Arrange by</p>
        <div className="rounded-[2px] max-h-8 bg-white text-sm py-1.5 px-5 cursor-pointer">
          Newest
        </div>
        <div className="rounded-[2px] max-h-8 bg-white text-sm py-1.5 px-5 cursor-pointer">
          Best seller
        </div>
        <div className="group relative rounded-[2px] bg-white text-sm py-1.5 pl-5 pr-2 flex items-center justify-between min-w-30">
          <p className="mr-2">
            {"Price" + `${props.arrange ? " : " + props.arrange : ""}`}
          </p>
          <span className="duration-300 transform group-hover:rotate-180">
            <ChevronDownIcon size={12} />
          </span>
          <div className="absolute z-10 hidden group-hover:block animate-fade-in top-full left-0 shadow-sm rounded-xs px-2 bg-white w-full">
            <div
              onClick={() => handleArrangePrice("Ascending")}
              className="my-1 hover:text-primary cursor-pointer text-sm pt-1"
            >
              Ascending
            </div>
            <div
              onClick={() => handleArrangePrice("Descending")}
              className="my-1 hover:text-primary cursor-pointer text-sm pt-1"
            >
              Descending
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div className="flex items-center justify-end mr-2 text-sm font-medium">
          <span className="text-primary mr-0.5">{props.page}</span>
          <span>/{props.totalPage}</span>
        </div>
        <div className="flex items-center gap-1">
          <div
            onClick={() => handleControlPage("previous")}
            className={cn(
              "border cursor-pointer rounded-sm bg-white py-1.5 px-5",
              props.page === 1 && "opacity-60"
            )}
          >
            <ChevronLeftIcon size={20} className="text-primary" />
          </div>
          <div
            onClick={() => handleControlPage("next")}
            className={cn(
              "border cursor-pointer rounded-sm bg-white py-1.5 px-5",
              props.page === props.totalPage && "opacity-60"
            )}
          >
            <ChevronRightIcon size={20} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductsMenu;
