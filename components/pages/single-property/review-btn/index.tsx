import ReviewButton from "./review-button";

const ReviewStickBtn = ({
  propertyId,
  minPrice,
}: {
  propertyId: string;
  minPrice: number;
}) => {
  return <ReviewButton minPrice={minPrice} />;
};

export default ReviewStickBtn;
