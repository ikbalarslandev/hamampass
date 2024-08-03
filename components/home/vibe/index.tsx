"use client";

import CheckboxComponent from "./checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useTranslations } from "next-intl";

const vibeData = [
  {
    id: 0,
    name: "Historical",
    paramName: "vibe",
  },
  {
    id: 1,
    name: "Budget",
    paramName: "vibe",
  },
  {
    id: 2,
    name: "Couple Friendly",
    paramName: "vibe",
  },
  {
    id: 3,
    name: "Family Friendly",
    paramName: "vibe",
  },
  {
    id: 4,
    name: "Luxury",
    paramName: "vibe",
  },
];

const VibeComponent = () => {
  const [openValue, setOpenValue] = useState("vibe");
  const t = useTranslations("filter");
  const v = useTranslations("vibe");
  return (
    <Accordion
      type="single"
      collapsible
      value={openValue}
      onValueChange={setOpenValue}
    >
      <AccordionItem value="vibe">
        <AccordionTrigger className="text-lg">{t("vtitle")}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          {vibeData.map((vibe) => (
            <CheckboxComponent
              key={vibe.id}
              id={vibe.id}
              name={v(vibe.id.toString())}
              paramName="vibe"
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default VibeComponent;
