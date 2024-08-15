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
import { useSelector } from "react-redux";

interface DrawerComponentProps {
  trigger: React.ReactNode;
}

const DrawerComponent = ({ trigger }: DrawerComponentProps) => {
  const title = useTranslations("home.filters.titles");
  const btn = useTranslations("home.filters");
  const searchParams = useSearchParams();

  const properties = useSelector(
    (state: any) => state.properties.propertyState
  );

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
