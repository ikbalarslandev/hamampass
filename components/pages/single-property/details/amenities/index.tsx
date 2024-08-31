"use client";

import HoverComponent from "@/components/commons/hover";
import { useTranslations } from "next-intl";

import { FaGreaterThan } from "react-icons/fa";
import DrawerGeneral from "@/components/commons/drawer";

const AmenityComponent = ({ data }: any) => {
  const title = useTranslations("home.filters.titles");
  const see = useTranslations("home.filters.amenities");
  const firstThree = data.slice(0, 3);

  return (
    <section className="flex flex-col gap-2">
      <hr />
      <h2 className="font-bold text-xl text-gray-600">
        {title("amenity_title")}
      </h2>
      <div className="flex flex-col gap-4 mt-2 ml-1">
        {data &&
          firstThree.map((id: any, index: number) => (
            <HoverComponent key={index} amenity={id} isDesc={true} />
          ))}
      </div>
      <DrawerGeneral
        trigger={
          <button className="btn btn-primary w-full pr-4 text-xs font-semibold flex items-center gap-2 justify-end">
            <span>{see("see-all")}</span>
            <FaGreaterThan size={10} />
          </button>
        }
        title={title("amenity_title")}
        fill={false}
        content={
          <div className="flex flex-col gap-4 mt-2 ml-1 mb-5">
            {data &&
              data.map((id: any, index: number) => (
                <HoverComponent key={index} amenity={id} isDesc={true} />
              ))}
          </div>
        }
      />
    </section>
  );
};

export default AmenityComponent;
