"use client";
import { useTranslations } from "@hamampass/i18n";
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
import AmenityComponent from "@/components/pages/properties/filters/amenity";
import SortComponent from "@/components/pages/properties/filters/sort";
import SexComponent from "@/components/pages/properties/filters/sex";
import PaymentMethodComponent from "@/components/pages/properties/filters/pay";
import RangeComponent from "@/components/pages/properties/filters/range";
import { useSelector } from "react-redux";
import { Button } from "@hamampass/ui/primitives/button.tsx";
import { useRouter } from "next/navigation";

interface DrawerComponentProps {
  trigger: React.ReactNode;
}

const DrawerComponent = ({ trigger }: DrawerComponentProps) => {
  const title = useTranslations("titles");
  const btn = useTranslations("home.filters");
  const searchParams = useSearchParams();
  const router = useRouter();

  const properties = useSelector(
    (state: any) => state.properties.propertyState
  );

  const handleClear = () => {
    const newUrl = window.location.pathname;
    router.push(newUrl);
  };

  return (
    <Drawer>
      <DrawerTrigger
        className={` border-l ${searchParams.size && "border-cyan-500"} py-2`}
      >
        {trigger}
      </DrawerTrigger>
      <DrawerContent className="h-[96%] ">
        <DrawerHeader className="flex items-center   ">
          <DrawerClose className="absolute top-2">
            <IoClose size={28} />
          </DrawerClose>
          <DrawerTitle className="text-md text-center w-full">
            {title("title")}
          </DrawerTitle>
          <Button onClick={handleClear} variant="clear">
            {btn("clear")}
          </Button>
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
