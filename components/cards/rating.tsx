import { IoStar, IoStarHalf } from "react-icons/io5";
import { TRating } from "@/types";

const RatingComponent = ({ rating }: { rating: TRating }) => {
  const fullStars = Math.floor(rating.sum);
  const hasHalfStar = rating.sum % 1 !== 0;
  const totalStars = 5;

  rating.sum = parseFloat(rating.sum.toFixed(1));

  return (
    <div className="flex my-2 items-center gap-2 text-cyan-500">
      <span className="flex gap-1">
        {Array.from({ length: fullStars }).map((_, index) => (
          <IoStar key={`full-${index}`} className="w-4 h-4 " />
        ))}
        {hasHalfStar && <IoStarHalf className="w-4 h-4 " />}
        {Array.from({
          length: totalStars - fullStars - (hasHalfStar ? 1 : 0),
        }).map((_, index) => (
          <IoStar key={`empty-${index}`} className="w-4 h-4 text-gray-300" />
        ))}
      </span>
      <div className="flex gap-1 items-center">
        <span className="text-sm">{rating.sum}</span>
        <span className="text-sm">({rating.count})</span>
      </div>
    </div>
  );
};

export default RatingComponent;
