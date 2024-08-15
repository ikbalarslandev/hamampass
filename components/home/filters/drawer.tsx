"use client";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import { IoClose } from "react-icons/io5";
import { request } from "@/services/axios";
import { TApiResponse } from "@/types";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import AmenityComponent from "@/components/home/filters/amenity";
import SortComponent from "@/components/home/filters/sort";
import SexComponent from "@/components/home/filters/sex";
import PaymentMethodComponent from "@/components/home/filters/pay";
import RangeComponent from "@/components/home/filters/range";

interface DrawerComponentProps {
  trigger: React.ReactNode;
}

const DrawerComponent = ({ trigger }: DrawerComponentProps) => {
  const title = useTranslations("home.filters.titles");
  const btn = useTranslations("home.filters");
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<TApiResponse>();

  useEffect(() => {
    const sortParam = searchParams.get("sort");
    const vibeParam = searchParams.get("vibe");
    const amenityParam = searchParams.get("amenity");
    const sexParam = searchParams.get("sex");
    const payParam = searchParams.get("pay");
    const rangeParam = searchParams.get("range");
    const districtParam = searchParams.get("district");

    const fetchProperties = async () => {
      try {
        const response = await request({
          type: "get",
          endpoint: "property",
          params: {
            sort: sortParam,
            contact_district: districtParam,
            vibe: vibeParam,
            amenity: amenityParam,
            sex: sexParam,
            pay: payParam,
            range: rangeParam,
          },
        });

        setProperties(Array.isArray(response.data.data) ? response.data : {});
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [searchParams]);

  return (
    <Drawer>
      <DrawerTrigger
        className={` border-l ${searchParams.size && "border-cyan-500"} py-2`}
      >
        {trigger}
      </DrawerTrigger>
      <DrawerContent className="h-[96%] ">
        <DrawerHeader className="flex items-center justify-between ">
          <DrawerTitle className="text-lg ">{title("title")}</DrawerTitle>{" "}
          <DrawerClose>
            <IoClose size={28} />
          </DrawerClose>
        </DrawerHeader>
        <hr />
        <div className="px-5 overflow-y-auto">
          <SortComponent />
          <PaymentMethodComponent />
          <RangeComponent />
          <SexComponent />
          <AmenityComponent />
        </div>
        <DrawerFooter>
          <DrawerClose>
            <p className="bg-cyan-500 mx-4 py-2 my-1 rounded-md text-white">
              {properties && properties.all_items} {btn("show")}
            </p>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
