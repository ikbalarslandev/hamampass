import ReviewButton from "./review-button";

const ReviewStickBtn = ({ propertyId }: { propertyId: string }) => {
  return (
    <div className="fixed bottom-0 w-full p-4 bg-cyan-500 z-20">
      <div className="w-full bg-white text-white py-2 px-4 rounded text-center">
        <ReviewButton propertyId={propertyId} />
      </div>
    </div>
  );
};

export default ReviewStickBtn;
