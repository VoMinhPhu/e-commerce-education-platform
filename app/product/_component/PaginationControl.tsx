import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type Props = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
};

const PaginationControl = ({ page, setPage, totalPage }: Props) => {
  const handleControlPage = (status: string) => {
    if (status === "next" && page < totalPage) setPage(page + 1);
    if (status === "previous" && page > 1) setPage(page - 1);
  };

  const generatePages = () => {
    const pages: (number | "...")[] = [];

    if (totalPage <= 10) {
      for (let i = 1; i <= totalPage; i++) pages.push(i);
    } else {
      if (page <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPage);
      } else if (page >= totalPage - 3) {
        pages.push(
          1,
          "...",
          totalPage - 4,
          totalPage - 3,
          totalPage - 2,
          totalPage - 1,
          totalPage
        );
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", totalPage);
      }
    }

    return pages;
  };

  return (
    <div className="h-12 w-full mt-4 flex items-center justify-center rounded-sm gap-1 md:gap-2 bg-white">
      <span
        onClick={() => handleControlPage("previous")}
        className="cursor-pointer border py-2 px-2 md:px-4 h-7 md:h-9 text-primary flex items-center justify-center rounded-[2px]"
      >
        <ChevronLeftIcon size={16} />
        <span className="text-sm ml-1">Previous</span>
      </span>

      {generatePages().map((p, i) => (
        <span
          key={i}
          onClick={() => typeof p === "number" && setPage(p)}
          className={cn(
            "cursor-pointer border py-2 px-4 h-7 md:h-9 text-sm flex items-center justify-center rounded-[2px]",
            p === page && "text-primary font-semibold",
            p === "..." && "cursor-default text-gray-400"
          )}
        >
          {p}
        </span>
      ))}

      <span
        onClick={() => handleControlPage("next")}
        className="cursor-pointer border py-2 px-2 md:px-4 h-7 md:h-9 text-primary flex items-center justify-center rounded-[2px]"
      >
        <span className="text-sm mr-1">Next</span>
        <ChevronRightIcon size={16} />
      </span>
    </div>
  );
};

export default PaginationControl;
