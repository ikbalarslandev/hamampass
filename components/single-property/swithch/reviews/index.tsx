import { TReview } from "@/types";
import ReviewsCard from "./card";

const ReviewsComponent = ({ reviews }: { reviews: TReview[] }) => {
  return (
    <div className="mt-6 flex flex-col gap-2">
      {reviews.map((review, index) => (
        <ReviewsCard key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewsComponent;
