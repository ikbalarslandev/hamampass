"use client";

import CheckboxComponent from "./checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const vibeData = [
  {
    id: 0,
    name: "Historical",
    paramName: "vibe",
  },
  {
    id: 2,
    name: "Budget",
    paramName: "vibe",
  },
  {
    id: 3,
    name: "Couple Friendly",
    paramName: "vibe",
  },
  {
    id: 4,
    name: "Family Friendly",
    paramName: "vibe",
  },
  {
    id: 5,
    name: "Luxury",
    paramName: "vibe",
  },
];

const VibeComponent = () => {
  const [openValue, setOpenValue] = useState("vibe");
  return (
    <Accordion
      type="single"
      collapsible
      value={openValue}
      onValueChange={setOpenValue}
    >
      <AccordionItem value="vibe">
        <AccordionTrigger className="text-lg">Vibes</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          {vibeData.map((vibe) => (
            <CheckboxComponent key={vibe.id} {...vibe} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default VibeComponent;
