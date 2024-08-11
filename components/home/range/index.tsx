"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import Chart from "./chart";

const RangeComponent = () => {
  const t = useTranslations("filter");

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="pay">
        <AccordionTrigger className="text-lg font-bold">
          {t("rtitle")}
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-2">
          <Chart />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default RangeComponent;
