import { IoStar } from "react-icons/io5";

const RatingComponent = ({ rating }: { rating: number }) => {
  return (
    <div className="flex my-2 items-center gap-2 text-cyan-500">
      <span className="flex gap-1">
        {Array.from({ length: rating }).map((_, index) => (
          <IoStar key={`full-${index}`} className="w-4 h-4 " />
        ))}
      </span>
    </div>
  );
};

export default RatingComponent;
