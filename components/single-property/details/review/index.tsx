import { TRating, TReview } from "@/types";
import { IoStar } from "react-icons/io5";
import { useTranslations } from "next-intl";
import Rate from "./rate";
import Cards from "./cards";

const ReviewComponent = ({
  data,
  propertyId,
}: {
  data: TRating;
  propertyId: string;
}) => {
  const num = Number.isInteger(data.rate_overall)
    ? `${data.rate_overall}.0`
    : data.rate_overall.toFixed(1);

  const s = useTranslations("home.filters.titles");

  return (
    <div className="mb-5">
      <h2 className="font-bold text-xl text-gray-600">{s("review-title")}</h2>

      <div className="my-3 flex items-center gap-2">
        <IoStar className="text-cyan-500 text-2xl" />
        <p className="text-3xl font-semibold">
          {num}

          <span className="text-lg text-gray-700"> ({data.count})</span>
        </p>
      </div>
      <Rate data={data} />
      <Cards propertyId={propertyId} />
    </div>
  );
};

export default ReviewComponent;
