import ReviewButton from "./review-button";

const ReviewStickBtn = ({
  propertyId,
  minPrice,
}: {
  propertyId: string;
  minPrice: number;
}) => {
  return <ReviewButton propertyId={propertyId} minPrice={minPrice} />;
};

export default ReviewStickBtn;
