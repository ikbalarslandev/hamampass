import { TReview } from "@/types";
import ReviewsCard from "./card";
import { useTranslations } from "next-intl";

const ReviewsComponent = ({ reviews }: { reviews: TReview[] }) => {
  const t = useTranslations("review");
  return (
    <div className="mt-6 flex flex-col gap-2">
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewsCard key={index} review={review} />
        ))
      ) : (
        <div className="text-center mt-7">{t("no-review")}</div>
      )}
    </div>
  );
};

export default ReviewsComponent;
