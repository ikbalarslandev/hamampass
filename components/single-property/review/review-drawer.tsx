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

const ReviewDrawerComponent = ({ id }: any) => {
  const session = useSession();
  const user = session?.data?.user;
  return (
    <Drawer>
      <DrawerTrigger className="bg-gray-500 rounded p-1 text-white m-1">
        Review Now
      </DrawerTrigger>
      <DrawerContent className="h-[60%]">
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
