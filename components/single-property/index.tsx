"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { request } from "@/services/axios";
import Slider from "./slider";
import { CiLocationOn } from "react-icons/ci";
import { TProperty } from "@/types";
import { useTranslations } from "next-intl";

import ReviewButton from "./review-btn/review-button";
import SwithchComponent from "./swithch";
import DetailsComponent from "./swithch/details";
import ReviewsComponent from "./swithch/reviews";
import { IoStar } from "react-icons/io5";

const SinglePropertyPage = () => {
  let { title } = useParams();
  title = decodeURIComponent(title as string);
  const [data, setData] = useState<TProperty>();
  const s = useTranslations("single");
  const payment_details = useTranslations("home.filters.payment_methods");

  const [selectedTab, setSelectedTab] = useState<"details" | "reviews">(
    "details"
  );

  useEffect(() => {
    const res: any = request({
      type: "get",
      endpoint: `property/${title}`,
    });
    res.then((res: any) => {
      setData(res.data);
    });
  }, [title]);

  return (
    <div className="overflow-hidden">
      <Slider data={data} />

      <div className="flex flex-col mx-2 pt-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 text-sm ">
            <CiLocationOn className="text-orange-600 mt-[.1rem]" size={16} />
            {data?.contact.district} / {data?.contact.city}
          </div>
          {data && <ReviewButton propertyId={data?.id} />}
        </div>

        <div className="  flex items-center justify-between mb-10">
          <h1 className="font-bold text-2xl text-slate-700"> {data?.title}</h1>
          <div className="flex items-center gap-1">
            <IoStar className="text-cyan-500 w-5 h-5" />
            <span className="font-bold text-xl">
              {data && parseFloat(data?.rating.rate_overall.toFixed(1))}
            </span>
          </div>
        </div>

        {data && (
          <div className="bg-emerald-500 text-white rounded text-center">
            {payment_details(data?.pay.toString())}
          </div>
        )}

        <div className="bg-orange-500 text-gray-100 rounded text-center text-sm mt-3 py-1">
          {s("enflation")}
        </div>

        <SwithchComponent
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />

        {selectedTab === "reviews"
          ? data && <ReviewsComponent reviews={data.reviews} />
          : data && <DetailsComponent data={data} />}
      </div>
    </div>
  );
};

export default SinglePropertyPage;
