"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { request } from "@/services/axios";
import Slider from "./slider";
import { CiLocationOn } from "react-icons/ci";
import { TProperty } from "@/types";
import { useTranslations } from "next-intl";

import ReviewButton from "./review/review-button";
import RatingComponent from "../cards/rating";
import SwithchComponent from "./swithch";
import DetailsComponent from "./swithch/details";
import ReviewsComponent from "./swithch/reviews";

const SinglePropertyPage = () => {
  let { title } = useParams();
  title = decodeURIComponent(title as string);
  const [data, setData] = useState<TProperty>();
  const v = useTranslations("vibe");
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
    <div>
      <Slider data={data} />
      {data && <ReviewButton propertyId={data?.id} />}
      <div className="flex flex-col mx-2 pt-5">
        <div className="flex gap-1 text-sm  ">
          <CiLocationOn className="text-orange-600 mt-[.1rem]" size={16} />
          {data?.contact.district} / {data?.contact.city}
        </div>
        <h1 className="font-bold text-2xl text-slate-700">{data?.title}</h1>
        <div className="my-2 flex gap-3">
          <span className=" rounded-lg px-2 py-1 bg-teal-700 text-white">
            {data && v(data?.vibe.toString())}
          </span>
          {data && <RatingComponent rating={data?.rating} />}
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
