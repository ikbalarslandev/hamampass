"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { request } from "@/services/axios";
import Slider from "./slider";
import { CiLocationOn } from "react-icons/ci";
import { TProperty } from "@/types";
import { useTranslations } from "next-intl";

import ReviewStickBtn from "./review-btn";
import DetailsComponent from "./details";
import { IoStar } from "react-icons/io5";
import MapDrawerComponent from "./map";

const SinglePropertyPage = () => {
  let { title } = useParams();
  title = decodeURIComponent(title as string);
  const [data, setData] = useState<TProperty>();
  const reviewRef = useRef<HTMLDivElement>(null);
  const s = useTranslations("single");
  const payment_details = useTranslations("home.filters.payment_methods");

  useEffect(() => {
    const res: any = request({
      type: "get",
      endpoint: `property/${title}`,
    });
    res.then((res: any) => {
      setData(res.data);
    });
  }, [title]);

  const scrollToReview = () => {
    if (reviewRef.current) {
      reviewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden mb-16">
      <Slider data={data} />
      {data && <ReviewStickBtn propertyId={data?.id} />}

      <div className="flex flex-col mx-2 pt-5">
        <div className="flex justify-between items-center">
          <MapDrawerComponent
            trigger={
              <div className="flex gap-1 text-sm ">
                <CiLocationOn
                  className="text-orange-600 mt-[.1rem]"
                  size={16}
                />
                {data?.contact.district} / {data?.contact.city}
              </div>
            }
          />

          {/* review star  */}
          <div className="flex items-center gap-1" onClick={scrollToReview}>
            <IoStar className="text-cyan-500 w-5 h-5" />
            <span className="font-bold text-xl">
              {data && parseFloat(data?.rating.rate_overall.toFixed(1))}
            </span>
          </div>
        </div>

        <h1 className="font-bold text-2xl text-slate-700 mb-10">
          {data?.title}
        </h1>

        {data && (
          <div className="bg-emerald-500 text-white rounded text-center">
            {payment_details(data?.pay.toString())}
          </div>
        )}

        <div className="bg-orange-500 text-gray-100 rounded text-center text-sm mt-3 py-1">
          {s("enflation")}
        </div>

        {data && <DetailsComponent data={data} ref={reviewRef} />}
      </div>
    </div>
  );
};

export default SinglePropertyPage;
