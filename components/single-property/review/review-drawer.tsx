"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import ReviewFormComponent from "./review-form";
import { useTranslations } from "next-intl";

const ReviewDrawerComponent = ({ id }: any) => {
  const session = useSession();
  const user = session?.data?.user;
  const r = useTranslations("review");
  return (
    <Drawer>
      <DrawerTrigger className="text-cyan-600 text-sm">
        {r("review")}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-center mb-2">Review</DrawerTitle>
          <div className="flex items-center gap-2">
            <DrawerDescription>
              <Image
                src={(user?.image as string) || ""}
                alt="user profile"
                width={30}
                height={30}
                className="rounded-full"
              />
            </DrawerDescription>
            <div>
              <DrawerDescription>{user?.name} </DrawerDescription>
              <DrawerDescription className="text-gray-400 text-xs">
                {user?.email}
              </DrawerDescription>
            </div>
          </div>

          <ReviewFormComponent id={id} />
        </DrawerHeader>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ReviewDrawerComponent;
