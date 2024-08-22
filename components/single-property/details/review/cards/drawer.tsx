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
import { request } from "@/services/axios";
import { useEffect, useState } from "react";
import { TReview } from "@/types";

const ReviewDrawerComponent = ({ trigger, propertyId }: any) => {
  const title = useTranslations("home.filters.titles");

  const [reviews, setReviews] = useState<TReview[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchReviews = async () => {
      const req = await request({
        type: "get",
        endpoint: `review/${propertyId}`,
        params: { limit: 10 },
      });

      setReviews(req.data.data);
      setCount(req.data.all_items);
    };
    fetchReviews();
  }, [propertyId]);

  return (
    <Drawer>
      <DrawerTrigger className="text-sm">{trigger}</DrawerTrigger>
      <DrawerContent className="h-full   ">
        <DrawerHeader className="text-left  my-1  ">
          <DrawerTitle className="flex  align-top items-center justify-between    m-0 ">
            <p>
              {" "}
              {count} {title("review-title")}
            </p>
            <DrawerClose>X</DrawerClose>
          </DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto  flex-1">
          <ReviewsComponent reviews={reviews} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ReviewDrawerComponent;
