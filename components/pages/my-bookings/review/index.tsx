import { TBooking } from "@/types";
import DrawerGeneral from "@/components/commons/drawer";
import { FaAngleRight, FaStar } from "react-icons/fa";
import ReviewFormComponent from "./review-form";
import ReviewInfo from "./review-info";

const ReviewButton = ({
  className,
  booking,
}: {
  className?: string;
  booking: TBooking;
}) => {
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

  const Content = () => {
    return booking.review ? (
      <ReviewInfo booking={booking} />
    ) : (
      <ReviewFormComponent booking={booking} />
    );
  };

  const title = booking.review ? "My Review" : "Review";

  return (
    <DrawerGeneral
      fill={false}
      trigger={<Trigger />}
      title={title}
      content={<Content />}
    />
  );
};

export default ReviewButton;
