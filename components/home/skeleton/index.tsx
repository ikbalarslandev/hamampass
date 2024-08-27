import { SkeletonCard } from "./card";
import { SkeletonHeader } from "./header";

const SkeletonComponent = () => {
  return (
    <div className="w-full flex flex-col">
      <SkeletonHeader />
      <div className="flex flex-col gap-6 items-center mx-4">
        {[0, 1, 2, 3, 4].map((_: any, index: any) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonComponent;
