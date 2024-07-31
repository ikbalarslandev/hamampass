"use client";
import { TPrice } from "@/types";
import { useTranslations } from "next-intl";

interface PriceComponentProps {
  data: TPrice;
}

const PriceComponent = ({ data }: PriceComponentProps) => {
  const p = useTranslations("card");
  return (
    <div className="border-t pt-3">
      <div className="space-y-3">
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">{p("adult")}:</span>{" "}
          {p("adult-desc")}
          <span className="ml-2 font-semibold text-green-600">
            ₺{data.adult}
          </span>
        </p>
        <p className="text-gray-700">
          <span className="font-semibold text-gray-900">{p("child")}:</span>{" "}
          {p("child-desc")}
          <span className="ml-2 font-semibold text-green-600">
            ₺{data.child}
          </span>
        </p>
        <p className="text-gray-700">
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
