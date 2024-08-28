"use client";

import HoverComponent from "@/components/hover";
import { useTranslations } from "next-intl";

const AmenityComponent = ({ data }: any) => {
  const title = useTranslations("home.filters.titles");

  return (
    <section className="flex flex-col gap-2">
      <hr />
      <h2 className="font-bold text-xl text-gray-600">
        {title("amenity_title")}
      </h2>
      <div className="flex flex-col gap-4 mt-2 ml-1">
        {data &&
          data.map((id: any, index: number) => (
            <HoverComponent key={index} amenity={id} isDesc={true} />
          ))}
      </div>
    </section>
  );
};

export default AmenityComponent;
