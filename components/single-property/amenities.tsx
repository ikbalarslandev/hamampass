"use client";

import HoverComponent from "./hover";
import { useTranslations } from "next-intl";

const AmenityComponent = ({ data }: any) => {
  const s = useTranslations("single");

  return (
    <div className="flex flex-col gap-2">
      <hr />
      <h2 className="font-bold text-xl text-gray-600">{s("amenity")}</h2>
      <p className="flex flex-col gap-4 mt-2 ml-1">
        {data &&
          data.map((amenity: any, index: number) => (
            <HoverComponent key={index} amenity={amenity} />
          ))}
      </p>
    </div>
  );
};

export default AmenityComponent;
