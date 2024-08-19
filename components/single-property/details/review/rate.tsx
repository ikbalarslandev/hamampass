import { Progress } from "@/components/ui/progress";
import { TRating } from "@/types";
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

const Rate = ({ data }: { data: TRating }) => {
  const r = useTranslations("single.review.main");

  if (!data) return null;

  return (
    <div className="flex flex-col  ">
      <ProgressComponent data={data.rate_location} title={r("location")} />
      <ProgressComponent data={data.rate_staff} title={r("staff")} />
      <ProgressComponent data={data.rate_atmosphere} title={r("atmosphere")} />
      <ProgressComponent
        data={data.rate_cleanliness}
        title={r("cleanliness")}
      />
      <ProgressComponent data={data.rate_facilities} title={r("facilities")} />
      <ProgressComponent data={data.rate_value_for_money} title={r("value")} />
    </div>
  );
};

export default Rate;
