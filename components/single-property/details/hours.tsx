"use client";

import { useTranslations } from "next-intl";
import { THour } from "@/types";
import { FaRegClock } from "react-icons/fa";

interface HoursComponentProps {
  data: THour;
}

const HoursComponent: React.FC<HoursComponentProps> = ({ data }) => {
  const title = useTranslations("home.filters.titles");
  const h = useTranslations("single.hours");

  return (
    <div className="my-2 mt-6 mb-4 ">
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
            <div className="flex items-start  gap-4">
              <FaRegClock className=" text-gray-500 mt-[3px]" size={20} />

              <div className="flex flex-col  items-start justify-between mr-20">
                <p className="text-slate-800">
                  {h("weekdays")}{" "}
                  <span className="text-xs">{h("weekdays-desc")}</span>{" "}
                </p>
                <p className="text-slate-500 text-sm">
                  {data.segregated_details.mens.weekdays[0]} -{" "}
                  {data.segregated_details.mens.weekdays[1]}
                </p>
              </div>
            </div>
            <div className="flex items-start  gap-4">
              <FaRegClock className=" text-gray-500 mt-[3px]" size={20} />

              <div className="flex flex-col  items-start justify-between mr-20">
                <p className="text-slate-800">
                  {h("weekend")}{" "}
                  <span className="text-xs">{h("weekend-desc")}</span>{" "}
                </p>
                <p className="text-slate-500 text-sm">
                  {data.segregated_details.mens.weekends[0]} -{" "}
                  {data.segregated_details.mens.weekends[1]}
                </p>
              </div>
            </div>
          </div>
          {/* womens hours */}
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-slate-500">{h("womens")}</h2>
            <div className="flex items-start  gap-4">
              <FaRegClock className=" text-gray-500 mt-[3px]" size={20} />

              <div className="flex flex-col  items-start justify-between mr-20">
                <p className="text-slate-800">
                  {h("weekdays")}{" "}
                  <span className="text-xs">{h("weekdays-desc")}</span>{" "}
                </p>
                <p className="text-slate-500 text-sm">
                  {data.segregated_details.womens.weekdays[0]} -{" "}
                  {data.segregated_details.womens.weekdays[1]}
                </p>
              </div>
            </div>
            <div className="flex items-start  gap-4">
              <FaRegClock className=" text-gray-500 mt-[3px]" size={20} />

              <div className="flex flex-col  items-start justify-between mr-20">
                <p className="text-slate-800">
                  {h("weekend")}{" "}
                  <span className="text-xs">{h("weekend-desc")}</span>{" "}
                </p>
                <p className="text-slate-500 text-sm">
                  {data.segregated_details.womens.weekends[0]} -{" "}
                  {data.segregated_details.womens.weekends[1]}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // regular hours
        <div className="flex flex-col gap-1">
          <div className="flex items-start  gap-4">
            <FaRegClock className=" text-gray-500 mt-[3px]" size={20} />

            <div className="flex flex-col  items-start justify-between mr-20">
              <p className="text-slate-800">
                {h("weekdays")}{" "}
                <span className="text-xs">{h("weekdays-desc")}</span>{" "}
              </p>
              <p className="text-slate-500 text-sm">
                {data.weekdays[0]} - {data.weekdays[1]}
              </p>
            </div>
          </div>
          <div className="flex items-start  gap-4">
            <FaRegClock className=" text-gray-500 mt-[3px]" size={20} />

            <div className="flex flex-col  items-start justify-between mr-20">
              <p className="text-slate-800">
                {h("weekend")}{" "}
                <span className="text-xs">{h("weekend-desc")}</span>{" "}
              </p>
              <p className="text-slate-500 text-sm">
                {data.weekends[0]} - {data.weekends[1]}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoursComponent;
