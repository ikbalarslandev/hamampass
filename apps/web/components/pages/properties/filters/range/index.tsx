"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@hamampass/ui/primitives/accordion.tsx";
import { useTranslations } from "@hamampass/i18n";
import Chart from "./chart";
import React, { useState } from "react";

const RangeComponent = () => {
  const title = useTranslations("titles");
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
