"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

import CheckboxComponent from "../checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const amenityData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const AmenityComponent = () => {
  const [openValue, setOpenValue] = useState("amenity");
  const title = useTranslations("titles");
  const amenities = useTranslations("home.filters.amenities.facilities");
  return (
    <Accordion
      type="single"
      collapsible
      value={openValue}
      onValueChange={setOpenValue}
    >
      <AccordionItem value="amenity">
        <AccordionTrigger className="text-lg font-bold">
          {title("amenity_title")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3 ">
          {amenityData.map((id) => (
            <CheckboxComponent
              key={id}
              id={id}
              name={amenities(id.toString())}
              paramName="amenity"
              isIcon={true}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AmenityComponent;
