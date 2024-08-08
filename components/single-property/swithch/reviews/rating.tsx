import { IoStar } from "react-icons/io5";

const RatingComponent = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const totalStars = 5;

  return (
    <div className="flex my-2 items-center gap-2 text-cyan-500">
      <span className="flex gap-1">
        {Array.from({ length: fullStars }).map((_, index) => (
          <IoStar key={`full-${index}`} className="w-4 h-4 " />
        ))}

        {Array.from({
          length: totalStars - fullStars,
        }).map((_, index) => (
          <IoStar key={`empty-${index}`} className="w-4 h-4 text-gray-300" />
        ))}
      </span>
    </div>
  );
};

export default RatingComponent;
