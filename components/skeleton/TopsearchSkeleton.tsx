import { Skeleton } from "../ui/skeleton";

const TopsearchSkeleton = () => {
  return (
    <div className="flex gap-4">
      <div className="basis-1/5">
        <Skeleton className="w-full h-[180px] mb-2" />
        <Skeleton className="w-full h-[40px]" />
      </div>
      <div className="basis-1/5">
        <Skeleton className="w-full h-[180px] mb-2" />
        <Skeleton className="w-full h-[40px]" />
      </div>
      <div className="basis-1/5">
        <Skeleton className="w-full h-[180px] mb-2" />
        <Skeleton className="w-full h-[40px]" />
      </div>
      <div className="basis-1/5">
        <Skeleton className="w-full h-[180px] mb-2" />
        <Skeleton className="w-full h-[40px]" />
      </div>
      <div className="basis-1/5">
        <Skeleton className="w-full h-[180px] mb-2" />
        <Skeleton className="w-full h-[40px]" />
      </div>
    </div>
  );
};

export default TopsearchSkeleton;
