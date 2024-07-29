"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { request } from "@/services/axios";
import Slider from "./slider";
import { CiLocationOn } from "react-icons/ci";
import { TProperty } from "@/types";
import { useTranslations } from "next-intl";
import LocationComponent from "./location";
import AmenityComponent from "./amenities";

const SinglePropertyPage = () => {
  let { title } = useParams();
  title = decodeURIComponent(title as string);
  const [data, setData] = useState<TProperty>();
  const v = useTranslations("vibe");

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
      <div className="flex flex-col mx-2 pt-5">
        <div className="flex gap-1 text-sm  ">
          <CiLocationOn className="text-orange-600 mt-[.1rem]" size={16} />
          {data?.contact.district} / {data?.contact.city}
        </div>
        <h1 className="font-bold text-2xl text-slate-700">{data?.title}</h1>
        <div className="my-2">
          <span className=" rounded-lg px-2 py-1 bg-teal-700 text-white">
            {v(data?.vibe || "Historical")}
          </span>
        </div>
        <AmenityComponent data={data?.amenities} />
        {data && <LocationComponent contact={data?.contact} />}
      </div>
    </div>
  );
};

export default SinglePropertyPage;
