import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  category: string;
};

const CountProduct = ({ count, category, setCount }: Props) => {
  const handleCount = (status: string) => {
    if (status === "add") {
      setCount(count + 1);
    } else {
      if (count === 1) {
        return;
      } else {
        setCount(count - 1);
      }
    }
  };
  return (
    <div>
      <div className="flex px-4 my-4">
        <span className="opacity-70">Count</span>
        <div
          className={cn(
            "flex gap-1 px-4",
            category === "course" && "opacity-40"
          )}
        >
          <span
            onClick={() => handleCount("")}
            className={cn(
              "flex items-center justify-center cursor-pointer hover:bg-primary-foreground border px-6 rounded-sm",
              category === "course" && "cursor-not-allowed hover:bg-white",
              count === 1 && "opacity-30 hover:bg-none"
            )}
          >
            <MinusIcon size={16} />
          </span>
          <span className="flex items-center justify-center border px-6 rounded-sm">
            {count}
          </span>
          <span
            onClick={() => handleCount("add")}
            className={cn(
              "flex items-center justify-center cursor-pointer hover:bg-primary-foreground border px-6 rounded-sm",
              category === "course" && "cursor-not-allowed hover:bg-white"
            )}
          >
            <PlusIcon size={16} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountProduct;
