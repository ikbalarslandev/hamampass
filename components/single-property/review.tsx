import { TRating } from "@/types";
import { Progress } from "@/components/ui/progress";
import { IoStar } from "react-icons/io5";
import { useTranslations } from "next-intl";

interface TProgress {
  data: number;
  title: string;
}

const ProgressComponent = ({ data, title }: TProgress) => {
  const num = Number.isInteger(data) ? `${data}.0` : data.toFixed(1);

  return (
    <div className="flex items-center ">
      <h1 className="text-gray-700 flex-1">{title}</h1>
      <div className="flex items-center gap-2 flex-1  ">
        <Progress value={data * 10} />
        <p className="font-semibold">{num}</p>
      </div>
    </div>
  );
};

const ReviewComponent = ({ data }: { data: TRating }) => {
  const num = Number.isInteger(data.rate_overall)
    ? `${data.rate_overall}.0`
    : data.rate_overall.toFixed(1);

  const s = useTranslations("single");
  const r = useTranslations("review");

  return (
    <div className="mb-5">
      <h2 className="font-bold text-xl text-gray-600">{s("reviews")}</h2>

      <div className="my-3 flex items-center gap-2">
        <IoStar className="text-cyan-500 text-2xl" />
        <p className="text-3xl font-semibold">
          {num}

          <span className="text-lg text-gray-700"> ({data.count})</span>
        </p>
      </div>

      <div className="flex flex-col  ">
        <ProgressComponent data={data.rate_location} title={r("location")} />
        <ProgressComponent data={data.rate_staff} title={r("staff")} />
        <ProgressComponent
          data={data.rate_atmosphere}
          title={r("atmosphere")}
        />
        <ProgressComponent
          data={data.rate_cleanliness}
          title={r("cleanliness")}
        />
        <ProgressComponent
          data={data.rate_facilities}
          title={r("facilities")}
        />
        <ProgressComponent
          data={data.rate_value_for_money}
          title={r("value")}
        />
      </div>
    </div>
  );
};

export default ReviewComponent;
