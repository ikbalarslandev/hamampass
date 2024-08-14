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
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useState } from "react";

const ReviewDrawerComponent = ({ id }: any) => {
  const { locale } = useParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const session = useSession();
  const user = session?.data?.user;
  const r = useTranslations("review");

  const handleTrigger = () => {
    if (!session?.data?.user.id) {
      router.push(`/${locale}/profile`);
      return null;
    }
    setIsOpen(!isOpen);
  };

  return (
    <Drawer open={isOpen}>
      <DrawerTrigger className="text-cyan-600 text-sm" onClick={handleTrigger}>
        {r("review")}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-center mb-2">{r("title")}</DrawerTitle>
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
