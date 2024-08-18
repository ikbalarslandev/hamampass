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
import { useSession, getSession } from "next-auth/react";
import Image from "next/image";
import ReviewFormComponent from "./review-form";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { convertAgeRange } from "@/utils/db_translations";
import { TCountry } from "@/types";
import { useEffect, useState } from "react";
import { request } from "@/services/axios";

const ReviewDrawerComponent = ({ id }: any) => {
  const { locale } = useParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState<TCountry>();
  const g = useTranslations("single.review.gender");

  const { data, status } = useSession();
  const [user, setUser] = useState(data?.user);

  const r = useTranslations("single.review.drawer");
  const b = useTranslations("single.review.btn");

  const handleTrigger = () => {
    if (!user?.id) {
      router.push(`/${locale}/profile`);
      return null;
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (session?.user) {
        setUser(session.user);
      }
    };

    fetchSession();
  }, []);

  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    }
  }, [data]);

  useEffect(() => {
    const getCountry = async () => {
      const res = await request({
        type: "get",
        endpoint: `country/${user?.nationality}`,
      });
      setCountry(res.data);
    };
    if (user?.nationality) {
      getCountry();
    }
  }, [user?.nationality]);

  return (
    <Drawer open={isOpen} handleOnly={true}>
      <DrawerTrigger
        className="fixed bottom-0 w-full p-3 bg-cyan-500 z-20"
        onClick={handleTrigger}
      >
        <p className="text-cyan-600 text-sm w-full bg-white py-2 px-4 rounded text-center">
          {b("review")}
        </p>
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerHeader className="text-left">
          <DrawerTitle className="text-center mb-2">{r("title")}</DrawerTitle>
          <DrawerClose
            className="absolute top-0 right-0 pt-2 pr-4 font-semibold cursor-pointer"
            onClick={handleTrigger}
          >
            X
          </DrawerClose>
        </DrawerHeader>
        <div className="flex items-center gap-2 w-full">
          <div className="relative">
            <Image
              src={user?.image ?? ""}
              alt="avatar"
              width={30}
              height={30}
              className="rounded-full"
            />

            {/* Smaller Image */}
            <div className="absolute -bottom-[.15rem] -right-[.15rem]">
              <Image
                src={
                  country?.image ??
                  "https://flagsoftheworld.info/wp-content/uploads/2022/12/united-states-flag.webp"
                }
                alt="small avatar"
                width={15}
                height={15}
                className="rounded-full border border-gray-400 aspect-square "
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <h1 className="font-semibold">{user?.name}</h1>
            <div className="flex justify-between text-sm text-gray-600">
              <div className="flex items-center gap-2">
                {<p>{g(user?.gender.toString())},</p>}
                <p> {convertAgeRange(user?.age_range || 0)},</p>
                <p>{country && country[`name_${locale}` as keyof TCountry]}</p>
              </div>
            </div>
          </div>
        </div>

        <ReviewFormComponent id={id} />
      </DrawerContent>
    </Drawer>
  );
};

export default ReviewDrawerComponent;
