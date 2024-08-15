"use client";

import { useTranslations } from "next-intl";

import { convertAmenityIcon } from "@/utils/db_translations";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const HoverComponent = ({
  amenity,
  isDesc = false,
}: {
  amenity: number;
  isDesc?: boolean;
}) => {
  const amenities = useTranslations("home.filters.amenities");

  return (
    <HoverCard>
      <HoverCardTrigger className={`text-slate-500 ${isDesc && "flex gap-4"}`}>
        <p className={`${isDesc && "text-2xl"}`}>
          {convertAmenityIcon(amenity)}
        </p>
        {isDesc && <p>{amenities(amenity.toString())}</p>}
      </HoverCardTrigger>
      <HoverCardContent>{amenities(amenity.toString())}</HoverCardContent>
    </HoverCard>
  );
};

export default HoverComponent;
