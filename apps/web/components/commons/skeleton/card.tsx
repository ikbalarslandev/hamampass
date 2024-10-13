import { Skeleton } from "@hamampass/ui/primitives/skeleton.tsx";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 w-full   ">
      <Skeleton className="h-48 rounded-lg " />
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-60 " />
          <Skeleton className="h-5 w-10 " />
        </div>

        <Skeleton className="h-3 w-40" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-6 " />
          <Skeleton className="h-5 w-6 " />
          <Skeleton className="h-5 w-6 " />
          <Skeleton className="h-5 w-6 " />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="h-12 w-24 " />
          <Skeleton className="h-12 w-24 " />
        </div>
      </div>
    </div>
  );
}
