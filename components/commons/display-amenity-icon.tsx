"use client";

import { useTranslations } from "next-intl";

import {
  convertAFacilityIcon,
  convertAFood_DrinkIcon,
  convertAItemIcon,
} from "@/utils/icon_translations";

const DisplayAmenityIcon = ({
  amenity,
  isDesc = false,
  type = "facilities",
}: {
  amenity: number;
  isDesc?: boolean;
  type?: "facilities" | "items" | "foods_drinks";
}) => {
  const facilities = useTranslations("home.filters.amenities.facilities");
  const items = useTranslations("home.filters.amenities.items");
  const foods_drinks = useTranslations("home.filters.amenities.foods_drinks");

  let convertIcon;
  let translateDesc;

  switch (type) {
    case "facilities":
      convertIcon = convertAFacilityIcon;
      translateDesc = facilities;
      break;
    case "items":
      convertIcon = convertAItemIcon;
      translateDesc = items;
      break;
    case "foods_drinks":
      convertIcon = convertAFood_DrinkIcon;
      translateDesc = foods_drinks;
      break;
    default:
      convertIcon = convertAFacilityIcon;
      translateDesc = facilities;
      break;
  }

  return (
    <div className={`text-slate-500 ${isDesc && "flex gap-4"}`}>
      <p className={`${isDesc && "text-2xl"}`}>
        {convertIcon(amenity, isDesc ? "text-3xl" : "text-lg")}
      </p>
      {isDesc && <p>{translateDesc(amenity.toString())}</p>}
    </div>
  );
};

export default DisplayAmenityIcon;
