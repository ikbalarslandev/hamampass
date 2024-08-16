"use client";

import {
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import { useTranslations } from "next-intl";
import ReviewsComponent from "./drawer-content";

const ReviewDrawerComponent = ({ trigger, reviews }: any) => {
  const title = useTranslations("home.filters.titles");

  return (
    <Drawer>
      <DrawerTrigger className="text-sm">{trigger}</DrawerTrigger>
      <DrawerContent className="h-full   ">
        <DrawerHeader className="text-left  min-h-full gap-0  ">
          <DrawerTitle className="flex  align-top items-center justify-between px-2   m-0 ">
            <p> {title("review-title")}</p>
            <DrawerClose>X</DrawerClose>
          </DrawerTitle>
          <div className="overflow-y-auto  flex-1">
            <ReviewsComponent reviews={reviews} />
          </div>
        </DrawerHeader>

        <DrawerFooter className="bg-green-400 p-0"></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ReviewDrawerComponent;
