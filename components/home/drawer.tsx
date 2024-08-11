"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import React from "react";
import { IoClose } from "react-icons/io5";
import AmenityComponent from "./amenity";
import { useTranslations } from "next-intl";
import SortComponent from "./sort";
import SexComponent from "./sex";
import { useSearchParams } from "next/navigation";
import PaymentMethodComponent from "./pay";
import RangeComponent from "./range";
import { useState, useEffect } from "react";
import { request } from "@/services/axios";
import { TApiResponse } from "@/types";

interface DrawerComponentProps {
  trigger: React.ReactNode;
}

const DrawerComponent = ({ trigger }: DrawerComponentProps) => {
  const t = useTranslations("filter");
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<TApiResponse>(
    {} as TApiResponse
  );

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
          <DrawerTitle className="text-lg ">{t("title")}</DrawerTitle>{" "}
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
              {properties.all_items} {t("show")}
            </p>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
