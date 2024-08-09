"use client";

import CheckboxComponent from "../vibe/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useTranslations } from "next-intl";

const amenityData = [0, 1, 2, 3, 4, 5, 6];

const AmenityComponent = () => {
  const [openValue, setOpenValue] = useState("amenity");
  const t = useTranslations("filter");
  const a = useTranslations("amenities");
  return (
    <Accordion
      type="single"
      collapsible
      value={openValue}
      onValueChange={setOpenValue}
    >
      <AccordionItem value="amenity">
        <AccordionTrigger className="text-lg font-bold">
          {t("atitle")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2 ">
          {amenityData.map((amenity) => (
            <CheckboxComponent
              key={amenity}
              id={amenity}
              name={a(amenity.toString())}
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
