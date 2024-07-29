"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { request } from "@/services/axios";
import Slider from "./slider";

const SinglePropertyPage = () => {
  let { title } = useParams();
  title = decodeURIComponent(title as string);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const res: any = request({
      type: "get",
      endpoint: `property/${title}`,
    });
    res.then((res: any) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [title]);

  return (
    <div>
      <Slider data={data} />
    </div>
  );
};

export default SinglePropertyPage;
