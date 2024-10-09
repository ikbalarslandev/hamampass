"use client";

import { useTranslations } from "@hamampass/i18n";
import { THour } from "@/types";
import { FaRegClock } from "react-icons/fa";
import { checkIsWeekDay } from "@/utils/db_translations";
import moment from "moment";
import { useEffect, useState } from "react";

interface HoursComponentProps {
  data: THour;
}

const ClockComponent = ({ desc }: { desc: string }) => {
  return (
    <div className="flex items-center justify-start gap-4">
      <FaRegClock className=" text-gray-500 mt-[3px]" size={20} />

      <div className="flex flex-col  items-start justify-between mr-20">
        <p className="text-slate-500 text-sm">{desc}</p>
      </div>
    </div>
  );
};

const HoursComponent: React.FC<HoursComponentProps> = ({ data }) => {
  const title = useTranslations("titles");
  const h = useTranslations("single.hours");

  const [isWeekDay, setIsWeekDay] = useState(false);

  useEffect(() => {
    setIsWeekDay(
      checkIsWeekDay(
        moment(
          JSON.parse(sessionStorage.getItem("selected-date") || "{}")
        ).format("d")
      )
    );
  }, [isWeekDay]);

  return (
    <section className="my-2 mt-6 mb-4 ">
      <hr />
      <h2 className="font-bold text-xl mb-3 mt-4 text-gray-600">
        {title("hours-title")}
      </h2>

      {data.segregated_details ? (
        // segregated hours
        <div className="flex flex-col gap-5">
          {/* mens hours */}
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-slate-500">{h("mens")}</h2>
            {isWeekDay ? (
              <ClockComponent
                desc={`${data.segregated_details.mens.weekdays[0]} - ${data.segregated_details.mens.weekdays[1]}`}
              />
            ) : (
              <ClockComponent
                desc={`${data.segregated_details.mens.weekends[0]} - ${data.segregated_details.mens.weekends[1]}`}
              />
            )}
          </div>
          {/* womens hours */}
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-slate-500">{h("womens")}</h2>
            {isWeekDay ? (
              <ClockComponent
                desc={`${data.segregated_details.womens.weekdays[0]} - ${data.segregated_details.womens.weekdays[1]}`}
              />
            ) : (
              <ClockComponent
                desc={`${data.segregated_details.womens.weekends[0]} - ${data.segregated_details.womens.weekends[1]}`}
              />
            )}
          </div>
        </div>
      ) : (
        // regular hours
        <div className="flex flex-col gap-1">
          {isWeekDay ? (
            <ClockComponent
              desc={`${data.weekdays[0]} - ${data.weekdays[1]}`}
            />
          ) : (
            <ClockComponent
              desc={`${data.weekends[0]} - ${data.weekends[1]}`}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default HoursComponent;
