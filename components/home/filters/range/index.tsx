"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import Chart from "./chart";
import React, { useState } from "react";

const RangeComponent = () => {
  const title = useTranslations("home.filters.titles");
  const [openValue, setOpenValue] = useState("rate");

  return (
    <Accordion
      type="single"
      collapsible
      value={openValue}
      onValueChange={setOpenValue}
    >
      <AccordionItem value="rate">
        <AccordionTrigger className="text-lg font-bold">
          {title("range_title")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          <Chart />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default RangeComponent;
