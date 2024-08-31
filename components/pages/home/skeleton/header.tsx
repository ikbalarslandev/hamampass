import { Skeleton } from "@/components/ui/skeleton";

const SkeletonHeader = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-2 mb-5">
      <Skeleton className="h-12 w-[150vw] " />
      <Skeleton className="h-12 w-72 " />
      <Skeleton className="h-[1px] w-[150vw] " />
      <Skeleton className="h-12 w-60 " />
    </div>
  );
};

export { SkeletonHeader };
