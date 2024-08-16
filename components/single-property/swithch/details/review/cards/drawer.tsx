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
import { useSession } from "next-auth/react";
import Image from "next/image";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { convertAgeRange } from "@/utils/db_translations";
import { TCountry, TReview } from "@/types";
import { useEffect, useState } from "react";
import { request } from "@/services/axios";
import ReviewsComponent from "../../../reviews";

const ReviewDrawerComponent = ({ trigger, reviews }: any) => {
  const { locale } = useParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState<TCountry>();

  const session = useSession();
  const user = session?.data?.user;
  const r = useTranslations("single.review.drawer");
  const title = useTranslations("home.filters.titles");

  const handleTrigger = () => {
    if (!session?.data?.user.id) {
      router.push(`/${locale}/profile`);
      return null;
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const getCountry = async () => {
      const res = await request({
        type: "get",
        endpoint: `country/${user?.nationality}`,
      });
      return setCountry(res.data);
    };
    getCountry();
  }, [user?.nationality]);

  return (
    <Drawer open={isOpen}>
      <DrawerTrigger className="text-sm" onClick={handleTrigger}>
        {trigger}
      </DrawerTrigger>
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
