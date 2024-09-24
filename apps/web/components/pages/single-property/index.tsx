"use client";

import { useRef } from "react";
import Slider from "./image-slider";
import { CiLocationOn } from "react-icons/ci";
import { TProperty } from "@/types";
import { useTranslations } from "next-intl";
import DetailsComponent from "./details";
import { IoStar } from "react-icons/io5";
import { FaTurkishLiraSign } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import DrawerGeneral from "@/components/commons/drawer";
import GoogleMapComponent from "@/components/pages/single-property/details/location/map";
import BookButton from "@/components/pages/single-property/book-btn";

const SinglePropertyPage = ({ data }: { data: TProperty }) => {
  const reviewRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

  const sex = useTranslations("home.filters.sex");
  const title = useTranslations("titles");
  const view = useTranslations("single");
  const payment_details = useTranslations("home.filters.payment_methods");

  const scrollToReview = () => {
    if (reviewRef.current) {
      const headerOffset = window.innerHeight * 0.09;
      const elementPosition = reviewRef.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="overflow-hidden mb-16">
      <Slider data={data} />

      {/* {data && <BookButton property={data} />} */}

      <div className="pt-2">
        <div className="mx-2 flex flex-col">
          <div className="flex justify-between items-center">
            <DrawerGeneral
              trigger={
                <div className="text-sm flex items-center gap-1">
                  <div className="flex gap-1 ">
                    <CiLocationOn
                      className="text-orange-600 mt-[.1rem]"
                      size={16}
                    />
                    {data?.contact.district} / {data?.contact.city}
                  </div>
                  <GoDotFill className="text-gray-500" size={10} />
                  <p className="text-xs">{view("view-map")} </p>
                </div>
              }
              content={
                <div className="h-full">
                  <GoogleMapComponent contact={data?.contact?.location} />
                </div>
              }
              handleOnly={true}
              fullWidth={true}
              title={title("location-title")}
            />

            {/* review star  */}
            {data?.rating && (
              <div className="flex items-center gap-1" onClick={scrollToReview}>
                <IoStar className="text-cyan-500 w-5 h-5" />
                <span className="font-bold text-xl">
                  {(data &&
                    parseFloat(data?.rating?.rate_overall?.toFixed(1))) ||
                    ""}
                </span>
              </div>
            )}
          </div>
          <h1 className="font-bold text-2xl text-slate-700 mb-2">
            {data?.title}
          </h1>
          {data && (
            <div className="flex gap-2 text-xs">
              <div className="border flex items-center gap-3 p-2 pr-4 rounded-2xl bg-orange-500 text-white h-3">
                <FaTurkishLiraSign
                  size={30}
                  className="bg-white text-orange-500 rounded-full p-1"
                />
                <p>{payment_details(data?.pay.toString())}</p>
              </div>
              <div className="border flex items-center gap-3 p-2 px-4 rounded-2xl bg-teal-500 text-white h-3">
                <p>{sex(data.sex.toString())}</p>
              </div>
            </div>
          )}
        </div>

        {data && <DetailsComponent data={data} ref={reviewRef} />}
      </div>
    </div>
  );
};

export default SinglePropertyPage;
