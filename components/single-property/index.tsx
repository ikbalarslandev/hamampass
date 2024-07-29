"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { request } from "@/services/axios";
import Slider from "./slider";
import { CiLocationOn } from "react-icons/ci";
import { TProperty } from "@/types";

const SinglePropertyPage = () => {
  let { title } = useParams();
  title = decodeURIComponent(title as string);
  const [data, setData] = useState<TProperty>();

  useEffect(() => {
    const res: any = request({
      type: "get",
      endpoint: `property/${title}`,
    });
    res.then((res: any) => {
      console.log("hhh", res.data);
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
      </div>
    </div>
  );
};

export default SinglePropertyPage;
