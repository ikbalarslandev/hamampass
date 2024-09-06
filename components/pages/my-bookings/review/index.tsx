import { TBooking } from "@/types";
import DrawerGeneral from "@/components/commons/drawer";
import { FaAngleRight, FaStar } from "react-icons/fa";

const ReviewButton = ({
  className,
  booking,
}: {
  className?: string;
  booking: TBooking;
}) => {
  const handleReview = () => {
    console.log("review");
  };

  const Trigger = () => {
    return booking.review ? (
      <div
        className={`flex items-center justify-between px-2 gap-1 ${className}`}
      >
        <div className="flex items-center gap-1">
          <FaStar size={18} className="text-cyan-500" />
          <p>{booking?.review?.rate?.toFixed(1)}</p>
        </div>
        <div className="flex items-center gap-1 ">
          <p className="text-sm"> See Review</p>
          <FaAngleRight size={20} />
        </div>
      </div>
    ) : (
      <div className={`flex items-center justify-center gap-1 ${className}`}>
        <FaStar size={18} className="text-cyan-500" />
        Review Now
      </div>
    );
  };
  return (
    <DrawerGeneral
      trigger={<Trigger />}
      title="Review"
      content={<p>hello</p>}
    />
  );
};

export default ReviewButton;
