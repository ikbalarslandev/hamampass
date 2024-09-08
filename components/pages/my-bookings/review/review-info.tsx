import { TBooking } from "@/types";
import { Separator } from "@/components/ui/separator";
import { FaHotel } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { convertAgeRange } from "@/utils/db_translations";

// always 5 star num count is cyan-500 rest is gray-500
const Star5Component = ({
  num = 0,
  title = "test",
}: {
  num: number;
  title: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-lg text-gray-700 ">{title}</p>
      <div className="flex items-center gap-1 ">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            size={18}
            className={index < num ? "text-cyan-500" : "text-gray-300"}
          />
        ))}
      </div>
    </div>
  );
};

const ReviewInfo = ({ booking }: { booking: TBooking }) => {
  const gender = useTranslations("single.review.gender");
  return (
    <div className="flex-col flex mb-6">
      <Separator className="mt-2 mb-6 " />

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-bold">Property</p>
          <h1 className="text-gray-600 ">{booking.property.title}</h1>
        </div>
        <FaHotel size={40} />
      </div>

      <div className="mt-7 flex flex-col gap-1">
        <Star5Component
          title="Atmosphere"
          num={booking.review.rateObj.atmosphere}
        />
        <Star5Component
          title="Cleanliness"
          num={booking.review.rateObj.cleanliness}
        />
        <Star5Component
          title="Facilities"
          num={booking.review.rateObj.facilities}
        />
        <Star5Component
          title="Location"
          num={booking.review.rateObj.location}
        />
        <Star5Component title="Staff" num={booking.review.rateObj.staff} />
        <Star5Component
          title="Value for Money"
          num={booking.review.rateObj.value_for_money}
        />

        <div className="flex items-center justify-between mt-5">
          <p className="text-lg text-gray-700 ">Overall</p>
          <div className="flex items-start gap-1 ">
            <FaStar size={20} className="text-cyan-500" />
            <p>{booking.review.rate.toFixed(1)}</p>
          </div>
        </div>
      </div>

      <Separator className="my-6 " />

      <div className="flex flex-col gap-1">
        <p className="text-gray-400 text-sm">My Review</p>
        <p>{booking.review.comment}</p>
      </div>

      <Separator className="my-6 " />

      <div className="flex flex-col gap-1">
        <p className="text-gray-400 text-sm">About You</p>
        <p>{gender(booking.user?.gender.toString())}</p>
        <p>{convertAgeRange(booking.user?.age_range)}</p>
      </div>
    </div>
  );
};

export default ReviewInfo;
