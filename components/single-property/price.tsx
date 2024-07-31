"use client";
import { TPrice } from "@/types";
import { useTranslations } from "next-intl";

interface PriceComponentProps {
  data: TPrice;
}

const PriceComponent = ({ data }: PriceComponentProps) => {
  const p = useTranslations("card");
  return (
    <div className="border rounded-xl  py-3 shadow-lg mt-5">
      <div className="space-y-3">
        <div className="text-gray-700 flex items-center justify-between px-5">
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">{p("adult")}:</span>{" "}
            <span className="text-sm">({p("adult-desc")})</span>
          </div>

          <span className="ml-2 font-semibold text-green-600">
            ₺{data.adult}
          </span>
        </div>
        <div className="text-gray-700 flex items-center justify-between px-5">
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">{p("child")}:</span>{" "}
            <span className="text-sm">({p("child-desc")})</span>
          </div>

          <span className="ml-2 font-semibold text-green-600">
            ₺{data.child}
          </span>
        </div>
        <p className="text-gray-700 flex items-center justify-between px-5">
          <span className="font-semibold text-gray-900">{p("scrub")}:</span>
          <span className="ml-2 font-semibold text-green-600">
            ₺{data.scrub}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PriceComponent;
