"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import GoogleMapComponent from "../details/location/map";
import { useTranslations } from "next-intl";

const MapDrawerComponent = ({ trigger, location }: any) => {
  const t = useTranslations("home.filters.titles");

  return (
    <Drawer handleOnly={true}>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerHeader className=" flex justify-between items-center mt-2">
          <DrawerTitle className="text-center mb-2">
            {t("location-title")}
          </DrawerTitle>
          <DrawerClose className="text-xl">X</DrawerClose>
        </DrawerHeader>
        <div className="flex-1 ">
          <GoogleMapComponent contact={location} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MapDrawerComponent;
