"use client";

import HoverComponent from "./hover";
import { useTranslations } from "next-intl";

const AmenityComponent = ({ data }: any) => {
  const s = useTranslations("single");

  const convertToAmenity = (id: number) => {
    switch (id) {
      case 0:
        return "Turkish_Bath";
      case 1:
        return "Shower";
      case 2:
        return "Sauna";
      case 3:
        return "Steam_Room";
      case 4:
        return "Jacuzzi";
      case 5:
        return "Pool";
      case 6:
        return "Shock_Pool";
      case 7:
        return "Spa";
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <hr />
      <h2 className="font-bold text-xl text-gray-600">{s("amenity")}</h2>
      <div className="flex flex-col gap-4 mt-2 ml-1">
        {data &&
          data.map((id: any, index: number) => (
            <HoverComponent key={index} amenity={id} />
          ))}
      </div>
    </div>
  );
};

export default AmenityComponent;
