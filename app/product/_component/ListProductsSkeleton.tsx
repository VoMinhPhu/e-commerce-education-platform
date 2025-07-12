import { Skeleton } from "@/components/ui/skeleton";

const ListProductsSkeleton = () => {
  return (
    <div>
      <div className="border rounded-md">
        <Skeleton className="w-full h-12" />
      </div>
      <div className="mt-4 grid grid-cols-5 gap-x-2 gap-y-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="border rounded-md">
            <Skeleton className="w-full h-50" />
            <Skeleton className="w-full h-25 mt-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProductsSkeleton;
